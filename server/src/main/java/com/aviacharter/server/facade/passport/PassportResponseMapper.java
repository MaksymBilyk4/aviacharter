package com.aviacharter.server.facade.passport;

import com.aviacharter.server.dto.passport.PassportResponseDto;
import com.aviacharter.server.entity.passport.Passport;
import com.aviacharter.server.facade.GeneralFacade;
import com.aviacharter.server.utils.DateParser;
import org.springframework.stereotype.Service;

@Service
public class PassportResponseMapper extends GeneralFacade<Passport, PassportResponseDto> {
    public PassportResponseMapper() {
        super(Passport.class, PassportResponseDto.class);
    }

    @Override
    protected void decorateDto(PassportResponseDto dto, Passport entity) {
        super.decorateDto(dto, entity);
        DateParser dateParser = new DateParser();

        dto.setBirthDate(dateParser.parseLocalDateToString(entity.getBirthDate()));
        dto.setStartDate(dateParser.parseLocalDateToString(entity.getStartDate()));
        dto.setExpiredDate(dateParser.parseLocalDateToString(entity.getExpiredDate()));
        dto.setGender(String.valueOf(entity.getGender()));
        if (entity.getClient() != null) dto.setClientId(entity.getClient().getId());
    }
}
