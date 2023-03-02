package com.full.full.model;

import java.sql.Timestamp;

import lombok.Data;

@Data
public class ProductDTO {
    int product_num;
    String name;
    int price;
    String desciption;
    String image;
    int category_num;
    Timestamp created_at;    
}
