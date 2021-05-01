import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';
import { Alert } from "react-bootstrap"

import AuthentificationService from '../components/services/AuthentificationService';

class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {user: undefined};
  }

  componentDidMount() {
    const user = AuthentificationService.getCurrentUser();
    this.setState({user: user});
  }

  render() {
    let userInfo = "";
    const user = this.state.user;

    // login
    if (user && user.accessToken) {

      let roles = "";

      user.authorities.forEach(authority => {
        roles = roles + " " + authority.authority
        if(authority.authority=="ROLE_USER"){
            userInfo =  this.props.history.push('/MyProfile');
        }
        else{
            userInfo =  this.props.history.push('/patients'); /*<div style={{marginTop:"20px"}}>
                  <Alert variant="info">
                    <h2>User Info</h2>
                    <ul>
                      <li>Username: {user.username}</li>
                      <li>Access Token: {user.accessToken}</li>
                      <li>user:</li>
                    </ul>
                  </Alert>
                </div>*/
        }
      });
   
      
    } else { // not login
      userInfo = <div style={{marginTop:"20px"}}>
      <Alert variant="primary">
        <h2>Profile Component</h2>
        <Button color="success"><Link to="/signin"><span style={{color:"white"}}>Login</span></Link></Button>
      </Alert>
    </div>
      
    
    }

    return (
      <div>
        
        <Container fluid>
        {userInfo}
        </Container>
      </div>
    );
  }
}

export default Profile;