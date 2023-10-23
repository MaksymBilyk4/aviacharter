package com.aviacharter.server.entity.client;

import com.aviacharter.server.entity.BaseEntity;
import com.aviacharter.server.entity.order.Order;
import com.aviacharter.server.entity.passport.Passport;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import jakarta.persistence.*;
import java.time.LocalDate;
import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "clients")
public class Client extends BaseEntity {

    @Column(name = "client_name", nullable = false)
    private String clientName;

    @Column(name = "telephone_number", nullable = false)
    private String telephoneNumber;

    @Column(name = "email")
    private String email;

    @Column(name = "birthday")
    private LocalDate birthday;

    @Column(name = "additional_info")
    private String additionalInfo;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "passport_id", referencedColumnName = "id")
    private Passport passport;

    @OneToMany(mappedBy = "client")
    private Set<Order> orders;

    @Override
    public String toString() {
        return "Client{" +
                "clientName='" + clientName + '\'' +
                ", telephoneNumber='" + telephoneNumber + '\'' +
                ", email='" + email + '\'' +
                ", birthday=" + birthday +
                ", additionalInfo='" + additionalInfo + '\'' +
                ", passport=" + passport +
                ", orders=" + orders +
                '}';
    }
}
