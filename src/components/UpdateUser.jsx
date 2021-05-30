import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MedecinService from '../components/services/MedecinService';
import UserService from './services/UserService';

class UpdateUser extends Component {
    constructor(props) {
        super(props);
        this.state ={
            id: this.props.match.params.id,
            nom: '',
            prenom: '',
            age:'',
            cin: '',
            email: '',
            adresse: '',
            ville: '',

        }
        this.changeNomHandler = this.changeNomHandler.bind(this);
        this.changePrenomHandler = this.changePrenomHandler.bind(this);
        this.UpdateUser = this.updateUser.bind(this);


    }

    componentDidMount(){
        UserService.getUserById(this.state.id).then( (res) =>{
            let users =res.data;
            this.setState({nom: users.nom,
                prenom: users.prenom,
                age: users.age,
                cin: users.cin,
                email: users.email,
                adresse: users.adresse,
                ville: users.ville,
                

            });
        });
    }

    updateUser = (e) => {
        e.preventDefault();
        let users ={nom: this.state.nom, prenom: this.state.prenom,cin: this.state.cin, email: this.state.email, age: this.state.age, adresse: this.state.adresse, ville: this.state.ville};
        console.log('users => ' + JSON.stringify(users));
        
       UserService.updateUser(users, this.state.id).then( res => {
            this.props.history.push('/utilisateurs');
        });


    }

    changeNomHandler= (event) => {
        this.setState({nom: event.target.value});
    }

    changePrenomHandler= (event) => {
        this.setState({prenom: event.target.value});
    }
    changeCinHandler= (event) => {
        this.setState({cin: event.target.value});
    }
    changeEmailHandler= (event) => {
        this.setState({email: event.target.value});
    }
    changeAgeHandler= (event) => {
        this.setState({age: event.target.value});
    }

    changeAdresseHandler= (event) => {
        this.setState({adresse: event.target.value});
    }
    changeVilleHandler= (event) => {
        this.setState({ville: event.target.value});
    }

    cancel(){
        this.props.history.push('/utilisateurs');
    }

    render() {
        return (
            <div>
                <div className="outer">
                    <div className="inner">
                        
                            <h3 className = "text-center">Modifier les informations d'un utilisateur</h3>
                            <div className = "cart-body ">
                                <div className="form-row">
                                    <div className="form-group col fly">
                                        <label> Nom :</label>
                                        <input placeholder="Nom " name="nom" className="form-control" value={this.state.nom} onChange={this.changeNomHandler}/>
                                    
                                    </div>
                                    <div className="form-group col fly">
                                        <label> Prénom :</label>
                                        <input placeholder="Prénom" name="prenom" className="form-control" value={this.state.prenom} onChange={this.changePrenomHandler}/>
                                    
                                    </div>
                                    </div>
                                <div className="form-row">  
                                    <div className="form-group col fly">
                                        <label> CNI:</label>
                                        <input placeholder="CNI" name="cin" className="form-control" value={this.state.cin} onChange={this.changeCinHandler}/>
                                    
                                    </div>
                                    <div className="form-group col fly">
                                        <label> Email:</label>
                                        <input placeholder="Email" name="email" className="form-control" value={this.state.email} onChange={this.changeEmailHandler}/>
                                    
                                    </div>
                                </div>
                                <div className="form-row">  
                                    <div className="form-group col fly">
                                        <label> Age:</label>
                                        <input placeholder="Age" name="age" className="form-control"  value={this.state.age} onChange={this.changeAgeHandler}/>
                                    
                                    </div>
                                    <div className="form-group col fly">
                                        <label> Ville:</label>
                                        <input placeholder="Ville" name="Ville" className="form-control" value={this.state.ville} onChange={this.changeVilleHandler}/>
                                    
                                    </div>
                                </div>
                                <div className="form-row">
                                    
                                        <label> Adresse:</label>
                                        <input placeholder="Adresse" name="adresse" className="form-control" value={this.state.adresse} onChange={this.changeAdresseHandler}/>
                                    
                                </div>

                                    <button className="btn btn-success" onClick={this.updateUser}>Enregistrer</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                        
                                
                            </div>
                        </div>
                    
                </div>

            </div>
        );
    }
}


export default UpdateUser;