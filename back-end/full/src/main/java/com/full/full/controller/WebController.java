package com.full.full.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
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
        // webmapper 인터페이스를 구현한 객체의joinuser()메소드를 실행하여 회원가입 정보를 db에 저장
        System.out.println("유저 DB 저장 성공");
    }

    // 마이페이지 고객정보
    @GetMapping("/loadMember")
    private List<UserDTO> LoadMember() {
        System.out.println("유저리스트 불러오기");
        return webMapper.LoadMember();
    }

    // 상품등록
    @PostMapping("/Product")
    public ResponseEntity<String> addProduct(@RequestBody ProductDTO product) {
        webMapper.registerProduct(product);
        System.out.println("상품 DB 저장 성공");
        return new ResponseEntity<>("상품등록 성공", HttpStatus.CREATED);
    }

    // 로그인
    @PostMapping("/login")
    public String login(HttpServletRequest request) {
        String id = request.getParameter("id");
        String password = request.getParameter("password");

        UserDTO dto = new UserDTO();

        System.out.println(id);
        System.out.println(password);
        String info = webMapper.LoginUser(dto);
        System.out.println("usermapper");
        if (info != null) {
            System.out.println("로그인 객체 받아옴 ");
            HttpSession session = request.getSession();
            session.setAttribute("info", info);
            return "/";
        } else {
            HttpSession session = request.getSession();
            System.out.println("로그인 객체 못받아옴");
            session.setAttribute("errMsg", "입력하신 정보가 올바르지 않습니다.");
            return "/login";
        }
    }

}