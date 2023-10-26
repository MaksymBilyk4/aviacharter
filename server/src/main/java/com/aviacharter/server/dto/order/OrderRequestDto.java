package com.aviacharter.server.dto.order;

import com.aviacharter.server.dto.operator.OperatorShortResponseDto;
import com.aviacharter.server.dto.orderType.OrderTypeShortResponseDto;
import com.aviacharter.server.entity.client.Client;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class OrderRequestDto {

    private int bruttoPrice;
    private int nettoPrice;
    private int profit;
    private String orderDate;
    private String departureDate;
    private String orderNumber;
    private String comment;

    private Long clientId;
    private Set<OrderTypeShortResponseDto> orderType;
    private Long operatorId;

    @Override
    public String toString() {
        return "OrderRequestDto{" +
                "bruttoPrice=" + bruttoPrice +
                ", nettoPrice=" + nettoPrice +
                ", profit=" + profit +
                ", orderDate='" + orderDate + '\'' +
                ", departureDate='" + departureDate + '\'' +
                ", orderNumber='" + orderNumber + '\'' +
                ", comment='" + comment + '\'' +
                ", client=" + clientId +
                ", orderType=" + orderType +
                ", operator=" + operatorId +
                '}';
    }
}
