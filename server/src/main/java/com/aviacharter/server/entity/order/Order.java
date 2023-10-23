package com.aviacharter.server.entity.order;

import com.aviacharter.server.entity.BaseEntity;
import com.aviacharter.server.entity.client.Client;
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


    @OneToMany(mappedBy = "order")
    private Set<OrderType> orderTypes;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "operator_id", referencedColumnName = "id")
    private Operator tourOperator;

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

    @ManyToOne
    @JoinColumn(name = "client_id", nullable = false)
    private Client client;


    @Column(name = "comment")
    private String comment;

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
