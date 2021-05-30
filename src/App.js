import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import LissteRdvsComponent from './components/LissteRdvsComponent';
import RendezvousComponent from './components/RendezvousComponent';
import Login from './components/Login'
import AccueilPatient from './components/AccueilPatient';
import Profile from './components/Profile';
import AcceuilComponent from './components/AccueilComponent';
import ListMedecinComponent from './components/ListMedecinComponent';
import CreateMedecinComponent from './components/CreateMedecinComponent';
import UpdateMedecinComponent from './components/UpdateMedecinComponent';
import  SignUp from './components/SignUp';
import ListPatients from './components/ListPatients';
import CreatePatientComponent from './components/CreatePatientComponent';
import FicheComponent from './components/FicheComponent'
import Accueil from './components/Accueil';
import Effet from './components/effets_inde';
import Utilisateurs from './components/Utilisateurs';




import MesRendezVous from './components/MesRendezVous'


import editprofile from'./components/editprofile';
import vaccin from './components/vaccinadopte'

import Faq from './components/Faq';
import InfoCampagne from './components/InfoCampagne';
import UpdateUser from './components/UpdateUser';
import essaisvaccin from './components/essaisvaccin';
import Certificat from './components/Certificat';

class App extends Component {
  render() {
    return (
      <div>
      <Router>
            <HeaderComponent/>
            
             
            
            <div className ="container">
              <switch>
              
              <Route path="/Accueil" component={Accueil}></Route>
              <Route path="/editprofile" component={editprofile}></Route>
              <Route path="/patients" component = {ListPatients} ></Route>
              <Route path="/add-patient" component = {CreatePatientComponent} ></Route>
              <Route path="/fiche-patient/:id" component = {FicheComponent} ></Route>
              <Route path="/MesRendezVous" component={MesRendezVous}></Route>
              <Route path="/effet" component={Effet}></Route>
              <Route path="/vaccin" component={vaccin}></Route>
              <Route path="/SignUp" component={SignUp}></Route>
              <Route path = "/Medecins" component = {ListMedecinComponent} ></Route>
              <Route path = "/addMedecin" component = {CreateMedecinComponent} ></Route>
              <Route path = "/updateMedecin/:id" component = {UpdateMedecinComponent} ></Route>
              <Route path="/Admin" component={AcceuilComponent}></Route>
              <Route path="/Login" component={Login}></Route>
              <Route path="/MyProfile" component={AccueilPatient}></Route>
              <Route path ="/RendezVous" component={RendezvousComponent}></Route>
              <Route path ="/rdv" component={LissteRdvsComponent}></Route>
              <Route path="/Profile" component={Profile}></Route>
              <Route path ="/faq" component={Faq}></Route>
              <Route path ="/infos" component ={InfoCampagne} ></Route>
              <Route path="/utilisateurs" component={Utilisateurs}></Route>
              <Route path = "/updateUser/:id" component = {UpdateUser} ></Route>
              <Route path = "/essais" component = {essaisvaccin} ></Route>
              <Route path = "/certificat" component = {Certificat} ></Route>
              </switch>
            </div>
            <FooterComponent/>
      </Router>
       </div>
  );
}
}


export default App;