import React, { Component } from 'react';

import { Alert } from "react-bootstrap"
import Authentication from '../components/services/AuthentificationService';
const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}

class SignUp extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      nom: "",
      prenom: "",
      cin: "",
      email: "",
     
      password: "",
      age:"",
       sexe:"homme",
      ville:"",
      adresse:"",
      message: "",
     
      successful: false,
      validForm: true,
      errors: {
        nom: '',
        prenom: '',
        cin: '',
        email: '',
        password: ''
       
      }
    };
  }
  onClick = nr => () => {
    this.setState({
      radio: nr
    });
  };
  changeHandler = (event) => {
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'nom':
        errors.nom = 
          value.length < 3
            ? 'le nom doit être de 3 caractères au minimum !'
            : '';
        break;
      case 'prenom':
        errors.prenom = 
          value.length < 3
            ? 'le nom doit être de 3 caractères au minimum!'
            : '';
        break;
      case 'cin':
        errors.cin = 
          value.length < 5
            ? 'le nom doit être de 5 caractères au minimum!'
            : '';
        break;
      case 'email': 
        errors.email = 
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
        break;
      case 'password': 
        errors.password = 
          value.length < 8
            ? 'le nom doit être de 8 caractères au minimum!'
            : '';
        break;
        case 'age': 
        errors.age = 
          value.value>18
            ? 'le nom doit être de 8 caractères au minimum!'
            : '';
        break;
      default:
        break;
    }
  
    this.setState({errors, [name]: value}, ()=> {
        console.log(errors)
    })  
  }
  handleOptionChange = changeEvent => {
    this.setState({
      sexe: changeEvent.target.value
    });
  };

  signUp = (e) => {
    e.preventDefault();
    const valid = validateForm(this.state.errors);
    this.setState({validForm: valid});
    if(valid){
      Authentication.register(
        this.state.nom,
        this.state.prenom,
        this.state.cin,
        this.state.email,
        this.state.password,
        this.state.age,
       
        this.state.ville,
        this.state.adresse,
        this.state.sexe
        

      ).then(
        response => {
          this.setState({
            message: response.data.message,
            successful: true
          });
        },
        error => {
          console.log("Fail! Error = " + error.toString());
          
          this.setState({
            successful: false,
            message: 'ce mail  est déja utiliser'
          });
        }
      );  
    }
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

    return ( 
             <div>
        <div className="outer">
              <div className="inner">
              <form onSubmit={this.signUp}>
              <h3>Inscription</h3>
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
                {
                  errors.nom && ( 
                      <Alert variant="danger">
                        {errors.nom}
                      </Alert>
                    )
                }
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
                {
                  errors.prenom && ( 
                      <Alert variant="danger">
                        {errors.prenom}
                      </Alert>
                    )
                }
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
                {
                  errors.cin && ( 
                      <Alert variant="danger">
                        {errors.cin}
                      </Alert>
                    )
                }
                    </div>   


                    <div className="form-group col fly">
                    <label for="email">Email</label>
                <input required
                  type="text" 
                  placeholder="Enter Email"
                  name="email" id="email"
                  value={this.state.email}
                  autoComplete="email"
                  onChange={this.changeHandler}
                  className="form-control"
                />
                {
                  errors.email && ( 
                      <Alert variant="danger">
                        {errors.email}
                      </Alert>
                    )
                }
                </div>
        </div>
                 
<br></br>
<br></br>
        <div className="form-row">
                <div className="form-group col fly">
                    <label>Age </label>
                    <input type="number"  name="age" value={this.state.age} autoComplete="off" onChange={this.changeHandler} className="form-control" placeholder="age" required/>
                    {
                  errors.age && ( 
                      <Alert variant="danger">
                        {errors.age}
                      </Alert>
                    )
                }
                    </div> 
                    <div className="form-group col fly">
                    <div className="radio">
                  <label><input type="radio"  value="homme"
                                    checked={this.state.sexe === "homme"}
                                    onChange={this.handleOptionChange} name="optradio" />Homme</label>
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
                    <input type="text"  name="ville" value={this.state.ville} onChange={this.changeHandler} autoComplete="off"  className="form-control" placeholder="ville" required/>
                    </div>   
                    <div className="form-group col fly">
                    <label>Adresse</label>
                    <input type="text"  name="adresse" value={this.state.adresse} onChange={this.changeHandler} autoComplete="off" className="form-control" placeholder="adresse" required/>

                </div>
                </div>

               

        <div className="form-row">
                
                <div className="form-group col fly">
                <label for="password">Password</label>
                <input required 
                  type="password" 
                  placeholder="Enter Password"
                  name="password" id="password"
                  value={this.state.password}
                  autoComplete="password"
                  onChange={this.changeHandler}
                  className="form-control"
                />
                {
                  errors.password && ( 
                      <Alert key="errorspassword" variant="danger">
                        {errors.password}
                      </Alert>
                    )
                }
                
            </div>
            </div>

            <button type="submit" className="btn btn-primary btn-lg btn-block sub">Register</button>
            
               
            {
                !this.state.validForm && (
                  <Alert key="validForm" variant="danger">
                    Please check the inputs again!
                  </Alert>
                )
              }

              {alert}
              <p className="forgot-password text-right">
             Already registered <a href=" ">log in?</a>
            </p>
              </form>
              </div>
              </div>
              </div>
      );
    }
}

  export default SignUp;