package com.aviacharter.server.facade.order;

import com.aviacharter.server.dto.order.OrderRequestDto;
import com.aviacharter.server.dto.orderType.OrderTypeShortResponseDto;
import com.aviacharter.server.entity.client.Client;
import com.aviacharter.server.entity.operator.Operator;
import com.aviacharter.server.entity.order.Order;
import com.aviacharter.server.entity.orderType.OrderType;
import com.aviacharter.server.facade.GeneralFacade;
import com.aviacharter.server.service.ClientService;
import com.aviacharter.server.service.OperatorService;
import com.aviacharter.server.service.OrderTypeService;
import com.aviacharter.server.utils.DateParser;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class OrderRequestMapper extends GeneralFacade<Order, OrderRequestDto> {

    private final OperatorService operatorService;
    private final ClientService clientService;
    private final OrderTypeService orderTypeService;


    public OrderRequestMapper(
            OperatorService operatorService,
            ClientService clientService,
            OrderTypeService orderTypeService
    ) {
        super(Order.class, OrderRequestDto.class);

        this.operatorService = operatorService;
        this.clientService = clientService;
        this.orderTypeService = orderTypeService;
    }

    @Override
    protected void decorateEntity(Order entity, OrderRequestDto dto) {
        super.decorateEntity(entity, dto);

        DateParser dateParser = new DateParser();
        entity.setDepartureDate(dateParser.parseStringToLocalDate(dto.getDepartureDate()));
        entity.setOrderDate(dateParser.parseStringToLocalDate(dto.getOrderDate()));

        Operator operator = operatorService.findById(dto.getOperatorId());
        Client client = clientService.findById(dto.getClientId());

        if (operator != null) {
            entity.setTourOperator(operator);
        }
        if (dto.getOrderType() != null && !dto.getOrderType().isEmpty()) {

            Set<OrderType> orderTypeSet = new HashSet<>();
            for (OrderTypeShortResponseDto o : dto.getOrderType()) {
                orderTypeSet.add(orderTypeService.findById(o.getId()));

            }
            entity.setOrderTypes(orderTypeSet);
        } else entity.setOrderTypes(new HashSet<>());

        if (client != null) {
            entity.setClient(client);
            client.getOrders().add(entity);
        }
    }
}
