package com.full.full.model;

import java.sql.Timestamp;

import lombok.Data;

@Data
public class ProductDTO {
    private int product_num;
    private String name;
    private int price;
    private String description;
    private String image;
    private String category;
    private Timestamp created_at;
    private int quantity;
}


