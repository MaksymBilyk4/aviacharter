package com.aviacharter.server.entity.client;

import com.aviacharter.server.entity.BaseEntity;
import com.aviacharter.server.entity.passport.Passport;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;

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
    private String telephone_number;

    @Column(name = "email")
    private String email;

    @Column(name = "birthday")
    private LocalDate birthday;

    @Column(name = "additional_info")
    private String additionalInfo;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "passport_number", referencedColumnName = "passport_number")
    private Passport passport;

}
