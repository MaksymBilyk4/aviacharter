package com.aviacharter.server.entity.orderType;

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
@Table(name = "order_types")
public class OrderType extends BaseEntity {

    private String orderType;

    @ManyToMany(mappedBy = "orderTypes")
    private Set<Order> orders;

    @Override
    public String toString() {
        return "OrderType{" +
                "orderType=" + orderType +
                ", order=" + orders +
                '}';
    }
}
