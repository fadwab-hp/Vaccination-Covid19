import React, { Component } from 'react';
import Royaume from './Royaume.jpeg';

class HeaderComponent extends Component {

    constructor(props){
        super(props)
        this.state={
            
        }
    }
    render() {
        return (
            <div>
                <header>
                
                <div class="header">
                    <img src={Royaume} width="650" height="100" alt="Hello" ></img>
                    <a href="/Accueil" class="logo md-3">Vaccination COVID19</a>
                    
                    <div class="header-right">
                        
                        <a href="/editprofile">Profil</a>
                        
                    </div>
                    
                    <nav id="navbar" class="navbar order-last order-lg-0">
        <ul > 
          <li><a class="nav-link scrollto " href="/Accueil">Home</a></li>
          <li><a class="nav-link scrollto " href="/vaccin">Informations sur le vaccin</a></li>
          <li><a class="nav-link scrollto " href="/faq">F.A.Q</a></li>
          <li><a class="nav-link scrollto " href="/infos">Statistiques vaccination</a></li>
          <li><a class="nav-link scrollto " href="/essais">Essais vaccins</a></li>
          </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>
                 </div>
                
            </header>
            
            </div>
        );
    }
}

export default HeaderComponent;