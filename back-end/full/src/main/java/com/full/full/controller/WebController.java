package com.full.full.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.RestController;

import com.full.full.mapper.WebMapper;
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
    // @PostMapping("/")
    // void singup(@RequestBody UserDTO user) {
    //     webMapper.joinUser(user);
    //     // webmapper 인터페이스를 구현한 객체의joinuser()메소드를 실행하여 회원가입 정보를 db에 저장
    //     System.out.println("유저 DB 저장 성공");
        
    // }

    
    // // 로그인
    // @PostMapping("/login")
    // public String login(@PathVariable("user_id") String user_id, @PathVariable("user_pwd") String user_pwd, HttpServletRequest request) {

    //     System.out.println(user_pwd);
    //     System.out.println(user_id);
        
    //     UserDTO dto = new UserDTO();
        
    //     String info = webMapper.LoginUser(dto);
    //     System.out.println("usermapper");
    //     if (info != null) {
    //         System.out.println("로그인 객체 받아옴 ");
    //         HttpSession session = request.getSession();
    //         session.setAttribute("info", info);
    //         return "/";
    //     } else {
    //         HttpSession session = request.getSession();
    //         System.out.println("로그인 객체 못받아옴");
    //         session.setAttribute("errMsg", "입력하신 정보가 올바르지 않습니다.");
    //         return "/login";
    //     }
    // }
    
    // // 상품등록
    // @PostMapping("/cart")
    // void upload(@RequestBody ProductDTO product) {
    //     webMapper.register(product);
    //     System.out.println("상품등록 저장 성공");
    // }
    
    // 마이페이지 고객정보
    @GetMapping("/loadMember")
    private List<UserDTO> LoadMember(){
        System.out.println("유저리스트 불러오기");
        return webMapper.LoadMember();
    }
    
}