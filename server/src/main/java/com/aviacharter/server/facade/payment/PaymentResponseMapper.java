package com.aviacharter.server.facade.payment;

import com.aviacharter.server.dto.payment.PaymentResponseDto;
import com.aviacharter.server.entity.payment.Payment;
import com.aviacharter.server.facade.GeneralFacade;
import org.springframework.stereotype.Service;

@Service
public class PaymentResponseMapper extends GeneralFacade<Payment, PaymentResponseDto> {
    public PaymentResponseMapper() {
        super(Payment.class, PaymentResponseDto.class);
    }

    @Override
    protected void decorateDto(PaymentResponseDto dto, Payment entity) {
        dto.setBankName(String.valueOf(entity.getBank()));

        super.decorateDto(dto, entity);
    }
}
