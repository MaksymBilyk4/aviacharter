package com.aviacharter.server.facade.payment;

import com.aviacharter.server.dto.payment.PaymentRequestDto;
import com.aviacharter.server.entity.payment.Payment;
import com.aviacharter.server.facade.GeneralFacade;
import org.springframework.stereotype.Service;

@Service
public class PaymentRequestMapper extends GeneralFacade<Payment, PaymentRequestDto> {
    public PaymentRequestMapper() {
        super(Payment.class, PaymentRequestDto.class);
    }
}
