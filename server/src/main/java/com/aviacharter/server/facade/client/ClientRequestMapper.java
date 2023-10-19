package com.aviacharter.server.facade.client;

import com.aviacharter.server.dto.client.ClientRequestDto;
import com.aviacharter.server.entity.client.Client;
import com.aviacharter.server.facade.GeneralFacade;
import com.aviacharter.server.utils.DateParser;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
public class ClientRequestMapper extends GeneralFacade<Client, ClientRequestDto> {
    public ClientRequestMapper() {
        super(Client.class, ClientRequestDto.class);
    }

    @Override
    protected void decorateEntity(Client entity, ClientRequestDto dto) {
        super.decorateEntity(entity, dto);

        DateParser dateParser = new DateParser();
        LocalDate localDate = dateParser.parseStringToLocalDate(dto.getBirthday());
        entity.setBirthday(localDate);
    }
}
