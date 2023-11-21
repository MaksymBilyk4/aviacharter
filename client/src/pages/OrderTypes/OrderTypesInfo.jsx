import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {findOrderTypesById} from "../../api/orders";

const OrderTypesInfo = () => {

    const {id} = useParams();
    const [orderType, setOrderType] = useState({});

    useEffect(() => {
        findOrderTypesById(id)
            .then(res => setOrderType(res?.data));
    }, []);

    // TODO ........

    return (
        <div>
            <p>Id: {orderType?.id}</p>
            <p>Order Type: {orderType?.orderType}</p>
            orders statistic soon
        </div>
    );
};

export default OrderTypesInfo;