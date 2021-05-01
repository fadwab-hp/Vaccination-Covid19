import React, { Component } from "react";
import {  Link } from "react-router-dom";
import axios from 'axios';

 class AccueilPatient extends Component {
  constructor(props){
    super(props)
    
    this.handleLogout=this.handleLogout.bind(this);

 }
  handleLogout = () => {
    
    axios.get("http://localhost:8088/logout") .catch(error => console.log('BAD', error))
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
          <div className="row  text-center">
                <p> <a href="/RendezVous ">Cliquez-içi pour :</a>  <strong>𝐏𝐫𝐞𝐧𝐝𝐫𝐞 𝐫𝐞𝐧𝐝𝐞𝐳-𝐯𝐨𝐮𝐬</strong> </p>
                
          </div>
          <br></br>
          <div className="row  text-center">
                <p> <a href=" ">Cliquez-içi pour :</a>  <strong>𝐃é𝐜𝐥𝐚𝐫𝐞𝐳 𝐮𝐧 𝐞𝐟𝐟𝐞𝐭 𝐢𝐧𝐝é𝐬𝐢𝐫𝐚𝐛𝐥𝐞</strong> </p>
                <br/><br/>
          </div>
          </div>
          </div> 
          </div> 
         );
        


          
        }


}
export default AccueilPatient;