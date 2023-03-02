package com.full.full.model;

import java.sql.Timestamp;

import lombok.Data;

@Data
public class OrdersDTO {
    int order_num;
    int user_num;
    int total_price;
    Timestamp created_at;
}
