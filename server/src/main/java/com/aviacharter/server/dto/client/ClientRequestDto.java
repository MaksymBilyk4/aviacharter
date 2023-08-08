package com.aviacharter.server.dto.client;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ClientRequestDto {

    private String clientName;
    private String telephoneNumber;
    private String email;
    private String birthday;
    private String additionalInfo;

    @Override
    public String toString() {
        return "ClientRequestDto{" +
                "clientName='" + clientName + '\'' +
                ", telephoneNumber='" + telephoneNumber + '\'' +
                ", email='" + email + '\'' +
                ", birthday='" + birthday + '\'' +
                ", additionalInfo='" + additionalInfo + '\'' +
                '}';
    }
}
