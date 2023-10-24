package com.aviacharter.server.controller;

import com.aviacharter.server.entity.orderType.OrderType;
import com.aviacharter.server.dto.orderType.OrderTypeRequestDto;
import com.aviacharter.server.dto.orderType.OrderTypeResponseDto;
import com.aviacharter.server.facade.orderType.OrderTypeRequestMapper;
import com.aviacharter.server.facade.orderType.OrderTypeResponseMapper;
import com.aviacharter.server.service.OrderTypeService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin("*")
@RestController
@AllArgsConstructor
@RequestMapping("${api.version}/orderTypes")
public class OrderTypeController {

    private final OrderTypeService orderTypeService;
    private final OrderTypeRequestMapper requestMapper;
    private final OrderTypeResponseMapper responseMapper;

    @GetMapping("/all")
    private List<OrderTypeResponseDto> findAll() {
        return orderTypeService.findAll().stream()
                .map(responseMapper::convertToDto)
                .collect(Collectors.toList());
    }

    @GetMapping("/{id}")
    private OrderTypeResponseDto findById(
            @PathVariable Long id
    ) {
        return responseMapper.convertToDto(orderTypeService.findById(id));
    }


    @PostMapping
    private OrderTypeResponseDto create(
            @RequestBody OrderTypeRequestDto dto
    ) {
        OrderType orderType = requestMapper.convertToEntity(dto);
        return responseMapper.convertToDto(orderTypeService.create(orderType));
    }

    @DeleteMapping("/{id}")
    private void deleteById(
            @PathVariable Long id
    ) {
        orderTypeService.deleteById(id);
    }
}
