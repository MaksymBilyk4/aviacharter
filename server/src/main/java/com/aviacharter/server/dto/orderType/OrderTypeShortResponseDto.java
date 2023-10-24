package com.aviacharter.server.dto.orderType;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class OrderTypeShortResponseDto {

    private Long id;
    private String orderType;

    @Override
    public String toString() {
        return "OrderTypeShortResponseDto{" +
                "id=" + id +
                ", orderType='" + orderType + '\'' +
                '}';
    }
}
