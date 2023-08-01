package com.aviacharter.server.service;

import com.aviacharter.server.entity.payment.Payment;
import com.aviacharter.server.repository.PaymentRepository;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
@AllArgsConstructor
public class PaymentService implements BaseService<Payment> {

    private final PaymentRepository paymentRepository;

    @Override
    public List<Payment> findAll() {
        return paymentRepository.findAll();
    }

    @Override
    public Page<Payment> findAllPageable(int size, int pageNumber) {
        Pageable pageable = PageRequest.of(pageNumber, size, Sort.by("bank"));
        return paymentRepository.findAll(pageable);
    }

    @Override
    public Payment findById(Long id) {
        Optional<Payment> payment = paymentRepository.findById(id);
        return payment.orElse(null);
    }

    @Override
    public Payment update(Payment obj) {
        Payment payment = findById(obj.getId());

        payment.setCVV(obj.getCVV());
        payment.setBank(obj.getBank());
        payment.setBalance(obj.getBalance());
        payment.setCardInfo(obj.getCardInfo());
        payment.setCardOwner(obj.getCardOwner());
        payment.setCardNumber(obj.getCardNumber());
        payment.setExpiredDate(obj.getExpiredDate());

        return paymentRepository.save(payment);
    }

    @Override
    public Payment create(Payment obj) {
        return paymentRepository.save(obj);
    }

    @Override
    public void deleteById(Long id) {
        paymentRepository.deleteById(id);
    }
}
