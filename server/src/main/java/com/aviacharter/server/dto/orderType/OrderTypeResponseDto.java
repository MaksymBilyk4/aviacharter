package com.aviacharter.server.dto.orderType;

import com.aviacharter.server.dto.order.OrderNoRelationResponseDto;
import com.aviacharter.server.entity.order.Order;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class OrderTypeResponseDto {

    private Long id;
    private String orderType;
    private Set<OrderNoRelationResponseDto> orders;

    @Override
    public String toString() {
        return "OrderTypeResponseDto{" +
                "orderType='" + orderType + '\'' +
                ", orderId=" + orders +
                '}';
    }
}
