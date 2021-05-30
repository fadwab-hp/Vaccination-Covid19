import axios from 'axios';



class UserService {

    getUsers(){
        return axios.get("http://localhost:8081/api/auth/Users");
    }

    
    updateUser(users,id){
        return axios.put("http://localhost:8081/api/auth/Users/" + id,users);
    }
    

    getUserById(id){
        return axios.get("http://localhost:8081/api/auth/Users/"+id);
    }
}

export default new UserService();