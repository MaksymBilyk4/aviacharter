import React from 'react';
import {useSelector} from "react-redux";
import {orderTypesSelector} from "../../redux/selector/orderSelector";
import {Table} from "antd";
import {orderTypesDataColumn} from "../../utils/tables/orderTypesDataColumn";

const OrderTypes = () => {

    const orderTypes = useSelector(orderTypesSelector);

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
            <Table
                bordered
                dataSource={orderTypes}
                columns={orderTypesDataColumn}
                pagination={false}
                style={{width: "100%"}}
            />
        </div>
    );
};

export default OrderTypes;