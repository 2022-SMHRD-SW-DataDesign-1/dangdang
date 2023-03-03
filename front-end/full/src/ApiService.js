import axios from 'axios';

const BASE_URL = "http://localhost:8083";

class ApiService {

  joinUser(user){
    return axios.post(BASE_URL, user);
  }
  LoginUser(user){
    return axios.post(BASE_URL+"/login", user)
  }
  LoadMember(){
    return axios.get(BASE_URL+"/loadMember")
  }


  
  // register(product, categoryName) {
  //   return axios.post(BASE_URL+"/Product", {...product, categoryName})
  // }

}

export default new ApiService();