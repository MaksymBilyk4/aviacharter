package com.aviacharter.server.controller;

import com.aviacharter.server.dto.operator.OperatorRequestDto;
import com.aviacharter.server.dto.operator.OperatorResponseDto;
import com.aviacharter.server.entity.operator.Operator;
import com.aviacharter.server.facade.operator.OperatorRequestDtoMapper;
import com.aviacharter.server.facade.operator.OperatorResponseDtoMapper;
import com.aviacharter.server.service.OperatorService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin("*")
@RestController
@AllArgsConstructor
@RequestMapping("${api.version}/operators")
public class OperatorController {

    private final OperatorResponseDtoMapper responseMapper;
    private final OperatorRequestDtoMapper requestMapper;
    private final OperatorService operatorService;

    @GetMapping("/all")
    public List<OperatorResponseDto> findAll () {
        return operatorService.findAll().stream()
                .map(responseMapper::convertToDto)
                .collect(Collectors.toList());
    }

    @GetMapping("/{id}")
    public OperatorResponseDto findById (
            @PathVariable Long id
    ) {
        return responseMapper.convertToDto(operatorService.findById(id));
    }

    @PutMapping("/{id}")
    public OperatorResponseDto update (
            @RequestBody OperatorRequestDto dto,
            @PathVariable Long id
    ) {
        Operator operator = requestMapper.convertToEntity(dto);
        return responseMapper.convertToDto(operatorService.update(operator, id));
    }

    @PostMapping
    public OperatorResponseDto create(
            @RequestBody OperatorRequestDto dto
    ) {
        Operator operator = requestMapper.convertToEntity(dto);
        return  responseMapper.convertToDto(operatorService.create(operator));
    }

    @DeleteMapping("/{id}")
    public void deleteById (
            @PathVariable Long id
    ) {
        operatorService.deleteById(id);
    }

}
