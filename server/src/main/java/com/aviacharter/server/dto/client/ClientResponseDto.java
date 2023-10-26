package com.aviacharter.server.dto.client;

import com.aviacharter.server.dto.order.OrderNoRelationResponseDto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ClientResponseDto {

    private Long id;
    private String clientName;
    private String telephoneNumber;
    private String email;
    private String birthday;
    private String additionalInfo;

    private Set<OrderNoRelationResponseDto> orderData = new HashSet<>();
    private Long passportId;

    @Override
    public String toString() {
        return "ClientResponseDto{" +
                "id=" + id +
                ", clientName='" + clientName + '\'' +
                ", telephoneNumber='" + telephoneNumber + '\'' +
                ", email='" + email + '\'' +
                ", birthday='" + birthday + '\'' +
                ", additionalInfo='" + additionalInfo + '\'' +
                ", orderData=" + orderData +
                ", passportId=" + passportId +
                '}';
    }
}
