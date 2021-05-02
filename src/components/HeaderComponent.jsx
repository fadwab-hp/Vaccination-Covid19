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
                        
                        <a href="#contact">Informations sur le vaccin</a>
                        <a href="#about">F.A.Q</a>
                    </div>
                
                 </div>
                 
            </header>
            
            </div>
        );
    }
}

export default HeaderComponent;