package com.aviacharter.server.controller;

import com.aviacharter.server.dto.payment.PaymentRequestDto;
import com.aviacharter.server.dto.payment.PaymentResponseDto;
import com.aviacharter.server.entity.payment.Payment;
import com.aviacharter.server.facade.payment.PaymentRequestMapper;
import com.aviacharter.server.facade.payment.PaymentResponseMapper;
import com.aviacharter.server.service.PaymentService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@AllArgsConstructor
@RequestMapping("${api.version}/payments")
public class PaymentController {

    private final PaymentService paymentService;
    private final PaymentResponseMapper responseMapper;
    private final PaymentRequestMapper requestMapper;

    @GetMapping("/card")
    public List<PaymentResponseDto> findAllByCardNumber(
            @RequestParam String cardNumber
    ) {
        return paymentService.findAllByCardNumber(cardNumber).stream()
                .map(responseMapper::convertToDto)
                .collect(Collectors.toList());
    }

    @GetMapping("/owner")
    private List<PaymentResponseDto> findAllByCardOwner(
            @RequestParam String owner
    ) {
        return paymentService.findAllByCardOwner(owner).stream()
                .map(responseMapper::convertToDto)
                .collect(Collectors.toList());
    }

    @GetMapping("/all")
    public List<PaymentResponseDto> findAll() {
        return paymentService.findAll().stream()
                .map(responseMapper::convertToDto)
                .collect(Collectors.toList());
    }

    @GetMapping
    public List<PaymentResponseDto> findAllPageable(
            @RequestParam int pageSize,
            @RequestParam int pageNumber
    ) {
        return paymentService.findAllPageable(pageSize, pageNumber).stream()
                .map(responseMapper::convertToDto)
                .collect(Collectors.toList());
    }

    @GetMapping("/{id}")
    public PaymentResponseDto findById(
            @PathVariable Long id
    ) {
        return responseMapper.convertToDto(paymentService.findById(id));
    }

    @PostMapping
    public PaymentResponseDto create(
            @RequestBody PaymentRequestDto dto
    ) {
        System.out.println(dto.getBankName());
        Payment payment = requestMapper.convertToEntity(dto);
        return responseMapper.convertToDto(paymentService.create(payment));
    }

    @PutMapping("/{id}")
    public PaymentResponseDto update(
            @RequestBody PaymentRequestDto dto,
            @PathVariable Long id
    ) {
        Payment payment = requestMapper.convertToEntity(dto);
        return responseMapper.convertToDto(paymentService.update(payment, id));
    }

    @DeleteMapping("/{id}")
    public void deleteById(
            @PathVariable Long id
    ) {
        paymentService.deleteById(id);
    }
}
