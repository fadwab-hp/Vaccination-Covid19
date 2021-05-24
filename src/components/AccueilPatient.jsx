import React, { Component } from "react";
import {  Link } from "react-router-dom";
import axios from 'axios';

 class AccueilPatient extends Component {
  constructor(props){
    super(props)
    
    this.handleLogout=this.handleLogout.bind(this);

 }
  handleLogout = () => {
    
    axios.get("http://localhost:8081/logout") .catch(error => console.log('BAD', error))
    .then(response=>{
      this.props.history.push('/components/login');
      
});

        }

    render() {
         return (
            <div>
       <br></br>
       <br></br>
         <div className="outer">
          <div className="container bg-no-overlay">
            
          <div className="row font text-center">
            <h1>𝔹𝕚𝕖𝕟𝕧𝕖𝕟𝕦𝕖 𝕊𝕦𝕣 𝕧𝕠𝕥𝕣𝕖 𝕖𝕤𝕡𝕒𝕔𝕖
            <br></br> 𝕕𝕖 𝕧𝕒𝕔𝕔𝕚𝕟𝕒𝕥𝕚𝕠𝕟 𝕔𝕠𝕟𝕥𝕣𝕖 𝕝𝕖 𝕔𝕠𝕧𝕚𝕕</h1>
            </div>
            <br></br>
            <div className="row font text-center">
                <h1> "<strong>𝓵𝓮 𝓿𝓪𝓬𝓬𝓲𝓷 𝓮𝓼𝓽 𝓵𝓪 𝓼𝓸𝓵𝓾𝓽𝓲𝓸𝓷 </strong>"</h1>
                <br/><br/>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <a href="/RendezVous" class="btn-get-started scrollto">Prendre un rendez-vous  </a>
          <br></br>
          <a href="/effet" class="btn-get-started scrollto">Déclarer un effet indésirable</a>
          <br></br>
          <a href="/MesRendezVous" class="btn-get-started scrollto">Consulter vos rendez-vous   </a>
          
          </div>
          </div> 
          </div> 
         );
        


          
        }


}
export default AccueilPatient;