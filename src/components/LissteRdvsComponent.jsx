import React, { Component } from 'react';
import RendezVousService from './services/RendezVousService';

class LissteRdvsComponent extends Component {
    constructor(props){
        super(props)

        this.state={
            rendez_vous: []
        }
    }

    componentDidMount(){
        RendezVousService.getRendezvous().then((res)=>{
            this.setState({rendez_vous: res.data});
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
                                <th>date</th>
                                <th>etat</th>
                                <th>heure</th>
                                <th>id_centre</th>
                                <th>id_medecin</th>
                                <th>id_patient</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.rendez_vous.map(
                                    rendezvous=>
                                    <tr key ={rendezvous.id}>
                                        <td>{rendezvous.date}</td>
                                        <td>{rendezvous.etat}</td>
                                        <td>{rendezvous.heure}</td>
                                        <td>{rendezvous.id_centre}</td>
                                        <td>{rendezvous.id_medecin}</td>
                                        <td>{rendezvous.id_patient}</td>
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