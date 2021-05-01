import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MedecinService from '../components/services/MedecinService';

class UpdateMedecinComponent extends Component {
    constructor(props) {
        super(props);
        this.state ={
            id: this.props.match.params.id,
            nom: '',
            prenom: '',
            cni: "",
            email: "",
            password: "",
            centre_vaccination: "",

        }
        this.changeNomMedecinHandler = this.changeNomMedecinHandler.bind(this);
        this.changePrenomMedecinHandler = this.changePrenomMedecinHandler.bind(this);
        this.updateMedecin = this.updateMedecin.bind(this);


    }

    componentDidMount(){
        MedecinService.getMedecinById(this.state.id).then( (res) =>{
            let medecin =res.data;
            this.setState({nom: medecin.nom,
                prenom: medecin.prenom,
                cni: medecin.cni,
                email: medecin.email,
                password: medecin.password,
                centre_vaccination: medecin.centre_vaccination,

            });
        });
    }

    updateMedecin = (e) => {
        e.preventDefault();
        let medecin ={nom: this.state.nom, prenom: this.state.prenom,cni: this.state.cni, email: this.state.email, password: this.state.password, centre_vaccination: this.state.centre_vaccination};
        console.log('medecin => ' + JSON.stringify(medecin));
        
        MedecinService.updateMedecin(medecin, this.state.id).then( res => {
            this.props.history.push('/Medecins');
        });


    }

    changeNomMedecinHandler= (event) => {
        this.setState({nom: event.target.value});
    }

    changePrenomMedecinHandler= (event) => {
        this.setState({prenom: event.target.value});
    }
    changeCniMedecinHandler= (event) => {
        this.setState({cni: event.target.value});
    }
    changeEmailHandler= (event) => {
        this.setState({email: event.target.value});
    }
    changePasswordHandler= (event) => {
        this.setState({password: event.target.value});
    }

    changecentreHandler= (event) => {
        this.setState({centre_vaccination: event.target.value});
    }

    cancel(){
        this.props.history.push('/Medecins');
    }

    render() {
        return (
            <div>
                <div className = 'container'>
                    <div className = 'row'>
                        <div className = 'card col-md-6 offset-md-3 offset-md-3'>
                            <h3 className = "text-center">Modifier les informations d'un médecin</h3>
                            <div className = "cart-body ">
                                <form>
                                    <div className = "form-group">
                                        <label> Nom Médecin:</label>
                                        <input placeholder="Nom Medecin" name="nom" className="form-control" value={this.state.nom} onChange={this.changeNomMedecinHandler}/>
                                    
                                    </div>
                                    <div className = "form-group">
                                        <label> Prénom Médecin:</label>
                                        <input placeholder="Prénom Medecin" name="prenom" className="form-control" value={this.state.prenom} onChange={this.changePrenomMedecinHandler}/>
                                    
                                    </div>
                                    <div className = "form-group">
                                        <label> CNI:</label>
                                        <input placeholder="CNI" name="cni" className="form-control" value={this.state.cni} onChange={this.changeCniMedecinHandler}/>
                                    
                                    </div>
                                    <div className = "form-group">
                                        <label> Email:</label>
                                        <input placeholder="Email" name="email" className="form-control" value={this.state.email} onChange={this.changeEmailHandler}/>
                                    
                                    </div>
                                    <div className = "form-group">
                                        <label> Password:</label>
                                        <input placeholder="Password" name="password" className="form-control" type="password" value={this.state.password} onChange={this.changePasswordHandler}/>
                                    
                                    </div>
                                    <div className = "form-group">
                                        <label> Centre de vaccination:</label>
                                        <input placeholder="Centre de vaccination" name="centre_vaccination" className="form-control" value={this.state.centre_vaccination} onChange={this.changecentreHandler}/>
                                    
                                    </div>

                                    <button className="btn btn-success" onClick={this.updateMedecin}>Enregistrer</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                        
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}


export default UpdateMedecinComponent;