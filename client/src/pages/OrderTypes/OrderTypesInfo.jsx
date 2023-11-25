import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {findOrderTypesById} from "../../api/orders";
import {Table} from "antd";
import {generalInfoOrderDataColumn} from "../../utils/tables/generalInfoOrderDataColumn";
import { Divider } from 'antd';

const OrderTypesInfo = () => {

    const {id} = useParams();
    const [orderType, setOrderType] = useState({});

    useEffect(() => {
        findOrderTypesById(id)
            .then(res => setOrderType(res?.data));
    }, []);


    return (
        <div>
            <h1>Тип замовлення - {orderType?.orderType}</h1>

            <Divider style={{border: '2px solid red'}} />

            <p style={{margin: "0 0 20px 0", fontSize: "20px"}}>Всі замовлення пов'язані з <b>{orderType?.orderType}:</b> </p>
            <h1 style={{color: "red"}}>Кількість {orderType?.orderType} замовлень: {orderType?.orders?.length}</h1>
            <Table
                bordered
                pagination={false}
                style={{width: "100%"}}
                columns={generalInfoOrderDataColumn()}
                dataSource={orderType?.orders}
            />
        </div>
    );
};

export default OrderTypesInfo;