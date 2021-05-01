import React, { Component } from 'react';

import Royaume from './Royaume.jpeg'


class HeaderComponent extends Component {
    
    render() {
        return (
            <div>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
             <div className="container">
               <h3 className="couleur">Vaccination Covid19</h3>
               <img src={Royaume} alt="covid"/>
             </div>
             <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
            
                <li className="nav-item">
                <p className="couleur">Je m'informe sur le vaccin</p>
              
               </li>
                   <li className="nav-item"><p className="couleur">FAQ</p>
                  </li>
            </ul>
          
           </div>
            </nav>
            </div>
        );
    }
}



export default HeaderComponent