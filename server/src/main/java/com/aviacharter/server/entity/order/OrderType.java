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
@Table(name = "order_types")
public class OrderType extends BaseEntity {

    private String orderType;

    @ManyToOne
    @JoinColumn(name = "order_id", nullable = false)
    private Order order;

    @Override
    public String toString() {
        return "OrderType{" +
                "orderType=" + orderType +
                ", order=" + order.getId() +
                '}';
    }
}
