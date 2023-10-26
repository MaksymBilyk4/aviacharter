package com.aviacharter.server.dto.order;

import com.aviacharter.server.dto.client.ClientNoOrderDataResponseDto;
import com.aviacharter.server.dto.operator.OperatorShortResponseDto;
import com.aviacharter.server.dto.orderType.OrderTypeShortResponseDto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class OrderResponseDto {

    private Long id;

    private int bruttoPrice;
    private int nettoPrice;
    private int profit;
    private String orderDate;
    private String departureDate;
    private String orderNumber;
    private String comment;

    // TODO: map this in mappers
    private ClientNoOrderDataResponseDto client;
    private Set<OrderTypeShortResponseDto> orderTypes;
    private OperatorShortResponseDto operator;


    @Override
    public String toString() {
        return "OrderResponseDto{" +
                "id=" + id +
                ", bruttoPrice=" + bruttoPrice +
                ", nettoPrice=" + nettoPrice +
                ", profit=" + profit +
                ", orderDate='" + orderDate + '\'' +
                ", departureDate='" + departureDate + '\'' +
                ", orderNumber='" + orderNumber + '\'' +
                ", comment='" + comment + '\'' +
                ", client=" + client +
                ", orderTypes=" + orderTypes +
                ", operator=" + operator +
                '}';
    }
}
