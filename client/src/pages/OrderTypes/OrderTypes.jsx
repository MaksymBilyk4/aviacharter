import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {orderTypesSelector} from "../../redux/selector/orderSelector";
import {Input, Table} from "antd";
import {orderTypesDataColumn} from "../../utils/tables/orderTypesDataColumn";
import debounce from "lodash.debounce";

const OrderTypes = () => {

    const orderTypes = useSelector(orderTypesSelector);

    const [filtered, setFiltered] = useState(useSelector(orderTypesSelector));
    const [query, setQuery] = useState("");

    const handleFilterChange = (e) => {
        setFiltered(orderTypes?.filter(item => item?.orderType.toLowerCase().includes(e.target.value.toLowerCase())));
        setQuery(e.target.value);
    }

    useEffect(() => setFiltered(orderTypes), [orderTypes]);

    return (
        <>
            <h1 style={{textAlign: "center", margin: "0 0 25px 0"}}>Типи замолвень</h1>

            <h1>Пошук</h1>
            <Input
                onChange={debounce(handleFilterChange, 300)}
                style={{width: "100%", margin: "5px 0 25px 0"}}
                placeholder={"Шукайте по типу замовлення"}
            />

            <h1>{filtered.length === 0 && `Типу щамовлення за запитом ${query} не знайдено`}</h1>

            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                <Table
                    bordered
                    dataSource={filtered || orderTypes}
                    columns={orderTypesDataColumn()}
                    pagination={false}
                    style={{width: "100%"}}
                />
            </div>
        </>
    );
};

export default OrderTypes;