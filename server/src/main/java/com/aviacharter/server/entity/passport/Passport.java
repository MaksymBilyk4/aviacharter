package com.aviacharter.server.entity.passport;


import com.aviacharter.server.entity.BaseEntity;
import com.aviacharter.server.entity.client.Client;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "passports")
public class Passport extends BaseEntity {

    @Column(name = "first_name", nullable = false)
    private String firstName;

    @Column(name = "last_name", nullable = false)
    private String lastName;

    @Column(name = "birth_date", nullable = false)
    private LocalDate birthDate;

    @Column(name = "passport_number", nullable = false, unique = true)
    private String passportNumber;

    @Enumerated(EnumType.STRING)
    @Column(name = "gender", nullable = false)
    private Gender gender;

    @Column(name = "start_date", nullable = false)
    private LocalDate startDate;

    @Column(name = "expired_date", nullable = false)
    private LocalDate expiredDate;

    @Column(name = "additional_data")
    private String additionalData;

    @OneToOne(mappedBy = "passport")
    private Client client;

    @Override
    public String toString() {
        return "Passport{" +
                "firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", birthDate=" + birthDate +
                ", passportNumber='" + passportNumber + '\'' +
                ", gender=" + gender +
                ", startDate=" + startDate +
                ", expiredDate=" + expiredDate +
                ", additionalData='" + additionalData + '\'' +
                ", client=" + client.getId() +
                '}';
    }
}
