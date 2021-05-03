import React, { Component } from 'react';
import AuthenticationService from '../components/services/AuthentificationService';

import { Alert } from "react-bootstrap"
import {  Link } from "react-router-dom";
import declarationservice from '../components/services/declarationservice';
import { Form } from 'react-bootstrap';
import Select from 'react-select';
import { getElementError } from '@testing-library/dom';

class effets extends Component {

    constructor(props) {
        super(props);
        this.state = {
          nom: "",
          prenom: "",
          cin: "",
          effets: "",
          autre:"",
          user: undefined,
          message: "",
          successful: false,

         
          
    };
   
  }
   
    /*componentDidMount() {
        
      }*/
       
  componentDidMount() {
    const user = AuthenticationService.getCurrentUser();
    this.setState({user: user});
    document.body.style.background = "white";
   
    AuthenticationService.getPatient(user.cin).then(
      response => {
      
        this.setState({
          nom:response.data.nom,
          prenom:response.data.prenom,
          cin:response.data.cin
        })
   
      },
     
    );
  
  }
    handleOptionChange = changeEvent => {
        this.setState({
            effets: changeEvent.target.value
        });
      };

     
        Effets = (e) => {
            e.preventDefault();
            
            
             declarationservice.declaration(
                this.state.nom,
                this.state.prenom,
                this.state.cin,
               this.state.effets,
                this.state.autre,
        
              ).then(
                response => {
                  this.setState({
                    message: "Déclaration envoyer avec succès",
                    successful: true
                    
                  });
                },
                error => {
                  console.log("Fail! Error = " + error.toString());
                
                }
              );  
            
          }
          changeeffetHandler=(event)=>{
            this.setState({effets:event.target.value})
        }
        changeautreHandler=(event)=>{
          this.setState({autre:event.target.value})
      }
  render() {
    const { plainArray, objectArray, selectedValues } = this.state;

    let alert = "";
    var effetname=[
      {value:1,
      label:"fffffffff"
    },
    {value:1,
      label:"bbbb"
    },
    {value:1,
      label:"ccccc"
    }
    ];

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
        <div className="container-fluid rounded">
        <div className="row px-5">
            <div className="col-sm-6">
                <div>
                    <h3 className="text-white">Événements indésirables après vaccination</h3>
                    <p className="text-secondary">Suivez votre état de santé vaccinale et déclarez tout évènement observé après vaccination contre le virus de la covid-19 sur le site</p>
                </div>
                <div className="links" id="bordering"> <a href=" " className="btn rounded text-white p-3">
                    <i className="fa fa-phone icon text-primary pr-3"></i>0800000147</a>
                     <a href=" " className="btn rounded text-white p-3"><i className="fa fa-envelope icon text-primary pr-3">
                         </i>MarocVaccinationCovid19@gmail.com</a> <a href=" " className="btn rounded text-white p-3">
                             <i className="fa fa-map-marker icon text-primary pr-3"></i>102 street 2714 Don</a> </div>
                <div className="pt-lg-4 d-flex flex-row justify-content-start">
                    <div className="pad-icon"> <a className="fa fa-facebook text-white" href=" "></a> </div>
                    <div className="pad-icon"> <a className="fa fa-twitter text-white" href=" "></a> </div>
                    <div className="pad-icon"> <a className="fa fa-instagram text-white" href=" "></a> </div>
                </div>
            </div>
           
            <div className="col-sm-6 pad">
                <form className="rounded msg-form" onSubmit={this.Effets}>
                    <div className="form-group row">
                    <div className="col-md-6">
                         <label for="name" class="h6">Nom</label>
                        <div className="input-group border rounded">
                            <div className="input-group-addon px-2 pt-1">
                                <p className=" text-primary"></p>
                            </div> <input type="text" value={this.state.nom} className="form-control border-0"required disabled/>
                        </div>
                        </div>
                        <div className="col-md-6">
                        <label for="name" class="h6">Prenom</label>
                        <div className="input-group border rounded">
                            <div className="input-group-addon px-2 pt-1">
                                <p className=" text-primary"></p>
                            </div> <input type="text" value={this.state.prenom} className="form-control border-0"required disabled/>
                        </div> </div>
                    </div>
                    <div className="form-group row">
                    <div className="col-md-6">
                         <label for="name" className="h6">CIN</label>
                        <div className="input-group border rounded">
                            <div className="input-group-addon px-2 pt-1"> 
                            <i class="text-primary"></i> </div> <input type="text" class="form-control border-0" value={this.state.cin}  required disabled/>
                        </div>
                        </div>
                        <div className="col-md-6">
                        <div className="form-group"> <label for="form_need">Selectectioner l'effet*</label> <select id="form_need" name="need" value={this.state.effets} 
                                        onChange={this.changeeffetHandler} className="form-control" required="required" data-error="Please specify your need.">
                                                <option  selected disabled>--Selectectioner l'effet--</option>
                                                <option value="fatigue">fatigue</option>
                                                <option value="maux de tête">maux de tête</option>
                                                <option value="douleurs articulaires">douleurs articulaires</option>
                                                <option value="frissons, fièvre">frissons, fièvre</option>
                                                <option value="rougeur au site d'injection">rougeur au site d'injection</option>
                                                <option value="nausées">nausées</option>
                                                <option value="gonflement des ganglions lymphatiques">gonflement des ganglions lymphatiques</option>
                                                <option value="sensation de malaise">sensation de malaise</option>
                                                <option value="douleur dans les membres">douleur dans les membres</option>
                                                <option value="insomnies">insomnies</option>
                                                <option>Autre</option>
                                            </select> </div>
                                    </div>
                    </div>
                   
                    <div className="form-group"> <label for="msg" className="h6">Message</label>
                     <textarea name="message" value={this.state.autre} onChange={this.changeautreHandler}  id="msgus" cols="10" rows="5" className="form-control bg-light" placeholder="Message">
                         </textarea> </div>
                         
                         <Select  isMulti options={effetname}></Select>

                     
                    <div className="form-group d-flex justify-content-end">
                         <input type="submit" className="btn btn-primary text-white" value="envoyer la delaration"/> </div>
                         {alert}
                </form>
            </div>
        </div>
        
    </div>

 
    </div>



    );
  }
}

export default effets;