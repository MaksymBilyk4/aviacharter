package com.aviacharter.server.controller;

import com.aviacharter.server.dto.payment.PaymentResponseDto;
import com.aviacharter.server.facade.payment.PaymentRequestMapper;
import com.aviacharter.server.facade.payment.PaymentResponseMapper;
import com.aviacharter.server.service.PaymentService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@AllArgsConstructor
@RequestMapping("${api.version}/payments")
public class PaymentController {

    private final PaymentService paymentService;
    private final PaymentResponseMapper responseMapper;
    private final PaymentRequestMapper paymentRequestMapper;

    @GetMapping
    public List<PaymentResponseDto> findAll() {
        return paymentService.findAll().stream()
                .map(responseMapper::convertToDto)
                .collect(Collectors.toList());
    }
}
