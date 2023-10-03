package com.aviacharter.server.dto.payment;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PaymentRequestDto {

    private String cardNumber;
    private String cardOwner;
    private String bankName;
    private String expiredDate;
    private String CVV;
    private long balance;
    private String cardInfo;

    @Override
    public String toString() {
        return "PaymentRequestDto{" +
                "cardNumber=" + cardNumber +
                ", cardOwner='" + cardOwner + '\'' +
                ", bankName='" + bankName + '\'' +
                ", expiredDate='" + expiredDate + '\'' +
                ", CVV='" + CVV + '\'' +
                ", balance=" + balance +
                ", cardInfo='" + cardInfo + '\'' +
                '}';
    }
}
