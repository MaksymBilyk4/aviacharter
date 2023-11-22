import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {tourOperatorsSelector} from "../../redux/selector/orderSelector";
import {Input, Table} from "antd";
import {tourOperatorsDataColumn} from "../../utils/tables/tourOperatorsDataColumn";
import debounce from "lodash.debounce";

const Operators = () => {

    const tourOperators = useSelector(tourOperatorsSelector);
    const [filtered, setFiltered] = useState(useSelector(tourOperatorsSelector));
    const [query, setQuery] = useState("");

    const handleFilteredChange = (e) => {
        setFiltered(tourOperators?.filter(item => item?.operatorName.toLowerCase().includes(e.target.value.toLowerCase())));
        setQuery(e.target.value);
    }

    useEffect(() => setFiltered(tourOperators), [tourOperators])


    return (
        <>
            <h1 style={{textAlign: "center", fontSize: "20px", margin: "0 0 20px 0"}}>Тур оператори</h1>

            <h1>Пошук</h1>
            <Input
                placeholder={"Шукайте за назвою тур оператора"}
                style={{width: "100%", margin: "0 0 30px 0"}}
                onChange={debounce(handleFilteredChange, 300)}
            />

            <h1>{filtered.length === 0 && `Не вдалося знайти тур оператора за запитом ${query}`}</h1>

            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                <Table
                    bordered
                    dataSource={filtered || tourOperators}
                    columns={tourOperatorsDataColumn()}
                    pagination={false}
                    style={{width: "100%"}}
                />
            </div>
        </>
    );
};

export default Operators;