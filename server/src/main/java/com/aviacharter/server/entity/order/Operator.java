package com.aviacharter.server.entity.order;


import com.aviacharter.server.entity.BaseEntity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "operators")
public class Operator extends BaseEntity {

    @OneToOne(mappedBy = "operator")
    private Order order;

    @Column(name = "operator_name")
    private String operatorName;

    @Override
    public String toString() {
        return "Operator{" +
                "order=" + order.getId() +
                ", operatorName='" + operatorName + '\'' +
                '}';
    }
}
