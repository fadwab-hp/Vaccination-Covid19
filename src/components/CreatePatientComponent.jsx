import React, { Component } from 'react';
import PatientDataService from '../components/services/PatientDataService';
import { Alert } from "react-bootstrap"
import {  Link } from "react-router-dom";

const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
      (val) => val.length > 0 && (valid = false)
    );
    return valid;
  }

class CreatePatientComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            cin:'',
            nom:'',
            prenom:'',
            age: '',
            sexe: 'homme',
            adresse:'',
            email:'',
            tel:'',
            successful: false,
            validForm: true,
            errors: {
            nom: '',
            prenom: '',
            cin: '',
            email: ''
                
        }
        
        }
        this.savePatient = this.savePatient.bind(this);
        this.changeHandler=this.changeHandler.bind(this);
    }
        savePatient = (e)=>{

            e.preventDefault();
            const valid = validateForm(this.state.errors);
             this.setState({validForm: valid});
            let patient={cin:this.state.cin, nom:this.state.nom, prenom:this.state.prenom, age:this.state.age, sexe:this.state.sexe,adresse:this.state.adresse,email:this.state.email,tel:this.state.tel};
            console.log('patient=>'+ JSON.stringify(patient));
            if(valid){  PatientDataService.createPatient(patient).then(res =>{
                this.props.history.push('/patients');

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
                    ? 'name must be 3 characters long!'
                    : '';
                break;
              case 'prenom':
                errors.prenom = 
                  value.length < 3
                    ? 'prenom must be 3 characters long!'
                    : '';
                break;
              case 'cin':
                errors.cin = 
                  value.length < 5
                    ? 'cin must be 5 characters long!'
                    : '';
                break;
              case 'email': 
                errors.email = 
                  validEmailRegex.test(value)
                    ? ''
                    : 'Email is not valid!';
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
    
        cancel(){
            this.props.history.push('/patients');

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
            <div className="outer">
            <div className="inner">
                            <form className="" action="">
                            <h3 classNam="text-center">Ajouter un patient </h3>
                                <div className="form-group">
                                    <input placeholder="CIN" name="cin" className="form-control" value={this.state.cin} onChange={this.changeHandler} required />
                                    {
                                            errors.cin && ( 
                                            <Alert variant="danger">
                                            {errors.cin}
                                            </Alert>
                                             )       
                                        }
                                </div>
                                <div className="form-group">
                                    <input placeholder="Nom" name="nom" className="form-control" value={this.state.nom} onChange={this.changeHandler} required/>
                                    {
                                            errors.nom && ( 
                                                <Alert variant="danger">
                                                {errors.nom}
                                                </Alert>
                                            )
                                        }
                                </div>
                                <div className="form-group">
                                <input placeholder="Prenom" name="prenom" className="form-control" value={this.state.prenom} onChange={this.changeHandler} required/>
                                {
                                            errors.prenom && ( 
                                            <Alert variant="danger">
                                            {errors.prenom}
                                            </Alert>
                                            )
                                        }
                                </div>
                                <div className="form-group">
                                    <input placeholder="Age" name="age" className="form-control" value={this.state.age} onChange={this.changeHandler} required/>
                                </div>
                                <div className="form-group">
                                  <label>Sexe</label>
                                <div className="form-check">
                                <label>
                                  <input
                                    type="radio"
                                    name="react-tips"
                                    value="homme"
                                    checked={this.state.sexe === "homme"}
                                    onChange={this.handleOptionChange}
                                    className="form-check-input"
                                  />
                                  Homme
                                </label>
                                </div>
                                <div className="form-check">
                                <label>
                                  <input
                                    type="radio"
                                    name="react-tips"
                                    value="femme"
                                    checked={this.state.sexe === "femme"}
                                    onChange={this.handleOptionChange}
                                    className="form-check-input"
                                  />
                                  femme
                                </label>
                                </div>
                                </div>
                                   
                                <div className="form-group">
                                    <input placeholder="Adresse" name="adresse" className="form-control" value={this.state.adresse} onChange={this.changeHandler}/>
                                </div>
                                <div className="form-group">
                                    <input type="email" placeholder="E-mail" name="email" className="form-control" value={this.state.email} onChange={this.changeHandler} required/>
                                         {
                                            errors.email && ( 
                                            <Alert variant="danger">
                                            {errors.email}
                                            </Alert>
                                            )
                                        }

                                </div>
                                <div className="form-group">
                                    <input placeholder="Numero du télephone" name="tel" className="form-control" value={this.state.tel} onChange={this.changeHandler} />

                                </div>
                                <button className="btn btn-success" onClick={this.savePatient}>Save</button>
                                          {
                          !this.state.validForm && (
                            <Alert key="validForm" variant="danger">
                              Please check the inputs again!
                            </Alert>
                )
              }
                                <button className="btn btn-danger" onClick={this.cancel.bind(this)} styme={{margingLeft: "10px"}}>Cancel</button>
                            </form>
                        
                    </div>

                    </div>
        );
    }
}

export default CreatePatientComponent;