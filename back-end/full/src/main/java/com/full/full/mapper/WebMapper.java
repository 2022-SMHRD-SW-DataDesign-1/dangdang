package com.full.full.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.full.full.model.ProductDTO;
import com.full.full.model.UserDTO;

// mapper interface 지정
@Mapper
public interface WebMapper {
    // 회원가입
    public void joinUser(UserDTO user);

    // 아이디 중복체크
    // public int checkUserId(String id);

    // 회원 조회
    public List<UserDTO> LoadMember();

    // 상품 상세 조회
    public ProductDTO getProduct(@Param("product_num") int product_num);
    
    // 상품 리스트
    public List<ProductDTO> LoadProduct();

    // 로그인
    public String LoginUser(UserDTO dto);

    // 상품 업로드
    public void Uploadproduct(ProductDTO product);

}