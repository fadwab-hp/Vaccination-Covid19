import React, { Component } from 'react';
import docteur from '../components/docteur.jpg';
import patient1 from '../components/patient1.png';
import statistique from '../components/statistique.png';
import rdv from '../components/rdv.jpg';
import { withRouter } from 'react-router-dom'; 
import {  Link } from "react-router-dom";

class AcceuilComponent extends Component {

    componentDidMount(){
        document.body.style.background = "white";
       }
  render() {
        return (
            
            <div >
              <br></br>
        
            <div>
           
                <section id="services" class="services ">
     <div class="container">             
     <div class="section-title">
     <h2 className="couleur">Bienvenue sur votre espace Admin</h2>
     <p></p>
       </div>

<div class="row">
  <div class="col-lg-4 col-md-6 d-flex align-items-stretch ">
    <div class="icon-box">

        <div class="pic"><img src={docteur} class="img-fluid" alt=""></img></div>
     
      <h4 className="couleur" ><a href="/Medecins">Médecins</a></h4>
      <p className="couleur">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
    </div>
  </div>

  <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
    <div class="icon-box">
        <div class="pic"><img src={patient1} class="img-fluid" alt=""></img></div>
      <h4 className="couleur"><a href="/rdv">Rendez-vous</a></h4>
      <p className="couleur">Visualiser la liste des rendez-vous des patients</p>
    </div>
  </div>

  <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
    <div class="icon-box">
        <div class="pic"><img src={patient1} class="img-fluid" alt=""></img></div>
      <h4 className="couleur"><a href="/utilisateurs">Utilisateurs</a></h4>
      <p className="couleur">Visualiser la liste des utilisateurs</p>
    </div>
  </div>

  <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
    <div class="icon-box">
      <div class="pic"><img src={statistique} class="img-fluid" alt=""></img></div>
      <h4 className="couleur"><a href="">Statistiques et documentation</a></h4>
      <p className="couleur">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
    </div>
  </div>

  
  
  

  </div>

</div>


</section>
 </div>
   </div>
   
        );
    }
}



export default AcceuilComponent;