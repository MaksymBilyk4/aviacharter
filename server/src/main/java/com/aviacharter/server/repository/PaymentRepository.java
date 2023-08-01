package com.aviacharter.server.repository;

import com.aviacharter.server.entity.payment.Payment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PaymentRepository extends JpaRepository<Payment, Long> {
    List<Payment> findAllByCardNumber(long cardNumber);

    List<Payment> findAllByCardOwner(String cardOwner);
}
