import axios from 'axios';

const BASE_URL = "http://localhost:8083";

class ApiService {

  joinUser(user){
    return axios.post(BASE_URL, user);
  }
  LoginUser(user){
    return axios.post(BASE_URL+"/login", user)
  }
  register(product){
    return axios.post(BASE_URL+"/cart", product)
  }
  LoadMember(){
    return axios.get(BASE_URL+"/loadMember")
  }

}

export default new ApiService();