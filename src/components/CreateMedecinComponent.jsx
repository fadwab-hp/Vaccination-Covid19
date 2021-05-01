import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Alert } from "react-bootstrap"
import {  Link } from "react-router-dom";

import MedecinService from '../components/services/MedecinService';

const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
      (val) => val.length > 0 && (valid = false)
    );
    return valid;
  }
class CreateMedecinComponent extends Component {
  constructor(props) {
        super(props);
        this.state ={
            nom: '',
            prenom: '',
            cni: "",
            email: "",
            password: "",
            centre_vaccination: "",
            successful: false,
            validForm: true,
            errors: {
                nom: '',
                prenom: '',
                cni: '',
                email: '',
                password: ''
      }

        }
        
        this.saveMedecin = this.saveMedecin.bind(this);
        this.changeHandler = this.changeHandler.bind(this);

    }

    saveMedecin = (e) => {
        e.preventDefault();

        const valid = validateForm(this.state.errors);
        this.setState({validForm: valid});
        if(valid){
            
            let medecin ={nom: this.state.nom, prenom: this.state.prenom,cni: this.state.cni, email: this.state.email, password: this.state.password, centre_vaccination: this.state.centre_vaccination};
            console.log('medecin => ' + JSON.stringify(medecin));

            MedecinService.createMedecin(medecin).then(res =>{
            this.props.history.push('/Medecins');
        });
        }


    }
    


    changeHandler = (event) => {
        const { name, value } = event.target;
      
        let errors = this.state.errors;
    
        switch (name) {
          case 'nom':
            errors.nom = 
              value.length < 3
                ? 'Le nom doit contenir 3 carctères au minimum'
                : '';
            break;
          case 'prenom':
            errors.prenom = 
              value.length < 3
                ? 'Le prenom doit contenir 3 carctères au minimum'
                : '';
            break;
          case 'cni':
            errors.cni = 
              value.length < 5
                ? 'La CIN doit avoit 5 carctères au minimum'
                : '';
            break;
          case 'email': 
            errors.email = 
              validEmailRegex.test(value)
                ? ''
                : 'le mail n est pas valide';
            break;
          case 'password': 
            errors.password = 
              value.length < 8
                ? 'Le mot de passe doit avoir 8 carctères au minimum'
                : '';
            break;
          default:
            break;
        }
      
        this.setState({errors, [name]: value}, ()=> {
            console.log(errors)
        })  
      }

    cancel(){
        this.props.history.push('/Medecins');
    }

    render() {
      
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
                <div className = 'container'>
                    <div className = 'row'>
                        <div className = 'card col-md-6 offset-md-3 offset-md-3'>
                            <h3 className = "text-center">Ajouter un médecin</h3>
                            <div className = "cart-body ">
                                <form onSubmit={this.saveMedecin}>
                                    <div className = "form-group">
                                        <label> Nom Médecin:</label>
                                        <input placeholder="Nom Medecin" name="nom" id="nom"  className="form-control" value={this.state.nom} onChange={this.changeHandler} required/>
                                        {
                                            errors.nom && ( 
                                                <Alert variant="danger">
                                                {errors.nom}
                                                </Alert>
                                            )
                                        }
                                    
                                    </div>
                                    <div className = "form-group">
                                        <label> Prénom Médecin:</label>
                                        <input placeholder="Prénom Medecin" name="prenom" id="prenom"  className="form-control" value={this.state.prenom} onChange={this.changeHandler} required/>
                                        {
                                            errors.prenom && ( 
                                            <Alert variant="danger">
                                            {errors.prenom}
                                            </Alert>
                                            )
                                        }
                                    
                                    </div>
                                    <div className = "form-group">
                                        <label> CNI:</label>
                                        <input placeholder="CNI" name="cni" id="cni" className="form-control" value={this.state.cni} onChange={this.changeHandler} required/>
                                        {
                                            errors.cni && ( 
                                            <Alert variant="danger">
                                            {errors.cni}
                                            </Alert>
                                             )       
                                        }
                                    </div>
                                    <div className = "form-group">
                                        <label> Email:</label>
                                        <input placeholder="Email" name="email" id="email"  className="form-control" type="email" value={this.state.email} onChange={this.changeHandler} required/>
                                        {
                                            errors.email && ( 
                                            <Alert variant="danger">
                                            {errors.email}
                                            </Alert>
                                            )
                                        }
                                    
                                    </div>
                                    <div className = "form-group">
                                        <label> Password:</label>
                                        <input placeholder="Password" name="password" id="password"  className="form-control" type="password" value={this.state.password} onChange={this.changeHandler} required minLength="6" maxLength="20"/>
                                        {
                                            errors.password && ( 
                                            <Alert key="errorspassword" variant="danger">
                                            {errors.password}
                                            </Alert>
                                            )
                                        }
                
                                    </div>
                                    <div className = "form-group">
                                        <label> Centre de vaccination:</label>
                                        
                                        <select class="select form-control" name="centre_vaccination" value={this.state.centre_vaccination} onChange={this.changeHandler} required>
                                            <option value="CHU">
                                              CHU
                                            </option>
                                            <option value="Ibn Tofail">
                                              Ibn Tofail
                                            </option>
                                            <option value="Ibn Sina">
                                              Ibn Sina
                                            </option>
                                            <option value="Rabat_Agdal">
                                              Rabat_Agdal
                                            </option>
                                            <option value="Rabat_Riad">
                                              Rabat Riad
                                            </option>
                                            <option value="Tanger_ville">
                                              Tanger_ville
                                            </option>
                                            <option value="Kenitra">
                                              Kenitra
                                            </option>
                                            <option value="Fes">
                                              Fes
                                            </option>
                                            <option value="Marrakech">
                                              Marrakech
                                            </option>
                                            <option value="Meknes">
                                              Meknes
                                            </option>
                                        </select>
          
                                    
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveMedecin}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    {
                                      !this.state.validForm && (
                                        <Alert key="validForm" variant="danger">
                                            Veuillez vérifier les champs entrés
                                        </Alert>
                                      )
                                    }
                        
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}



export default CreateMedecinComponent;