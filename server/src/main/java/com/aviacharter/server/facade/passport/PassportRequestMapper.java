package com.aviacharter.server.facade.passport;

import com.aviacharter.server.dto.passport.PassportRequestDto;
import com.aviacharter.server.entity.client.Client;
import com.aviacharter.server.entity.passport.Passport;
import com.aviacharter.server.facade.GeneralFacade;
import com.aviacharter.server.service.ClientService;
import com.aviacharter.server.utils.DateParser;
import org.springframework.stereotype.Service;

@Service
public class PassportRequestMapper extends GeneralFacade<Passport, PassportRequestDto> {
    private final ClientService clientService;
    public PassportRequestMapper(ClientService clientService) {
        super(Passport.class, PassportRequestDto.class);
        this.clientService = clientService;
    }


    @Override
    protected void decorateEntity(Passport entity, PassportRequestDto dto) {
        super.decorateEntity(entity, dto);

        DateParser dateParser = new DateParser();

        Client client = clientService.findById(dto.getClientId());
        entity.setPassportNumber(dto.getPassportNumber());
        entity.setBirthDate(dateParser.parseStringToLocalDate(dto.getBirthDate()));
        entity.setStartDate(dateParser.parseStringToLocalDate(dto.getStartDate()));
        entity.setExpiredDate(dateParser.parseStringToLocalDate(dto.getExpiredDate()));
        client.setPassport(entity);
        entity.setClient(client);
    }
}
