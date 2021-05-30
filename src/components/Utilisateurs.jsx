import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MedecinService from '../components/services/MedecinService';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import UserService from './services/UserService';


class Utilisateurs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: []
        }
       
        this.editUser = this.editUser.bind(this);
        

    }
    

    editUser(id){
        this.props.history.push(`/updateUser/${id}`);

    }

    

    componentDidMount(){
        UserService.getUsers().then((res) => {
            this.setState({ users: res.data});
        });
    }

    
    render() {
        return (
            <div>
                <h2 className="text-center" >Liste des utilisateurs</h2>
                <div className = "row">
                    <table className = "table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th> CNI</th>
                                <th> Nom </th>
                                <th> Prénom </th>
                                <th> Email</th>
                                <th> Age </th>
                                <th> Adresse</th>
                                <th> Ville</th>
                                <th> Actions</th>

                            </tr>

                        </thead>

                        <tbody>
                            {
                                this.state.users.map(
                                    users =>
                                    <tr key = {users.id}>
                                        <td> {users.cin} </td>
                                        <td> {users.nom} </td>
                                        <td> {users.prenom} </td>
                                        <td> {users.email} </td>
                                        <td> {users.age} </td>
                                        <td> {users.ville} </td>
                                        <td> {users.adresse} </td>
                                        <td>
                                            <button onClick = { () =>this.editUser(users.id)} className="btn btn-info" >Modifier</button>
                                            
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


export default Utilisateurs;