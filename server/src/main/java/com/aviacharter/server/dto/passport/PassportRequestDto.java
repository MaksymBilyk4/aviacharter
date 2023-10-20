package com.aviacharter.server.dto.passport;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PassportRequestDto {

    private String firstName;
    private String lastName;
    private String birthDate;
    private String passportNumber;
    private String gender;
    private String startDate;
    private String expiredDate;
    private String additionalData;
    private Long clientId;

    @Override
    public String toString() {
        return "PassportRequestDto{" +
                "firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", birthDate='" + birthDate + '\'' +
                ", passportNumber='" + passportNumber + '\'' +
                ", gender='" + gender + '\'' +
                ", startDate='" + startDate + '\'' +
                ", expiredDate='" + expiredDate + '\'' +
                ", additionalData='" + additionalData + '\'' +
                ", clientId='" + clientId + '\'' +
                '}';
    }
}
