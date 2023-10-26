package com.aviacharter.server.entity.order;

import com.aviacharter.server.entity.BaseEntity;
import com.aviacharter.server.entity.client.Client;
import com.aviacharter.server.entity.operator.Operator;
import com.aviacharter.server.entity.orderType.OrderType;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.util.Set;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "orders")
public class Order extends BaseEntity {

    @Column(name = "brutto_price", nullable = false)
    private int bruttoPrice;

    @Column(name = "netto_price", nullable = false)
    private int nettoPrice;

    @Column(name = "profit", nullable = false)
    private int profit;

    @Column(name = "order_date", nullable = false)
    private LocalDate orderDate;

    @Column(name = "departure_date", nullable = false)
    private LocalDate departureDate;

    @Column(name = "order_number")
    private String orderNumber;

    @Column(name = "comment")
    private String comment;


    // ManyToMany
    @ManyToMany
    @JoinTable(
            name = "orders_types",
            joinColumns = @JoinColumn(name = "order_id"),
            inverseJoinColumns = @JoinColumn(name = "orderType_id")
    )
    private Set<OrderType> orderTypes;

    // ManyToOne
    @ManyToOne
    @JoinColumn(name = "operator_id")
    private Operator tourOperator;

    //ManyToOne
    @ManyToOne
    @JoinColumn(name = "client_id", referencedColumnName = "id")
    private Client client;

    @Override
    public String toString() {
        return "Order{" +
                "orderTypes=" + orderTypes +
                ", bruttoPrice=" + bruttoPrice +
                ", nettoPrice=" + nettoPrice +
                ", profit=" + profit +
                ", orderDate=" + orderDate +
                ", departureDate=" + departureDate +
                ", tourOperator=" + tourOperator.getOperatorName() +
                ", orderNumber='" + orderNumber + '\'' +
                ", client=" + client.getId() +
                ", comment='" + comment + '\'' +
                '}';
    }
}
