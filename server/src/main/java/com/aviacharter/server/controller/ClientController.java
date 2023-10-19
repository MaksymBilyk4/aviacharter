package com.aviacharter.server.controller;

import com.aviacharter.server.dto.client.ClientRequestDto;
import com.aviacharter.server.dto.client.ClientResponseDto;
import com.aviacharter.server.entity.client.Client;
import com.aviacharter.server.facade.client.ClientRequestMapper;
import com.aviacharter.server.facade.client.ClientResponseMapper;
import com.aviacharter.server.service.ClientService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin("*")
@RestController
@AllArgsConstructor
@RequestMapping("${api.version}/clients")
public class ClientController {

    private final ClientService clientService;
    private final ClientResponseMapper responseMapper;
    private final ClientRequestMapper requestMapper;

    @GetMapping("/all")
    public List<ClientResponseDto> findAll () {
        return clientService.findAll().stream()
                .map(responseMapper::convertToDto)
                .collect(Collectors.toList());
    }

    @GetMapping
    public List<ClientResponseDto> findAllPageable(
            @RequestParam int pageSize,
            @RequestParam int pageNumber
    ) {
        return clientService.findAllPageable(pageSize, pageNumber).stream()
                .map(responseMapper::convertToDto)
                .collect(Collectors.toList());
    }

    @GetMapping("/name")
    public List<ClientResponseDto> findByClientName(
            @RequestParam String clientName
    ) {
        return clientService.findByClientName(clientName).stream()
                .map(responseMapper::convertToDto)
                .collect(Collectors.toList());
    }

    @GetMapping("/{id}")
    public ClientResponseDto findById (
            @PathVariable Long id
    ) {
        return responseMapper.convertToDto(clientService.findById(id));
    }

    @PostMapping
    public ClientResponseDto create(
            @RequestBody ClientRequestDto dto
    ) {
        Client client = requestMapper.convertToEntity(dto);
        return responseMapper.convertToDto(clientService.create(client));
    }

    @PutMapping("/{id}")
    public ClientResponseDto update(
            @RequestBody ClientRequestDto dto,
            @PathVariable Long id
    ) {
        Client client = requestMapper.convertToEntity(dto);
        return responseMapper.convertToDto(clientService.update(client, id));
    }

    @DeleteMapping("/{id}")
    public void deleteById (
            @PathVariable Long id
    ) {
        clientService.deleteById(id);
    }

}
