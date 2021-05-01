import React, { Component } from 'react';
import PatientDataService from '../components/services/PatientDataService';

const options = [
    { label: "Hypertension artérielle", value: "Hypertension artérielle" },
    { label: "Valvulopathie", value: "Valvulopathie" },
    { label: "Cardiomypathies", value: "Cardiomypathies" },
    { label: "Asthmes", value: "Asthmes" },
    { label: "Diabète type1", value: "Diabète type1" },
    { label: "Diabète type2", value: "Diabète type2" },
    { label: "Cancer", value: "Cancer" }
  ];

class FicheComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            id: this.props.match.params.id,
            cin:'',
            nom:'',
            prenom:'',
            age: '',
            sexe: '',
            adresse:'',
            email:'',
            tel:'',
            atcds:'',
            etatDeVaccination:'',
            dateDePremereDose:'',
            dateDeuxiemeeDose:'',
            effetsInds:'',
            observations:''
        }
        this.changeCinHandler=this.changeCinHandler.bind(this);
        this.changeNomHandler=this.changeNomHandler.bind(this);
        this.changePrenomHandler=this.changePrenomHandler.bind(this);
        this.changeAgeHandler=this.changeAgeHandler.bind(this);
        this.changeSexeHandler=this.changeSexeHandler.bind(this);
        this.changeAdresseHandler=this.changeAdresseHandler.bind(this);
        this.changeEmailHandler=this.changeEmailHandler.bind(this);
        this.changeTelHandler=this.changeTelHandler.bind(this);
        this.changeATCDHandler=this.changeATCDHandler.bind(this);
        this.changeEtatHandler=this.changeEtatHandler.bind(this);
        this.changePremiereHandler=this.changePremiereHandler.bind(this);
        this.changeDeuxiemeHandler=this.changeDeuxiemeHandler.bind(this);
        this.changeEffetHandler=this.changeEffetHandler.bind(this);
        this.changeObservationsHandler=this.changeObservationsHandler.bind(this); 
        this.fichePatient=this.fichePatient.bind(this);
    }

    componentDidMount(){
        PatientDataService.getPatientById(this.state.id).then((res) =>{
            let patient=res.data;
            this.setState({
                cin:patient.cin,
                nom:patient.nom,
                prenom:patient.prenom,
                age:patient.age,
                sexe:patient.sexe,
                adresse:patient.adresse,
                email:patient.email,
                tel:patient.tel,
                atcds:patient.atcds,
                etatDeVaccination:patient.etatDeVaccination,
                dateDePremereDose:patient.dateDePremereDose,
                dateDeuxiemeeDose:patient.dateDeuxiemeeDose,
                effetsInds:patient.effetsInds,
                observations:patient.observations,
               

            });
        });
    }
    fichePatient= (e)=>{
            e.preventDefault();
            let patient={cin:this.state.cin, nom:this.state.nom, prenom:this.state.prenom, age:this.state.age, sexe:this.state.sexe,adresse:this.state.adresse,email:this.state.email,tel:this.state.tel ,atcds:this.state.atcds ,etatDeVaccination:this.state.etatDeVaccination ,dateDePremereDose:this.state.dateDePremereDose ,dateDeuxiemeeDose:this.state.dateDeuxiemeeDose ,effetsInds:this.state.effetsInds ,observations:this.state.observations};
            console.log('patient=>'+ JSON.stringify(patient));
            PatientDataService.fichePatient(patient, this.state.id).then(res =>{
                this.props.history.push('/patients');

            });
       
        }



        changeCinHandler=(event)=>{
            this.setState({cin:event.target.value})
        }
        changeNomHandler=(event)=>{
            this.setState({nom:event.target.value})
        }
        changePrenomHandler=(event)=>{
            this.setState({prenom:event.target.value})
        }
        changeAgeHandler=(event)=>{
            this.setState({age:event.target.value})
        }
        changeSexeHandler=(event)=>{
            this.setState({sexe:event.target.value})
        }
        changeAdresseHandler=(event)=>{
            this.setState({adresse:event.target.value})
        }
        changeEmailHandler=(event)=>{
            this.setState({email:event.target.value})
        }
        changeTelHandler=(event)=>{
            this.setState({tel:event.target.value})
        }
        changeATCDHandler=(event)=>{
            this.setState({atcds:event.target.value})
        }
        changeEtatHandler=(event)=>{
            this.setState({etatDeVaccination:event.target.value})
        }
        changePremiereHandler=(event)=>{
            this.setState({dateDePremereDose:event.target.value})
        }
        changeDeuxiemeHandler=(event)=>{
            this.setState({dateDeuxiemeeDose:event.target.value})
        }
        changeEffetHandler=(event)=>{
            this.setState({effetsInds:event.target.value})
        }
        changeObservationsHandler=(event)=>{
            this.setState({observations:event.target.value})
        }
      
        cancel(){
            this.props.history.push('/patients');

        }
    
    render() {
        
        return (
           
            <div className="outer">
            <div className="inner">
                        
                            <form className="" action="">
                                <h3 classNam="text-center">Fiche de patient </h3>
                            <div className="form-row">
         
                                <div className="form-group col fly">
                                    <input placeholder="CIN" name="cin" className="form-control" value={this.state.cin} onChange={this.changeCinHandler} />
                                    </div>
                                    <div className="form-group col fly">
                                    <input placeholder="Nom" name="nom" className="form-control" value={this.state.nom} onChange={this.changeNomHandler} />
                                    </div>
                                </div>
                                <div className="form-row">
                                <div className="form-group col fly">
                                <input placeholder="Prenom" name="prenom" className="form-control" value={this.state.prenom} onChange={this.changePrenomHandler} />
                                </div>
                                <div className="form-group col fly">
                                <input placeholder="Age" name="age" className="form-control" value={this.state.age} onChange={this.changeAgeHandler} />
                                </div>
                                </div>

                                <div className="form-row">
            
                                <div className="form-group col fly">
                                    <input placeholder="Sexe" name="sexe" className="form-control" value={this.state.sexe} onChange={this.changeSexeHandler} />
                                    </div>
                                    <div className="form-group col fly">
                                    <input placeholder="Adresse" name="adresse" className="form-control" value={this.state.adresse} onChange={this.changeAdresseHandler} />
                                </div>
                                </div>
                                <div className="form-row">
                                <div className="form-group col fly">
                                    <input placeholder="E-mail" name="email" className="form-control" value={this.state.email} onChange={this.changeEmailHandler} />
                                    </div>
                                    <div className="form-group col fly">
                                    <input placeholder="Numero du télephone" name="tel" className="form-control" value={this.state.tel} onChange={this.changeTelHandler} />

                                </div>
                                </div>
                                <div className="form-group">
                                    <input placeholder="ATCDs"  class=" form-control"  name="ATCDs" className="form-control" value={this.state.atcds} onChange={this.changeATCDHandler}/>
                                      
                                      

                                </div>
                                <div className="form-group">
                                    <input placeholder="Etat de vaccination" name="etatDeVaccination" className="form-control" value={this.state.etatDeVaccination} onChange={this.changeEtatHandler} />

                                </div>
                                <div className="form-group">
                                    <input type="date" dateFormat="yyyy/MM/dd" name="dateDePremereDose" className="form-control" value={this.state.dateDePremereDose}  onChange={this.changePremiereHandler} />

                                </div>
                                <div className="form-group">
                                    <input type="date" dateFormat="yyyy/MM/dd" name="dateDeuxiemeDose" className="form-control" value={this.state.dateDeuxiemeeDose} onChange={this.changeDeuxiemeHandler} />

                                </div>
                                <div className="form-group">
                                    <input placeholder="Effets indésirables" name="effetsInds" className="form-control" value={this.state.effetsInds} onChange={this.changeEffetHandler} />

                                </div>
                                <div className="form-group">
                                    <textarea type="textarea" placeholder="Observations" name="observations" className="form-control" rows="3" value={this.state.observations} onChange={this.changeObservationsHandler}></textarea>

                                </div>
                                <button className="btn btn-success" onClick={this.fichePatient}>Save</button>
                                <button className="btn btn-danger" onClick={this.cancel.bind(this)} styme={{margingLeft: "10px"}}>Cancel</button>
                            
                            </form>
                           
                            </div>
                        
                    </div>
                    
        
        );
    }
}

export default FicheComponent;