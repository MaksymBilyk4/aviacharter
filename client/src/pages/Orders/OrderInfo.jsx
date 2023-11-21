import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {findOrderById} from "../../api/orders";
import {Table} from "antd";
import {tourOperatorsDataColumn} from "../../utils/tables/tourOperatorsDataColumn";
import {PATH} from "../../routes/PATH";
import {orderTypesDataColumn} from "../../utils/tables/orderTypesDataColumn";

const OrderInfo = () => {

    const {id} = useParams();
    const [order, setOrder] = useState({});

    useEffect(() => {
        findOrderById(id).then(res => setOrder(res?.data));
    }, [])

    console.log(order);


    return (
        <div>
            <h1>Інформація про замовлення: </h1>

            <p>Id: {order?.id}</p>
            <p>Order date: {order?.orderDate}</p>
            <p>Departure date: {order?.departureDate}</p>
            <p>Order number: {order?.orderNumber}</p>
            <p>Comment: {order?.comment}</p>
            <p>Brutto: {order?.bruttoPrice}, Netto: {order?.nettoPrice}, Profit: {order?.profit}</p>

            <h1>Tour Operator</h1>
            <Table
                dataSource={[order?.operator]}
                columns={tourOperatorsDataColumn(false)}
                bordered
                style={{width: "100%"}}
                pagination={false}
            />

            <h1>Client: <Link to={PATH.CLIENTS.info(order?.client?.id)}>{order?.client?.clientName}</Link></h1>


            <h1>Order Types</h1>
            <Table
                dataSource={order?.orderTypes}
                columns={orderTypesDataColumn(false)}
                bordered
                style={{width: "100%"}}
                pagination={false}
            />
        </div>
    );
};

export default OrderInfo;