import React, { Component } from 'react';

class InfoCampagne extends Component {
    render() {
        return (
            <div>
                
                <h1>Campagne de vaccination contre Covid19</h1>
                <div className="container1">
                <div class="container-fluid1">
                <h2>Nombre de personnes vaccinées:</h2>
                    <h3>
                        <script> document.write(new Date().toLocaleDateString()); </script>
                    </h3>
                <div class="row">
                <div class="col-sm-6">
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title"> Dose 1: </h5>
                        <p class="card-text">5 994 379</p>
                    </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title"> Dose 2: </h5>
                        <p class="card-text">4 441 667</p>
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

export default InfoCampagne;