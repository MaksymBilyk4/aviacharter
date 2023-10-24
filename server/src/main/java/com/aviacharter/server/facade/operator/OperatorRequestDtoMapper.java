package com.aviacharter.server.facade.operator;

import com.aviacharter.server.dto.operator.OperatorRequestDto;
import com.aviacharter.server.entity.operator.Operator;
import com.aviacharter.server.facade.GeneralFacade;
import org.springframework.stereotype.Service;

@Service
public class OperatorRequestDtoMapper extends GeneralFacade<Operator, OperatorRequestDto> {
    public OperatorRequestDtoMapper() {
        super(Operator.class, OperatorRequestDto.class);
    }
}
