import React from 'react';
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {tourOperatorsSelector} from "../../redux/selector/orderSelector";
import {Table} from "antd";
import {operatorInfoOrderDataColumn} from "../../utils/tables/operatorInfoOrderDataColumn";

const OperatorInfo = () => {

    const {id} = useParams();

    const operator = useSelector(tourOperatorsSelector).filter(item => item?.id === Number(id))[0];

    return (
        <div>
            <h1>operator id: {operator?.id}</h1>
            <h1>operator name: {operator?.operatorName}</h1>

            <h1>Всі замовлення пов'язані з цим оператором: </h1>
            <Table
                bordered
                style={{width: "100%"}}
                pagination={false}
                columns={operatorInfoOrderDataColumn()}
                dataSource={operator?.orders}
            />
        </div>
    );
};

export default OperatorInfo;