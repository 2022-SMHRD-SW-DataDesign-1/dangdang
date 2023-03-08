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
    public UserDTO checkUserId(String id);

    // 로그인
    public UserDTO loginUser(UserDTO user);

    // 회원 조회
    public List<UserDTO> LoadMember();

    // 상품 상세 조회
    public ProductDTO getProduct(@Param("product_num") int product_num);

    // 상품 리스트 멍멍이
    public List<ProductDTO> LoadProduct();

    // 상품 리스트 고양이
    public List<ProductDTO> LoadProductCat();

    // 상품 업로드
    public void Uploadproduct(ProductDTO product);

}