import React, { Component } from 'react';
import AuthenticationService from '../components/services/AuthentificationService';
import jsPDF from 'jspdf'
class MesRendezVous extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user: [],

            message: null
        
    };
  }
  pdfGenerate=()=>{
    var doc=new jsPDF('p', 'pt', 'a2' );
    doc.html(document.querySelector("#content"), {
        callback:function(pdf){
            pdf.save("mypdf.pdf");
        }
    });
    
};    
pdfGenerate2=()=>{
    var doc=new jsPDF('p', 'pt', 'a2' );
    doc.html(document.querySelector("#content2"), {
        callback:function(pdf){
            pdf.save("mafiche.pdf");
        }
    });
    
};  
  componentDidMount() {
    const user = AuthenticationService.getCurrentUser();
    this.setState({user: user});
    document.body.style.background = "white";
   
    AuthenticationService.getPatientDetails(user.cin).then(
      response => {
      
        this.setState({
          nom:response.data.nom,
          prenom:response.data.prenom,
          cin:response.data.cin,
          etatDeVaccination:response.data.etatDeVaccination,
          dateDePremereDose:response.data.dateDePremereDose,
          dateDeuxiemeeDose:response.data.dateDeuxiemeeDose
        })
   
      },
     
    );
  
  }

  render() {

    let userInfo = "";
    const user = this.state.user;
    return (
       <div>       
                    
        <div className=" rounded" >
        
        <div className="row px-5" >
            <div className="outer">
              <div className="inner3" >
                <form className="rounded msg-form" method="" id="content">
                <h3 className="">Rendez vous pour la première dose</h3>
                    <div className="form-group row">
                    <div className="col-md-6">
                         <label for="name" class="h6">Nom</label>
                        <div className="input-group border rounded">
                            <div className="input-group-addon px-2 pt-1">
                                <p className=" text-primary"></p>
                            </div> <input type="text" value={this.state.nom} className="form-control border-0"required disabled/>
                        </div>
                        </div>
                        <div className="col-md-6">
                        <label for="name" class="h6">Prenom</label>
                        <div className="input-group border rounded">
                            <div className="input-group-addon px-2 pt-1">
                                <p className=" text-primary"></p>
                            </div> <input type="text" value={this.state.prenom} className="form-control border-0"required disabled/>
                        </div> </div>
                    </div>
                    <div className="form-group row">
                    <div className="col-md-6">
                         <label for="name" className="h6">CIN</label>
                        <div className="input-group border rounded">
                            <div className="input-group-addon px-2 pt-1"> 
                            <i class="text-primary"></i> </div> <input type="text" class="form-control border-0" value={this.state.cin}  required disabled/>
                        </div>
                        </div>
                        <div className="col-md-6">
                         <label for="name" className="h6">Etat de vaccination</label>
                        <div className="input-group border rounded">
                            <div className="input-group-addon px-2 pt-1"> 
                            <i class="text-primary"></i> </div> <input type="text" class="form-control border-0" value={this.state.etatDeVaccination}  required disabled/>
                        </div>
                        </div>
                        <div className="col-md-6">
                         <label for="name" className="h6">Date de la première dose</label>
                        <div className="input-group border rounded">
                            <div className="input-group-addon px-2 pt-1"> 
                            <i class="text-primary"></i> </div> <input type="text" class="form-control border-0" value={this.state.dateDePremereDose}  required disabled/>
                        </div>
                        </div>
                        <div className="col-md-6">
                         <label for="name" className="h6">Centre de vaccination</label>
                        <div className="input-group border rounded">
                            <div className="input-group-addon px-2 pt-1"> 
                            <i class="text-primary"></i> </div> <input type="text" class="form-control border-0" value="CHU"  required disabled/>
                        </div>
                        </div>
                    </div> 
                                                       
              </form>
              <button  type="button" className="btn" onClick={this.pdfGenerate}>Imprimer ma fiche de rendez-vous</button> 

            </div>
            </div>
        </div>
         
    </div>

    <div className=" rounded" >
        <div className="row px-5">      
        <div className="outer">
              <div className="inner3">
                <form className="rounded msg-form" id="content2">
                <h3 className="">Rendez vous pour la deuxième dose</h3>
                    <div className="form-group row">
                    <div className="col-md-6">
                         <label for="name" class="h6">Nom</label>
                        <div className="input-group border rounded">
                            <div className="input-group-addon px-2 pt-1">
                                <p className=" text-primary"></p>
                            </div> <input type="text" value={this.state.nom} className="form-control border-0"required disabled/>
                        </div>
                        </div>
                        <div className="col-md-6">
                        <label for="name" class="h6">Prenom</label>
                        <div className="input-group border rounded">
                            <div className="input-group-addon px-2 pt-1">
                                <p className=" text-primary"></p>
                            </div> <input type="text" value={this.state.prenom} className="form-control border-0"required disabled/>
                        </div> </div>
                    </div>
                    <div className="form-group row">
                    <div className="col-md-6">
                         <label for="name" className="h6">CIN</label>
                        <div className="input-group border rounded">
                            <div className="input-group-addon px-2 pt-1"> 
                            <i class="text-primary"></i> </div> <input type="text" class="form-control border-0" value={this.state.cin}  required disabled/>
                        </div>
                        </div>
                        <div className="col-md-6">
                         <label for="name" className="h6">Etat de vaccination</label>
                        <div className="input-group border rounded">
                            <div className="input-group-addon px-2 pt-1"> 
                            <i class="text-primary"></i> </div> <input type="text" class="form-control border-0" value={this.state.etatDeVaccination}  required disabled/>
                        </div>
                        </div>
                       
                        <div className="col-md-6">
                         <label for="name" className="h6">Date de la 2ème dose</label>
                        <div className="input-group border rounded">
                            <div className="input-group-addon px-2 pt-1"> 
                            <i class="text-primary"></i> </div> <input type="text" class="form-control border-0" value={this.state.dateDeuxiemeeDose}  required disabled/>
                        </div>
                        </div>
                        <div className="col-md-6">
                         <label for="name" className="h6">Centre de vaccination</label>
                        <div className="input-group border rounded">
                            <div className="input-group-addon px-2 pt-1"> 
                            <i class="text-primary"></i> </div> <input type="text" class="form-control border-0" value="CHU"  required disabled/>
                        </div>
                        </div>
                    </div>    
                                               
              </form>
              <button  type="button" className="btn" onClick={this.pdfGenerate2}>Imprimer ma fiche de rendez-vous</button>  

            </div>
            </div>
        </div>
        
    </div>


 
    </div>
    );
  }
}

export default MesRendezVous;