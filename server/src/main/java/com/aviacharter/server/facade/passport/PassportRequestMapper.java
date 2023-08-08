package com.aviacharter.server.facade.passport;

import com.aviacharter.server.dto.passport.PassportRequestDto;
import com.aviacharter.server.entity.passport.Passport;
import com.aviacharter.server.facade.GeneralFacade;
import org.springframework.stereotype.Service;

@Service
public class PassportRequestMapper extends GeneralFacade<Passport, PassportRequestDto> {
    public PassportRequestMapper() {
        super(Passport.class, PassportRequestDto.class);
    }

    @Override
    protected void decorateEntity(Passport entity, PassportRequestDto dto) {
        super.decorateEntity(entity, dto);
    }
}
