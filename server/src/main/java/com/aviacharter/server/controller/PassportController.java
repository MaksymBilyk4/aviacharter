package com.aviacharter.server.controller;

import com.aviacharter.server.dto.passport.PassportRequestDto;
import com.aviacharter.server.dto.passport.PassportResponseDto;
import com.aviacharter.server.entity.passport.Passport;
import com.aviacharter.server.facade.passport.PassportRequestMapper;
import com.aviacharter.server.facade.passport.PassportResponseMapper;
import com.aviacharter.server.service.PassportService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@AllArgsConstructor
@RequestMapping("${api.version}/passports")
public class PassportController {

    private final PassportService passportService;
    private final PassportResponseMapper responseMapper;
    private final PassportRequestMapper requestMapper;

    @GetMapping("/all")
    public List<PassportResponseDto> findAll() {
        return passportService.findAll().stream()
                .map(responseMapper::convertToDto)
                .collect(Collectors.toList());
    }

    @GetMapping
    public List<PassportResponseDto> findAllPageable(
            @RequestParam int pageSize,
            @RequestParam int pageNumber
    ) {
        return passportService.findAllPageable(pageSize, pageNumber).stream()
                .map(responseMapper::convertToDto)
                .collect(Collectors.toList());
    }

    @GetMapping("/{id}")
    public PassportResponseDto findById(
            @PathVariable Long id
    ) {
        return responseMapper.convertToDto(passportService.findById(id));
    }

    @PostMapping
    public PassportResponseDto create(
            @RequestBody PassportRequestDto dto
    ) {
        Passport passport = requestMapper.convertToEntity(dto);
        return responseMapper.convertToDto(passportService.create(passport));
    }

    @PutMapping("/{id}")
    public PassportResponseDto update(
            @RequestBody PassportRequestDto dto,
            @PathVariable Long id
    ) {
        Passport passport = requestMapper.convertToEntity(dto);
        return responseMapper.convertToDto(passportService.update(passport, id));
    }

    @DeleteMapping("/{id}")
    public void deleteById (
            @PathVariable Long id
    ) {
        passportService.deleteById(id);
    }
}
