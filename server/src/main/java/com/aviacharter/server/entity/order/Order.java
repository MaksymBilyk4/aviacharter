package com.aviacharter.server.entity.order;

import com.aviacharter.server.entity.BaseEntity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "orders")
public class Order extends BaseEntity {

    @Enumerated(EnumType.STRING)
    private OrderTypes orderType;

//    @Column(name = "country", nullable = false)
//    private String country;

    @Column(name = "comment")
    private String comment;
}
