import React from 'react';
import {useParams} from "react-router-dom";

const OrderInfo = () => {

    const {id} = useParams();

    return (
        <div>
            order id: {id}
        </div>
    );
};

export default OrderInfo;