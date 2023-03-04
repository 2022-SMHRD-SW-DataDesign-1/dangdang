import axios from 'axios';

const BASE_URL = "http://localhost:8083";

class ApiService {

  // 회원가입
  joinUser(user) {
    return axios.post(BASE_URL, user);
  }
  // 아이디 중복체크
  checkUserId(id) {
    return axios.get(`${BASE_URL}/${id}`)
  }
  // 로그인
  loginUser(user) {
    return axios.post(BASE_URL + '/login', user)
  }

  // 회원정보 불러오기
  LoadMember() {
    return axios.get(BASE_URL + "/loadMember")
  }
  // 상품 정보 불러오기
  LoadProduct() {
    return axios.get(BASE_URL + "/loadProduct")
  }
  // 상품 업로드
  Uploadproduct(product) {
    return axios.post(BASE_URL + "/Product", product)
  }

  // 상품 상세 조회
  getProduct(product_num) {
    return axios.get(BASE_URL + "/ProductDetail/" + product_num);
  }

}

export default new ApiService();