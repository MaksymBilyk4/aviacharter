package com.aviacharter.server.facade.orderType;

import com.aviacharter.server.entity.orderType.OrderType;
import com.aviacharter.server.dto.orderType.OrderTypeRequestDto;
import com.aviacharter.server.facade.GeneralFacade;
import org.springframework.stereotype.Service;

@Service
public class OrderTypeRequestMapper extends GeneralFacade<OrderType, OrderTypeRequestDto> {
    public OrderTypeRequestMapper() {
        super(OrderType.class, OrderTypeRequestDto.class);
    }
}
