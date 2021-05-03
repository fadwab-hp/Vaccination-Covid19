import userEvent from "@testing-library/user-event";

import axios from "axios";



class declarationservice {
 
  declaration = async(nom, prenom, cin, effets,autres) => {
    return axios.post("http://localhost:8081/api/auth/declarations", {
      nom,
      prenom,
      cin,
     effets,
     autres
    });
  }


}

export default new declarationservice();