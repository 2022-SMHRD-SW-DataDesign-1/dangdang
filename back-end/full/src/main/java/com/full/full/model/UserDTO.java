package com.full.full.model;

import java.sql.Timestamp;

import lombok.Data;

@Data
public class UserDTO {

    private int user_num;
    private String id;
    private String password;
    private String email;
    private String name;
    private String address;
    private String phone;
    Timestamp created_at;


}