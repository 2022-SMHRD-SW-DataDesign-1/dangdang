import axios from 'axios';

const BASE_URL = "http://localhost:8083";

class ApiService {

  // 회원가입
  joinUser(user) {
    return axios.post(BASE_URL+"/Join", user);
  }
  // 아이디 중복체크
  checkUserId(id) {
    return axios.get(`${BASE_URL}/${id}`)
  }
  // 로그인
  loginUser(user) {
    return axios.post(BASE_URL + '/Login', user)
  }

  // 회원정보 불러오기
  LoadMember() {
    return axios.get(BASE_URL + "/loadMember")
  }
  // 상품페이지 - 강아지
  LoadProduct() {
    return axios.get(BASE_URL + "/ProductDog")
  }
  LoadProductCat(){
    return axios.get(BASE_URL + "/ProductCat")

  }
  // 상품페이지 - 고양이

  // 상품 카테고리별 불러오기 





  // 상품 업로드
  Uploadproduct(product) {
    return axios.post(BASE_URL + "/ProductUpdate", product)
  }

  // 상품 상세 조회
  getProduct(product_num) {
    return axios.get(BASE_URL + "/ProductDetail/" + product_num);
  }

}

export default new ApiService();