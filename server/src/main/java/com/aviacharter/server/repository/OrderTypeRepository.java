package com.aviacharter.server.repository;

import com.aviacharter.server.entity.orderType.OrderType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderTypeRepository extends JpaRepository<OrderType, Long> {
}
