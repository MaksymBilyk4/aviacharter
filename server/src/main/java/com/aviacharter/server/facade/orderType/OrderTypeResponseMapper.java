package com.aviacharter.server.facade.orderType;

import com.aviacharter.server.entity.order.OrderType;
import com.aviacharter.server.entity.orderType.OrderTypeResponseDto;
import com.aviacharter.server.facade.GeneralFacade;
import org.springframework.stereotype.Service;

@Service
public class OrderTypeResponseMapper extends GeneralFacade<OrderType, OrderTypeResponseDto> {
    public OrderTypeResponseMapper() {
        super(OrderType.class, OrderTypeResponseDto.class);
    }

    @Override
    protected void decorateDto(OrderTypeResponseDto dto, OrderType entity) {
        super.decorateDto(dto, entity);

        if (entity.getOrder() != null) {
            dto.setOrderId(entity.getOrder().getId());
        }

    }
}
