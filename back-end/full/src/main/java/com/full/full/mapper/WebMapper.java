package com.full.full.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.full.full.model.ProductDTO;
import com.full.full.model.UserDTO;
// mapper interface 지정
@Mapper
public interface WebMapper {
    // 회원가입
    public void joinUser(UserDTO user);
    // 로그인
    public String LoginUser(UserDTO dto);
    // 상품등록
    public void register(ProductDTO product);
    // 회원 조회
    public List<UserDTO> LoadMember();

}

