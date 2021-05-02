import axios from 'axios';


class RendezVousService{
   getRendezvous(){
       return axios.get('http://localhost:8081/api/auth/AllRendezVous');
   }

   createRDV(rendez_vous) {
    return axios.post('http://localhost:8081/api/auth/addRDV', rendez_vous);
  }
}
export default new RendezVousService()