import React, { Component } from 'react';
import RendezVousService from './services/RendezVousService';
import PatientDataService from '../components/services/PatientDataService';

class LissteRdvsComponent extends Component {
    constructor(props){
        super(props)

        this.state={
            patients: []
        }
    }

    componentDidMount(){
        PatientDataService.retrieveAllPatients().then((res)=>{
            this.setState({patients: res.data});
        });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Liste des Rendez Vous</h2>
                <div className= "row">
                    <table className="table table-striped table-borded">
                        <thead>
                            <tr>
                                <th>CIN</th>
                                <th>Nom</th>
                                <th>Prénom</th>
                                <th>Date 1ére dose</th>
                                <th>Date 2éme dose</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.patients.map(
                                    patients=>
                                    <tr key ={patients.id}>
                                        <td>{patients.cin}</td>
                                        <td>{patients.nom}</td>
                                        <td>{patients.prenom}</td>
                                        <td>{patients.dateDePremereDose}</td>
                                        <td>{patients.dateDeuxiemeeDose}</td>
                                        
                                        
                                       
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default LissteRdvsComponent;