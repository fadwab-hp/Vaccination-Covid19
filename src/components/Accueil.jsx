import React, { Component } from 'react';
import medecinacc from '../components/medecinacc.jpg'

class Accueil extends Component {

    
    inscrire(){
        this.props.history.push('/SignUp');

    }
    connexion(){
        this.props.history.push('/Login');
    }
  render() {
        return (
           
            <div className="outer">
            <div className="container  back">
              
            <div className="row font text-center">
              <h1>Bienvenue sur le portail de la compagnie 
              <br></br> de vaccination contre le covid19</h1>
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
            <button className="btn btn-primary" onClick={this.inscrire.bind(this)}>S'inscrire</button>   
            </div>
            <br></br>
            <div className="row  text-center">
              <button className="btn btn-primary" onClick={this.connexion.bind(this)}>Se Connecter </button>
                  
            </div>
            </div>
            </div> 
         
        );
    }
}



export default Accueil;