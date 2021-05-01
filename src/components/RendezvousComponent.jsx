import React, { Component } from 'react';
import RendezVousService from '../components/services/RendezVousService';
import profile from '../components/Profile';

class RendezvousComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            date :'',
            heure:'8h',
            id_patient: profile.cin,
            id_medecin:'256',
            id_centre :'',
            etat:'pris'
    }
    this.changedateHandler=this.changedateHandler.bind(this);
    this.changeid_centreHandler=this.changeid_centreHandler.bind(this);

}
saveRDV = (e)=>{
    e.preventDefault();
    let rendez_vous ={date:this.state.date, heure:this.state.heure, id_medecin:this.state.id_medecin, id_centre:this.state.id_centre, etat:this.state.etat};
    console.log('rendez_vous =>'+ JSON.stringify(rendez_vous));
    RendezVousService.createRDV(rendez_vous);
    alert("Votre rendez-vous est pris avec succès, veuiller imrimer votre fiche de rendez vous!");
}

changedateHandler=(event)=>{
    this.setState({date:event.target.value})
}
changeid_centreHandler=(event)=>{
    this.setState({id_centre:event.target.value})
}

cancel(){
    this.props.history.push('/RendezVous');

}
    render() { 
        return (
            <div>
            <div className="outer">
                <div className="inner2">

                    <div >
                    <h1 className="text-center"> Prendre un Rendez-Vous </h1>
                    <div class="bootstrap-iso">
                    <div class="container-fluid">
                    <div class="row">
                    <div class="col-md-6 col-sm-6 col-xs-12">
                        <form method="post" className = "">
                        <div class="form-group ">
                        <label class="control-label " for="select">
                        Centre de Vaccination
                        </label>
                        <select class="select form-control" id="select" name="id_centre" value={this.state.id_centre} onChange={this.changeid_centreHandler}>
                        <option value="CHU">
                            CHU
                        </option>
                        <option value="Ibn Tofail">
                            Ibn Tofail
                        </option>
                        <option value="Ibn Sina">
                            Ibn Sina
                        </option>
                        </select>
                        </div>
                        <div class="form-group ">
                        <label class="control-label " for="date">
                            Date du Rendez Vous
                        </label>
                        <div class="input-group">
                        <input class="form-control" type="date" name="date" dateFormat="YYYY/MM/dd" name='date' value={this.state.date} onChange={this.changedateHandler}/>
                        <div class="input-group-addon">
                            <i class="fa fa-calendar">
                            </i>
                        </div>
                        </div>
                        </div>
                        <div class="form-group">
                        <div>
                        <button class="btn btn-primary " onClick={this.saveRDV}>
                            Prendre le rendez vous
                        </button>
                        </div>
                        </div>
                        </form>
                    </div>
                    </div>
                    </div>
                    </div>
                </div>
                </div>
                </div>
                </div>
        );
}
}
export default RendezvousComponent;