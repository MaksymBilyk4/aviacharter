package com.aviacharter.server.facade.operator;

import com.aviacharter.server.dto.client.ClientNoOrderDataResponseDto;
import com.aviacharter.server.dto.operator.OperatorResponseDto;
import com.aviacharter.server.dto.order.OrderNoRelationResponseDto;
import com.aviacharter.server.entity.operator.Operator;
import com.aviacharter.server.entity.order.Order;
import com.aviacharter.server.facade.GeneralFacade;
import com.aviacharter.server.utils.DateParser;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class OperatorResponseDtoMapper extends GeneralFacade<Operator, OperatorResponseDto> {
    public OperatorResponseDtoMapper() {
        super(Operator.class, OperatorResponseDto.class);
    }

    @Override
    protected void decorateDto(OperatorResponseDto dto, Operator entity) {
        super.decorateDto(dto, entity);

        if (entity.getOrders() != null && !entity.getOrders().isEmpty()) {

            DateParser dateParser = new DateParser();
            Set<OrderNoRelationResponseDto> orderNoRelationResponseDtoList = new HashSet<>();
            for (Order o: entity.getOrders()) {
                String orderDate = dateParser.parseLocalDateToString(o.getOrderDate());
                String departureDate = dateParser.parseLocalDateToString(o.getDepartureDate());
                String clientBd = dateParser.parseLocalDateToString(o.getClient().getBirthday());
                ClientNoOrderDataResponseDto clientResponseDto = new ClientNoOrderDataResponseDto(
                        o.getClient().getId(),
                        o.getClient().getClientName(),
                        o.getClient().getTelephoneNumber(),
                        o.getClient().getEmail(),
                        clientBd,
                        o.getClient().getAdditionalInfo(),
                        o.getClient().getPassport().getId()
                );

                OrderNoRelationResponseDto responseDto = new OrderNoRelationResponseDto(
                        o.getId(),
                        clientResponseDto,
                        o.getBruttoPrice(),
                        o.getNettoPrice(),
                        o.getProfit(),
                        orderDate,
                        departureDate,
                        o.getOrderNumber(),
                        o.getComment()
                );

                orderNoRelationResponseDtoList.add(responseDto);
            }

            dto.setOrders(orderNoRelationResponseDtoList);
        } else dto.setOrders(new HashSet<>());
    }
}
