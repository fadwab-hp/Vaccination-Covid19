import React, { Component } from 'react';
import PatientDataService from '../components/services/PatientDataService';

class ListPatients extends Component {

    constructor(props) {
        super(props)
        this.state = {
            patients: [],
            message: null
        }
        this.refreshPatients = this.refreshPatients.bind(this)
        this.deletePatientClicked=this.deletePatientClicked.bind(this)
        this.addPatient=this.addPatient.bind(this)
        this.fichePatient=this.fichePatient.bind(this)
    }

    fichePatient(id){
        this.props.history.push(`/fiche-patient/${id}`);

    }

    componentDidMount() {
        this.refreshPatients();
    }

    refreshPatients() {
        PatientDataService.retrieveAllPatients()//HARDCODED
            .then(
                response => {
                    console.log(response);
                    this.setState({ patients: response.data })
                }
            )
    }
    deletePatientClicked(id) {
        PatientDataService.deletePatient(id)
            .then(
                response => {
                    this.setState({ message: `Delete of patient ${id} Successful` })
                    this.refreshPatients()
                }
            )
    
    }
    addPatient(){
        this.props.history.push('/add-patient')
    }
    
    render() {
        return (
            <div>
                <h2 className="text-center">Liste des patients</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addPatient}>Ajouter patient</button>

                </div>
                {this.state.message && <div class="alert alert-success">{this.state.message}</div>}
                <div className="row">
                    <table className="table table-striped table-hover table-bordered">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>CIN</th>
                                <th>Nom</th>
                                <th>Prénom</th>
                                <th>Age</th>
                                <th>Sexe</th>
                                <th>Etat du vaccin </th>
                                <th>Effets indésirables</th>
                                <th>Actions</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                        {
                                this.state.patients.map(
                                    patient =>
                                        <tr key={patient.id}>
                                            <td>{patient.id}</td>
                                            <td>{patient.cin}</td>
                                            <td>{patient.nom}</td>
                                            <td>{patient.prenom}</td>
                                            <td>{patient.age}</td>
                                            <td>{patient.sexe}</td>
                                            <td>{patient.etatDeVaccination}</td>
                                            <td>{patient.effetsInds}</td>
                                            <td>
                                                <button onClick= {() => this.fichePatient(patient.id)} className="btn btn-info">Fiche de patient</button>
                                            </td>
                                            
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListPatients