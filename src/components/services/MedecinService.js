import axios from 'axios';

const MEDECIN_API_BASE_URL = "http://localhost:8081/api/auth/Medecins"

class MedecinService {

    getMedecins(){
        return axios.get(MEDECIN_API_BASE_URL);
    }

    createMedecin(medecin){
        return axios.post(MEDECIN_API_BASE_URL, medecin);
    }

    getMedecinById(medecinId){
        return axios.get(MEDECIN_API_BASE_URL + '/' +medecinId);
    }

    updateMedecin(medecin, medecinId){
        return axios.put(MEDECIN_API_BASE_URL + '/' + medecinId, medecin);
    }

    deleteMedecin(medecinId){
        return axios.delete(MEDECIN_API_BASE_URL + '/' + medecinId);
    }
}

export default new MedecinService();