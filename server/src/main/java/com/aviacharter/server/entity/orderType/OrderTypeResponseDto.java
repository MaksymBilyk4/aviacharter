package com.aviacharter.server.entity.orderType;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class OrderTypeResponseDto {

    private String orderType;
    private Long orderId;

    @Override
    public String toString() {
        return "OrderTypeResponseDto{" +
                "orderType='" + orderType + '\'' +
                ", orderId=" + orderId +
                '}';
    }
}
