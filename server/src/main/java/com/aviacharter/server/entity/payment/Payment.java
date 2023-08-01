package com.aviacharter.server.entity.payment;


import com.aviacharter.server.entity.BaseEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "payments")
public class Payment extends BaseEntity {

    @Column(name = "card_number", nullable = false)
    private long cardNumber;

    @Column(name = "card_owner", nullable = false)
    private String cardOwner;

    @Column(name = "bank", nullable = false)
    @Enumerated(EnumType.STRING)
    private BankName bank;

    @Column(name = "expired_date", nullable = false)
    private String expiredDate;

    @Column(name = "cvv", nullable = false)
    private String CVV;

    @Column(name = "balance", nullable = false)
    private long balance;

    @Column(name = "card_info")
    private String cardInfo;

}
