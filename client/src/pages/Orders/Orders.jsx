import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {ordersSelector} from "../../redux/selector/orderSelector";
import {Input, Table} from "antd";
import {orderDataColumn} from "../../utils/tables/orderDataColumn";
import debounce from "lodash.debounce";

const Orders = () => {

    const orders = useSelector(ordersSelector);

    const [filtered, setFiltered] = useState(useSelector(ordersSelector));
    const [query, setQuery] = useState("");

    const filterOrdersChange = e => {
        setFiltered(orders?.filter(item =>
            item?.orderDate.includes(e.target.value) ||
            item?.departureDate.includes(e.target.value) ||
            item?.orderNumber.toLowerCase().includes(e.target.value.toLowerCase()) ||
            item?.comment.toLowerCase().includes(e.target.value.toLowerCase())
        ));
        setQuery(e.target.value)
    }

    useEffect(() => setFiltered(orders), [orders]);

    return (
        <>
            <h1 style={{textAlign: "center", fontSize: "24px", margin: "0 0 10px 0"}}>Замовлення</h1>


            <h1>Пошук замовлення</h1>
            <Input
                placeholder={"Шукай замовлення за датою замовлення / відправлення або за номером замовлення"}
                onChange={debounce(filterOrdersChange, 300)}
                style={{margin: "5px 0 25px 0"}}
            />

            <h1>{filtered.length === 0 && `Замовлення за запитом ${query} не знайдено`}</h1>

            <Table
                bordered
                dataSource={filtered || orders}
                columns={orderDataColumn()}
                pagination={false}
                style={{width: "100%", margin: "10px 0 0 0"}}
            />

        </>
    );
};

export default Orders;