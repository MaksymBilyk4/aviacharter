package com.aviacharter.server.dto.order;

import com.aviacharter.server.dto.client.ClientNoOrderDataResponseDto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class OrderNoRelationResponseDto {

    private Long id;
    private ClientNoOrderDataResponseDto client;
    private int bruttoPrice;
    private int nettoPrice;
    private int profit;
    private String orderDate;
    private String departureDate;
    private String orderNumber;
    private String comment;

    @Override
    public String toString() {
        return "OrderNoRelationResponseDto{" +
                "client=" + client +
                ", bruttoPrice=" + bruttoPrice +
                ", nettoPrice=" + nettoPrice +
                ", profit=" + profit +
                ", orderDate='" + orderDate + '\'' +
                ", departureDate='" + departureDate + '\'' +
                ", orderNumber='" + orderNumber + '\'' +
                ", comment='" + comment + '\'' +
                '}';
    }
}
