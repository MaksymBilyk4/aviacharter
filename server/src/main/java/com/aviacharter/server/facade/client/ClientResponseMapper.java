package com.aviacharter.server.facade.client;

import com.aviacharter.server.dto.client.ClientResponseDto;
import com.aviacharter.server.entity.client.Client;
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
    }
}
