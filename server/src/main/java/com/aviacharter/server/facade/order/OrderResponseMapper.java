package com.aviacharter.server.facade.order;

import com.aviacharter.server.dto.client.ClientNoOrderDataResponseDto;
import com.aviacharter.server.dto.operator.OperatorShortResponseDto;
import com.aviacharter.server.dto.order.OrderResponseDto;
import com.aviacharter.server.dto.orderType.OrderTypeShortResponseDto;
import com.aviacharter.server.entity.order.Order;
import com.aviacharter.server.entity.orderType.OrderType;
import com.aviacharter.server.facade.GeneralFacade;
import com.aviacharter.server.utils.DateParser;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class OrderResponseMapper extends GeneralFacade<Order, OrderResponseDto> {
    public OrderResponseMapper() {
        super(Order.class, OrderResponseDto.class);
    }

    @Override
    protected void decorateDto(OrderResponseDto dto, Order entity) {
        super.decorateDto(dto, entity);

        DateParser dateParser = new DateParser();

        if (entity.getClient() != null) {
            ClientNoOrderDataResponseDto client = new ClientNoOrderDataResponseDto(
                    entity.getClient().getId(),
                    entity.getClient().getClientName(),
                    entity.getClient().getTelephoneNumber(),
                    entity.getClient().getEmail(),
                    dateParser.parseLocalDateToString(entity.getClient().getBirthday()),
                    entity.getClient().getAdditionalInfo(),
                    entity.getClient().getPassport().getId()
            );

            dto.setClient(client);
        }

        if (entity.getTourOperator() != null) {
            OperatorShortResponseDto operator = new OperatorShortResponseDto(
                    entity.getTourOperator().getId(),
                    entity.getTourOperator().getOperatorName()
            );
            dto.setOperator(operator);
        }

        if (entity.getOrderTypes() != null && !entity.getOrderTypes().isEmpty()) {
            Set<OrderTypeShortResponseDto> dtos = new HashSet<>();

            for (OrderType ot : entity.getOrderTypes()) {
                OrderTypeShortResponseDto orderType = new OrderTypeShortResponseDto(
                        ot.getId(),
                        ot.getOrderType()
                );
                dtos.add(orderType);
            }

            dto.setOrderTypes(dtos);
        } else dto.setOrderTypes(new HashSet<>());
    }
}
