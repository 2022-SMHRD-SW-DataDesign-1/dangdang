package com.full.full.model;

import java.sql.Timestamp;

import lombok.Data;

@Data
public class CartDTO {
 int cart_num;
 int user_num;
 Timestamp created_at;    
}
