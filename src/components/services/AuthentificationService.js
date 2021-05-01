import axios from "axios";

/**
 * @Copyright by https://loizenai.com
 *        youtube loizenai
 */

class AuthentificationService {
  signin = (cin, password) => {
      return axios.post("http://localhost:8080/api/auth/signin", {cin, password})
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
    return axios.post("http://localhost:8080/api/auth/signup", {
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
}

export default new AuthentificationService();