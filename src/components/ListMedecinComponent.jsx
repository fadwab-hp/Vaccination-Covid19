import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MedecinService from '../components/services/MedecinService';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css


class ListMedecinComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            medecin: []
        }
        this.addMedecin = this.addMedecin.bind(this);
        this.editMedecin = this.editMedecin.bind(this);
        this.deleteMedecin = this.deleteMedecin.bind(this);

    }
    deleteMedecin(id){
        confirmAlert({
            
            message: 'Êtes-vous sûr de vouloir supprimer?',
            buttons: [
              {
                label: 'Oui',
                onClick: () => MedecinService.deleteMedecin(id).then ( res => {
                    this.setState({medecin: this.state.medecin.filter(medecin => medecin.id !== id)});
        
                })
              },
              {
                label: 'Non',
                onClick: () => this.props.history.push('/Medecins')
              }
            ]
          });
       
            
        

    }

    editMedecin(id){
        this.props.history.push(`/updateMedecin/${id}`);

    }

    

    componentDidMount(){
        MedecinService.getMedecins().then((res) => {
            this.setState({ medecin: res.data});
        });
    }

    addMedecin(){
        this.props.history.push('/addMedecin');
    }
    render() {
        return (
            <div>
                <h2 className="text-center" >Liste des medecins</h2>
                <div className= "row">
                    <button className="btn btn-primary" onClick={this.addMedecin} >Ajouter un médecin</button>
                </div>
                <div className = "row">
                    <table className = "table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th> Nom Médecin</th>
                                <th> Prénom Médecin</th>
                                <th> CNI</th>
                                <th> Email</th>
                                <th> Password</th>
                                <th> Centre de vaccination</th>
                                <th> Actions</th>

                            </tr>

                        </thead>

                        <tbody>
                            {
                                this.state.medecin.map(
                                    medecin =>
                                    <tr key = {medecin.id}>
                                        <td> {medecin.nom} </td>
                                        <td> {medecin.prenom} </td>
                                        <td> {medecin.cni} </td>
                                        <td> {medecin.email} </td>
                                        <td> {medecin.password} </td>
                                        <td> {medecin.centre_vaccination} </td>
                                        <td>
                                            <button onClick = { () =>this.editMedecin(medecin.id)} className="btn btn-info" >Modifier</button>
                                            <button style = {{marginLeft: "10px"}} onClick = { () =>this.deleteMedecin(medecin.id)} className="btn btn-danger" >Supprimer</button>
                                        </td>
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


export default ListMedecinComponent;