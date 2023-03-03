package com.full.full.model;

import java.sql.Timestamp;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Setter
@Getter
public class ProductDTO {
    private int product_num;
    private String name;
    private int price;
    private String description;
    private String image;
    private Integer category_num;
    private int quantity;
    private Timestamp created_at;
}


