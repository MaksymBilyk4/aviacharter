package com.aviacharter.server.controller;

import com.aviacharter.server.dto.order.OrderRequestDto;
import com.aviacharter.server.dto.order.OrderResponseDto;
import com.aviacharter.server.entity.order.Order;
import com.aviacharter.server.facade.order.OrderRequestMapper;
import com.aviacharter.server.facade.order.OrderResponseMapper;
import com.aviacharter.server.service.OrderService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@AllArgsConstructor
@RequestMapping("${api.version}/orders")
public class OrderController {

    private final OrderService orderService;
    private final OrderResponseMapper responseMapper;
    private final OrderRequestMapper requestMapper;

    @GetMapping("/all")
    public List<OrderResponseDto> findAll() {
        return orderService.findAll().stream()
                .map(responseMapper::convertToDto)
                .collect(Collectors.toList());
    }

    @GetMapping
    public List<OrderResponseDto> findAllPageable(
            @RequestParam int pageSize,
            @RequestParam int pageNumber
    ) {
        return orderService.findAllPageable(pageSize, pageNumber).stream()
                .map(responseMapper::convertToDto)
                .collect(Collectors.toList());
    }

    @GetMapping("/{id}")
    public OrderResponseDto findById(
            @PathVariable Long id
    ) {
        return responseMapper.convertToDto(orderService.findById(id));
    }

    @PostMapping
    public OrderResponseDto create(
            @RequestBody OrderRequestDto dto
    ) {
        Order order = requestMapper.convertToEntity(dto);
        return responseMapper.convertToDto(orderService.create(order));
    }

    @PutMapping("/{id}")
    public OrderResponseDto update(
            @PathVariable Long id,
            @RequestBody OrderRequestDto dto
    ) {
        Order order = requestMapper.convertToEntity(dto);
        return responseMapper.convertToDto(orderService.update(order, id));
    }

    @DeleteMapping("/{id}")
    public void deleteById(
            @PathVariable Long id
    ) {
        orderService.deleteById(id);
    }
}
