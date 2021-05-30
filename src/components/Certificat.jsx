import React, { Component } from 'react';
import AuthenticationService from '../components/services/AuthentificationService';
import jsPDF from 'jspdf'
class Certificat extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: [],
            message: null  
    };
  }
  pdfGenerate=()=>{
    var doc=new jsPDF('p', 'pt', 'a3' );
    doc.html(document.querySelector("#content"), {
        callback:function(pdf){
            pdf.save("certificat.pdf");
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
          dateDeuxiemeeDose:response.data.dateDeuxiemeeDose,
          sexe:response.data.sexe
        })
      },    
    );
  }
  render() {
    let userInfo = "";
    const user = this.state.user;
    return (
      <div>
          <br></br>
          <div className="card col-md-8 offset-md-2" >
              <div id="content">
              <h3 className="text-center"> Certificat de Vaccination contre le SARS-CoV-2</h3>
              <div className="card-body outer">
                  <div className="">
                  <div className="row">
                  <div className=" col fly">
                    <label><b>Nom :</b> </label>
                    <div>{this.state.nom} </div>
                    </div>
                  
                  <div className=" col fly">
                  <label><b>Prenom:</b> </label>
                  <div>{this.state.prenom} </div>
                  </div>
                  </div>
                  
                <br></br>
                  <div className="row">
                  <div className=" col fly">
                  <label><b>CIN:</b> </label>
                  <div>{this.state.cin} </div>
                  </div>
                  
                  <div className=" col fly">
                  <label><b>Sexe: </b></label>
                  <div>{this.state.sexe} </div>
                  </div>
                  </div>
                  <br></br>
                  <div className="row">
                  <div className=" col fly">
                  <label><b>Nationalité: </b></label>
                  <div>Marocaine</div>
                  </div>
                  </div>
                  <br></br>
                  <div className= "row">
                  <div className=" col fly">
                    <table className="table ">
                        <thead>
                            <tr>
                                <th>Date 1ére dose</th>
                                <th>Date 2éme dose</th>
                                <th>Centre de vaccination</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            
                                    <tr>
                                        <td>{this.state.dateDePremereDose}</td>
                                        <td>{this.state.dateDeuxiemeeDose}</td>
                                        <td>CHU</td>
                                  
                                        
                                        
                                       
                                    </tr>
                                
                            }
                        </tbody>
                    </table>
                </div>
                  
                  </div>
                  </div>
                  </div>
                   
              </div>
              <button  type="button btn-primary" className="btn" onClick={this.pdfGenerate}>Imprimer mon Certificat</button>
          </div>
      </div>
    );
  }
}
export default Certificat;