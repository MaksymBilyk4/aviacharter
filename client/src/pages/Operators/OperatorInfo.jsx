import React from 'react';
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {tourOperatorsSelector} from "../../redux/selector/orderSelector";
import {Divider, Table} from "antd";
import {generalInfoOrderDataColumn} from "../../utils/tables/generalInfoOrderDataColumn";

const OperatorInfo = () => {

    const {id} = useParams();

    const operator = useSelector(tourOperatorsSelector).filter(item => item?.id === Number(id))[0];

    return (
        <div>
            <h1>Тур оператор - {operator?.operatorName}</h1>

            <Divider style={{border: "2px solid red", margin: "30px 0"}}/>

            <p style={{fontSize: "20px"}}>Всі замовлення пов'язані з оператором: <b>{operator?.operatorName}</b></p>

            <Table
                bordered
                style={{width: "100%"}}
                pagination={false}
                columns={generalInfoOrderDataColumn()}
                dataSource={operator?.orders}
            />

        </div>
    );
};

export default OperatorInfo;