package com.aviacharter.server.dto.operator;

import com.aviacharter.server.entity.order.Order;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class OperatorResponseDto {

    private String operatorName;
    private Long orderId;

    @Override
    public String toString() {
        return "OperatorResponseDto{" +
                "operatorName='" + operatorName + '\'' +
                ", orderId=" + orderId +
                '}';
    }
}
