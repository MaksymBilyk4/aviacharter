import React from 'react';
import {useSelector} from "react-redux";
import {ordersSelector} from "../../redux/selector/orderSelector";
import {Table} from "antd";
import {orderDataColumn} from "../../utils/tables/orderDataColumn";

const Orders = () => {

    const orders = useSelector(ordersSelector);

    return (
        <>

            <Table
                bordered
                dataSource={orders}
                columns={orderDataColumn()}
                pagination={false}
                style={{width: "100%"}}
            />

        </>
    );
};

export default Orders;