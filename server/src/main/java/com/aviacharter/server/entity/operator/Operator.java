package com.aviacharter.server.entity.operator;


import com.aviacharter.server.entity.BaseEntity;
import com.aviacharter.server.entity.order.Order;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "operators")
public class Operator extends BaseEntity {

    @Column(name = "operator_name")
    private String operatorName;

    @OneToMany(mappedBy = "tourOperator")
    private Set<Order> orders;

    @Override
    public String toString() {
        return "Operator{" +
                "operatorName='" + operatorName + '\'' +
                ", order=" + orders +
                '}';
    }
}
