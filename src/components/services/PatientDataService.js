import axios from 'axios'

const PATIENT_API_URL = 'http://localhost:8080/api/auth'
const MEDECIN_API_URL = `${PATIENT_API_URL}/findAllPatients`

class PatientDataService {

    retrieveAllPatients() {
        return axios.get(`${MEDECIN_API_URL}`);
    }
    deletePatient(id){
        return axios.delete(`${PATIENT_API_URL}/delete/{id}`);
    }
    createPatient(patient){
        return axios.post(`${PATIENT_API_URL}/addPatient`, patient)
    }
    getPatientById(patientId){
        return axios.get(PATIENT_API_URL + '/findAllPatients/' + patientId);
    }
    fichePatient(patient, patientId){
        return axios.put(PATIENT_API_URL + '/patients/' + patientId, patient)
    }
}
export default new PatientDataService()