package com.aviacharter.server.dto.order;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class OrderResponseDto {

    private Long id;
    private String orderType;
    private String comment;

    @Override
    public String toString() {
        return "OrderResponseDto{" +
                "id=" + id +
                ", orderType='" + orderType + '\'' +
                ", comment='" + comment + '\'' +
                '}';
    }
}
