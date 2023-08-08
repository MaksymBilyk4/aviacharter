package com.aviacharter.server.service;

import com.aviacharter.server.entity.client.Client;
import com.aviacharter.server.repository.ClientRepository;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
@AllArgsConstructor
public class ClientService implements BaseService<Client> {

    private final ClientRepository clientRepository;

    @Override
    public List<Client> findAll() {
        return clientRepository.findAll();
    }

    @Override
    public Page<Client> findAllPageable(int size, int pageNumber) {
        Pageable pageable = PageRequest.of(pageNumber, size);
        return clientRepository.findAll(pageable);
    }

    @Override
    public Client findById(Long id) {
        return clientRepository.findById(id).orElse(null);
    }

    @Override
    public Client update(Client obj, Long id) {
        Client client = findById(id);

        client.setClientName(obj.getClientName());
        client.setBirthday(obj.getBirthday());
        client.setAdditionalInfo(obj.getAdditionalInfo());
        client.setTelephoneNumber(obj.getTelephoneNumber());
        client.setEmail(obj.getEmail());

        return clientRepository.save(client);
    }

    @Override
    public Client create(Client obj) {
        return clientRepository.save(obj);
    }

    @Override
    public void deleteById(Long id) {
        clientRepository.deleteById(id);
    }

    public List<Client> findByClientName (String name) {
        List<Client> clients = clientRepository.findAll();
        return clients.stream()
                .filter(c -> c.getClientName().contains(name))
                .collect(Collectors.toList());
    }
}
