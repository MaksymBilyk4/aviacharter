package com.aviacharter.server.service;

import com.aviacharter.server.entity.operator.Operator;
import com.aviacharter.server.repository.OperatorRepository;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
@AllArgsConstructor
public class OperatorService implements BaseService<Operator>{

    private final OperatorRepository operatorRepository;

    @Override
    public List<Operator> findAll() {
        return operatorRepository.findAll();
    }

    @Override
    public Page<Operator> findAllPageable(int size, int pageNumber) {
        Pageable pageable = PageRequest.of(pageNumber, size);
        return operatorRepository.findAll(pageable);
    }

    @Override
    public Operator findById(Long id) {
        return operatorRepository.findById(id).orElse(null);
    }

    @Override
    public Operator update(Operator obj, Long id) {
        Operator operator = findById(id);

        operator.setOperatorName(obj.getOperatorName());

        return operatorRepository.save(operator);
    }

    @Override
    public Operator create(Operator obj) {
        return operatorRepository.save(obj);
    }

    @Override
    public void deleteById(Long id) {
        operatorRepository.deleteById(id);
    }
}
