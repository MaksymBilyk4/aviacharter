package com.aviacharter.server.facade.orderType;

import com.aviacharter.server.dto.client.ClientNoOrderDataResponseDto;
import com.aviacharter.server.dto.order.OrderNoRelationResponseDto;
import com.aviacharter.server.entity.order.Order;
import com.aviacharter.server.entity.orderType.OrderType;
import com.aviacharter.server.dto.orderType.OrderTypeResponseDto;
import com.aviacharter.server.facade.GeneralFacade;
import com.aviacharter.server.utils.DateParser;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class OrderTypeResponseMapper extends GeneralFacade<OrderType, OrderTypeResponseDto> {
    public OrderTypeResponseMapper() {
        super(OrderType.class, OrderTypeResponseDto.class);
    }

    @Override
    protected void decorateDto(OrderTypeResponseDto dto, OrderType entity) {
        super.decorateDto(dto, entity);


        if (entity.getOrders() != null && !entity.getOrders().isEmpty()) {
            DateParser dateParser = new DateParser();
            Set<OrderNoRelationResponseDto> orderNoRelationResponseDtos = new HashSet<>();
            for (Order o : entity.getOrders()) {
                String clientBd = dateParser.parseLocalDateToString(o.getClient().getBirthday());

                ClientNoOrderDataResponseDto clientDto = new ClientNoOrderDataResponseDto(
                        o.getClient().getId(),
                        o.getClient().getClientName(),
                        o.getClient().getTelephoneNumber(),
                        o.getClient().getEmail(),
                        clientBd,
                        o.getClient().getAdditionalInfo(),
                        o.getClient().getPassport().getId()
                );

                OrderNoRelationResponseDto orderResponseDto = new OrderNoRelationResponseDto(
                        o.getId(),
                        clientDto,
                        o.getBruttoPrice(),
                        o.getNettoPrice(),
                        o.getProfit(),
                        dateParser.parseLocalDateToString(o.getOrderDate()),
                        dateParser.parseLocalDateToString(o.getDepartureDate()),
                        o.getOrderNumber(),
                        o.getComment()
                );

                orderNoRelationResponseDtos.add(orderResponseDto);
            }
            dto.setOrders(orderNoRelationResponseDtos);
        } else dto.setOrders(new HashSet<>());
    }
}
