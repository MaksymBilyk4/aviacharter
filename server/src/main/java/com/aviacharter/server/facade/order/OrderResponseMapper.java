package com.aviacharter.server.facade.order;

import com.aviacharter.server.dto.order.OrderResponseDto;
import com.aviacharter.server.entity.order.Order;
import com.aviacharter.server.facade.GeneralFacade;
import org.springframework.stereotype.Service;

@Service
public class OrderResponseMapper extends GeneralFacade<Order, OrderResponseDto> {
    public OrderResponseMapper() {
        super(Order.class, OrderResponseDto.class);
    }
}
