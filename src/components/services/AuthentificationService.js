import axios from "axios";

class AuthentificationService {
  signin = (cin, password) => {
      return axios.post("http://localhost:8081/api/auth/signin", {cin, password})
        .then(response => {
          if (response.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(response.data));
          }
          return response.data;
        })
        .catch(err => {
          console.log(err);
          throw err;
        });
  }

  signOut() {
    localStorage.removeItem("user");
  }

  register = async(nom, prenom, cin, email, password,age,ville,adresse,sexe) => {
    return axios.post("http://localhost:8081/api/auth/signup", {
      nom,
      prenom,
      cin,
      email,
      password,
      ville,
      adresse,
      age,
      sexe,
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
  getPatient(cin){
    
    return axios.get("http://localhost:8081/api/auth/details/"+cin);
}
getPatientDetails(cin){
    
  return axios.get("http://localhost:8081/api/auth/detailsPatient/"+cin);
}

}

export default new AuthentificationService();