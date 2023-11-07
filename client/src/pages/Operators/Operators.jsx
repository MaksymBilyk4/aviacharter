import React from 'react';
import {useSelector} from "react-redux";
import {tourOperatorsSelector} from "../../redux/selector/orderSelector";
import {Table} from "antd";
import {tourOperatorsDataColumn} from "../../utils/tables/tourOperatorsDataColumn";

const Operators = () => {

    const tourOperators = useSelector(tourOperatorsSelector);

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
            <Table
                bordered
                dataSource={tourOperators}
                columns={tourOperatorsDataColumn}
                pagination={false}
                style={{width: "100%"}}
            />
        </div>
    );
};

export default Operators;