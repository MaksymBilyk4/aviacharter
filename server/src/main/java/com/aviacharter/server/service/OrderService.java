package com.aviacharter.server.service;

import com.aviacharter.server.entity.order.Order;
import com.aviacharter.server.repository.OrderRepository;
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
public class OrderService implements BaseService<Order> {

    private final OrderRepository orderRepository;

    @Override
    public List<Order> findAll() {
        return orderRepository.findAll();
    }

    @Override
    public Page<Order> findAllPageable(int size, int pageNumber) {
        Pageable pageable = PageRequest.of(pageNumber, size);
        return orderRepository.findAll(pageable);
    }

    @Override
    public Order findById(Long id) {
        return orderRepository.findById(id).orElse(null);
    }

    @Override
    public Order update(Order obj, Long id) {
        Order order = findById(id);

        order.setOrderType(obj.getOrderType());
        order.setComment(obj.getComment());

        return orderRepository.save(order);
    }

    @Override
    public Order create(Order obj) {
        return orderRepository.save(obj);
    }

    @Override
    public void deleteById(Long id) {
        orderRepository.deleteById(id);
    }
}
