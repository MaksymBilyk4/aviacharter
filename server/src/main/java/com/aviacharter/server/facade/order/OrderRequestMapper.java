package com.aviacharter.server.facade.order;

import com.aviacharter.server.dto.order.OrderRequestDto;
import com.aviacharter.server.entity.order.Order;
import com.aviacharter.server.facade.GeneralFacade;
import org.springframework.stereotype.Service;

@Service
public class OrderRequestMapper extends GeneralFacade<Order, OrderRequestDto> {
    public OrderRequestMapper() {
        super(Order.class, OrderRequestDto.class);
    }
}
