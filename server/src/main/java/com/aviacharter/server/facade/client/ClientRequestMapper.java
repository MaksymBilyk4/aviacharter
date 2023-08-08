package com.aviacharter.server.facade.client;

import com.aviacharter.server.dto.client.ClientRequestDto;
import com.aviacharter.server.entity.client.Client;
import com.aviacharter.server.facade.GeneralFacade;
import org.springframework.stereotype.Service;

@Service
public class ClientRequestMapper extends GeneralFacade<Client, ClientRequestDto> {
    public ClientRequestMapper() {
        super(Client.class, ClientRequestDto.class);
    }
}
