package com.aviacharter.server.facade.client;

import com.aviacharter.server.dto.client.ClientNoOrderDataResponseDto;
import com.aviacharter.server.dto.client.ClientResponseDto;
import com.aviacharter.server.dto.order.OrderNoRelationResponseDto;
import com.aviacharter.server.entity.client.Client;
import com.aviacharter.server.entity.order.Order;
import com.aviacharter.server.facade.GeneralFacade;
import com.aviacharter.server.utils.DateParser;
import org.springframework.stereotype.Service;

@Service
public class ClientResponseMapper extends GeneralFacade<Client, ClientResponseDto> {
    public ClientResponseMapper() {
        super(Client.class, ClientResponseDto.class);
    }

    @Override
    protected void decorateDto(ClientResponseDto dto, Client entity) {
        super.decorateDto(dto, entity);
        DateParser dateParser = new DateParser();

        dto.setBirthday(dateParser.parseLocalDateToString(entity.getBirthday()));
        if (entity.getPassport() != null) dto.setPassportId(entity.getPassport().getId());

        if (entity.getOrders() != null && !entity.getOrders().isEmpty()) {
            ClientNoOrderDataResponseDto clientDto = new ClientNoOrderDataResponseDto(
                    entity.getId(),
                    entity.getClientName(),
                    entity.getTelephoneNumber(),
                    entity.getEmail(),
                    dateParser.parseLocalDateToString(entity.getBirthday()),
                    entity.getAdditionalInfo(),
                    entity.getPassport().getId()
            );

            for (Order o : entity.getOrders()) {
                OrderNoRelationResponseDto orderDto = new OrderNoRelationResponseDto(
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

                dto.getOrderData().add(orderDto);
            }
        }
    }
}
