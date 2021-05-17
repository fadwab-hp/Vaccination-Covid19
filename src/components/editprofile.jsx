import React, { Component } from 'react';

import { Alert } from "react-bootstrap"
import AuthenticationService from '../components/services/AuthentificationService';
const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
} 


class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
          nom: "",
          prenom: "",
          cin: "",
          email: "",
          user: undefined,
          password: "",
          age:"",
           sexe:"homme",
          ville:"",
          adresse:"",
          message: "",
         
          
        };
      }

      onClick = nr => () => {
        this.setState({
          radio: nr
        });
      };

      
      
      componentDidMount() {
        const user = AuthenticationService.getCurrentUser();
        this.setState({user: user});
        document.body.style.background = "white";
       
        AuthenticationService.getPatient(user.cin).then(
          response => {
          
            this.setState({
              nom:response.data.nom,
              prenom:response.data.prenom,
              cin:response.data.cin,
              email:response.data.email,
              age:response.data.age,
              sexe:response.data.sexe,
              ville:response.data.ville,
              adresse:response.data.adresse,
              message: response.data.message,

            })
       
          },
         
        );
      
      }
    
      changeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
      }
    
      render() {
        const title = <h2>Register User</h2>;
        const errors = this.state.errors;
    
        let alert = "";
    
        if(this.state.message){
          if(this.state.successful){
            alert = (
                      <Alert variant="success">
                        {this.state.message}
                      </Alert>
                    );
          }else{
            alert = (
                      <Alert variant="danger">
                        {this.state.message}
                      </Alert>
                    );
          }
        }
        
        let userInfo = "";
      const user = this.state.user;
        return ( 
                 <div>
            <div className="outer">
                  <div className="inner">
                  <form onSubmit={this.signUp}>
                  <h3>Mes Informations</h3>
                    <div className="form-row">
                    <div className="form-group col fly">
                    <label for="nom">nom</label>
                    <input
                      type="text" 
                      placeholder="Enter nom"
                      name="nom" id="nom"
                      value={this.state.nom}
                      autoComplete="nom"
                      onChange={this.changeHandler}
                      className="form-control"
                    />
                    
                    </div>
    
                    <div className="form-group col fly">
                    <label for="prenom">prenom</label>
                    <input
                      type="text" 
                      placeholder="Enter prenom"
                      name="prenom" id="prenom"
                      value={this.state.prenom}
                      autoComplete="prenom"
                      onChange={this.changeHandler}
                      className="form-control"
                    />
                    
                    </div>
                   </div>
    
                    <div className="form-row">
                    <div className="form-group col fly">
                    <label for="cin">cin</label>
                    <input
                      type="text" 
                      placeholder="Enter cin"
                      name="cin" id="cin"
                      value={this.state.cin}
                      autoComplete="cin"
                      onChange={this.changeHandler}
                      className="form-control"
                    />
                   
                        </div>   
    
    
                        <div className="form-group col fly">
                        <label for="email">Email</label>
                    <input required
                      type="text" 
                      name="email" id="email"
                      value={this.state.email}
                      autoComplete="email"
                      onChange={this.changeHandler}
                      className="form-control"
                    />
                   
                    </div>
            </div>
                     
    <br></br>
    <br></br>
            <div className="form-row">
                    <div className="form-group col fly">
                        <label>Age </label>
                        <input type="number"  name="age"     onChange={this.changeHandler} value={this.state.age} autoComplete="off" onChange={this.changeHandler} className="form-control" required/>
                     
                        </div> 
                        <div className="form-group col fly">
                        <div className="radio">
                      <label><input type="radio"  value="homme"
                                        checked={this.state.sexe === "homme"}
                                        onChange={this.handleOptionChange} name="optradio"     onChange={this.changeHandler} />Homme</label>
                      </div>
                      
                     
                       <div className="radio">
                          <label><input type="radio" 
                         value="femme"
                         checked={this.state.sexe === "femme"}
                         onChange={this.handleOptionChange}  name="optradio"/>Femme</label>
                      </div>
           
                    </div>  
                        
                    </div>
            <div className="form-row">
                    <div className="form-group col fly">
                        <label>Ville</label>
                        <input type="text"       onChange={this.changeHandler} name="ville" value={this.state.ville}  autoComplete="off"  className="form-control"  required/>
                        </div>   
                        <div className="form-group col fly">
                        <label>Adresse</label>
                        <input type="text"      onChange={this.changeHandler} name="adresse" value={this.state.adresse}  autoComplete="off" className="form-control"  required/>
    
                    </div>
                    </div>

    
                <button type="submit"  className="btn btn-primary btn-lg btn-block sub">Modifier</button>
                
                  </form>
                  </div>
                  </div>
                  </div>
          );
        }
}

export default EditProfile;