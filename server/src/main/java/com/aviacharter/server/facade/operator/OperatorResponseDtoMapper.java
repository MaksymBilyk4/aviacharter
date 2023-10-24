package com.aviacharter.server.facade.operator;

import com.aviacharter.server.dto.operator.OperatorResponseDto;
import com.aviacharter.server.entity.operator.Operator;
import com.aviacharter.server.facade.GeneralFacade;
import org.springframework.stereotype.Service;

@Service
public class OperatorResponseDtoMapper extends GeneralFacade<Operator, OperatorResponseDto> {
    public OperatorResponseDtoMapper() {
        super(Operator.class, OperatorResponseDto.class);
    }

    @Override
    protected void decorateDto(OperatorResponseDto dto, Operator entity) {
        super.decorateDto(dto, entity);

        if (entity.getOrder() != null) {
            dto.setOrderId(entity.getOrder().getId());
        }

    }
}
