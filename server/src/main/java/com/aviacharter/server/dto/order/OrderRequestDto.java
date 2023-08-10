package com.aviacharter.server.dto.order;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class OrderRequestDto {

    private String orderType;
    private String comment;

    @Override
    public String toString() {
        return "OrderRequestDto{" +
                "orderType='" + orderType + '\'' +
                ", comment='" + comment + '\'' +
                '}';
    }
}