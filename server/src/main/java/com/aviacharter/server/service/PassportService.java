package com.aviacharter.server.service;

import com.aviacharter.server.entity.passport.Passport;
import com.aviacharter.server.repository.PassportRepository;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
@AllArgsConstructor
public class PassportService implements BaseService<Passport> {

    private final PassportRepository passportRepository;

    @Override
    public List<Passport> findAll() {
        return passportRepository.findAll();
    }

    @Override
    public Page<Passport> findAllPageable(int size, int pageNumber) {
        Pageable pageable = PageRequest.of(pageNumber, size);
        return passportRepository.findAll(pageable);
    }

    @Override
    public Passport findById(Long id) {
        return passportRepository.findById(id).orElse(null);
    }

    @Override
    public Passport update(Passport obj, Long id) {
        Passport passport = findById(id);

        passport.setPassportNumber(obj.getPassportNumber());
        passport.setFirstName(obj.getFirstName());
        passport.setLastName(obj.getLastName());
        passport.setBirthDate(obj.getBirthDate());
        passport.setGender(obj.getGender());
        passport.setStartDate(obj.getStartDate());
        passport.setExpiredDate(obj.getExpiredDate());
        passport.setAdditionalData(obj.getAdditionalData());

        return passportRepository.save(passport);
    }

    @Override
    public Passport create(Passport obj) {
        return passportRepository.save(obj);
    }

    @Override
    public void deleteById(Long id) {
        passportRepository.deleteById(id);
    }
}
