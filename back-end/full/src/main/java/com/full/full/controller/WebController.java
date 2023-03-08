package com.full.full.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.full.full.mapper.WebMapper;
import com.full.full.model.ProductDTO;
import com.full.full.model.UserDTO;

@CrossOrigin(origins = "*")
// 서로 다른 도메인에서 오는 요청도 처리할 수 있도록 설정
@RestController
// 해당 클래스가 rest api 요청을 처리하는 컨트롤러임을 나타냄

public class WebController {

    @Autowired
    // // 의존성 주입을 위해 사용됨
    WebMapper webMapper;

    // 회원가입
    @PostMapping("/")
    void singup(@RequestBody UserDTO user) {
        webMapper.joinUser(user);
        System.out.println("유저 DB 저장 성공");
    }

    // 아이디 중복체크 조회
    @GetMapping("/{id}")
    public UserDTO checkUserId(@PathVariable String id) {
        System.out.println("아이디 중복 확인");
        return webMapper.checkUserId(id);
    }

    // 로그인
    @PostMapping("/login")
    public String loginUser(@RequestBody UserDTO user, HttpServletRequest request) {
        UserDTO loginUser = webMapper.loginUser(user);
        if (loginUser != null) {
            HttpSession session = request.getSession();
            session.setAttribute("loginUser", loginUser);
            System.out.println("login success");
            return "success"; // 로그인 성공시 success 반환

        } else {
            HttpSession session = request.getSession();
            System.out.println("login fail");
            session.setAttribute("errMsg", "입력하신 정보가 올바르지 않습니다.");
            return "failure";
        }
    }

    // 상품 업로드
    @PostMapping("/Product")
    void upload(@RequestBody ProductDTO product) {

        

        webMapper.Uploadproduct(product);
        System.out.println("product update success");

    }

    // 마이페이지 고객정보
    @GetMapping("/loadMember")
    public List<UserDTO> LoadMember() {
        System.out.println("user list load");
        return webMapper.LoadMember();
    }

    // 상품 페이지 리스트 불러오기
    @GetMapping("/ProductList2")
    public List<ProductDTO> LoadProduct() {
        System.out.println("product list load");
        return webMapper.LoadProduct();

    }

    // 상품 상세 조회(1개)
    @GetMapping("/ProductDetail/{product_num}")
    public ProductDTO getProduct(@PathVariable int product_num) {
        System.out.println("product detail");
        return webMapper.getProduct(product_num);

    }

}