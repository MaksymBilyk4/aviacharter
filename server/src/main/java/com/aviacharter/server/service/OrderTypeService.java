package com.aviacharter.server.service;

import com.aviacharter.server.entity.orderType.OrderType;
import com.aviacharter.server.repository.OrderTypeRepository;
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
public class OrderTypeService implements BaseService<OrderType>{

    private final OrderTypeRepository orderTypeRepository;

    @Override
    public List<OrderType> findAll() {
        return orderTypeRepository.findAll();
    }

    @Override
    public Page<OrderType> findAllPageable(int size, int pageNumber) {
        Pageable pageable = PageRequest.of(pageNumber, size);
        return orderTypeRepository.findAll(pageable);
    }

    @Override
    public OrderType findById(Long id) {
        return orderTypeRepository.findById(id).orElse(null);
    }

    @Override
    public OrderType update(OrderType obj, Long id) {
        OrderType orderType = findById(id);

        obj.setOrderType(orderType.getOrderType());

        return orderTypeRepository.save(orderType);
    }

    @Override
    public OrderType create(OrderType obj) {
        return orderTypeRepository.save(obj);
    }

    @Override
    public void deleteById(Long id) {
        orderTypeRepository.deleteById(id);
    }
}
