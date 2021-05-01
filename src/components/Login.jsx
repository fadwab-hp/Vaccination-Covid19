import React, { Component } from 'react';
import AuthentificationService from '../components/services/AuthentificationService'
import { Alert } from "react-bootstrap"


class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cin: "",
      password: "",
      error: ""
    };
  }

  changeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }

  doLogin = async (event) => {
    event.preventDefault();

    AuthentificationService
        .signin(this.state.cin, 
                  this.state.password)
      .then(
        () => {
         
          this.props.history.push('/Profile');
        },
        error => {
          this.props.history.push('/Admin');
         
        }
    );
  }

  render() {
    return ( 
      <div>
         
         <div className="outer1">
            <div className="inner1">
            <h3>  Connexion  </h3>
            <form onSubmit={this.doLogin}>
                
                <div className="form-row">   
                    <div className="form-group col fly">
                    <label for="cin"><strong>cin</strong></label>
                <input autoFocus 
                  type="text"
                  name="cin" id="cin"
                  value={this.state.cin}
                  placeholder="Enter cin"
                  autoComplete="con"
                  onChange={this.changeHandler}
                  className="form-control"
                />
                </div>
                </div>
                <div className="form-row">
                  
                    <div className="form-group col fly">
                    <label for="password"><strong>Password</strong></label>
                <input type="password" 
                  name="password" id="password"
                  value={this.state.password}
                  placeholder="Enter Password"
                  autoComplete="password"
                  onChange={this.changeHandler}
                  className="form-control"
                />
                    
                </div>
                </div>

                
                <button type="submit" variant="primary" size="lg" className="btn btn-primary btn-lg btn-block sub" block>
                Sign In
              </button>
              {
                this.state.error && (
                  <Alert color="danger">
                    {this.state.error}
                  </Alert>
                )
              }
            </form>
            </div>
                </div>
       
      </div>);
  }
}

export default Login;