import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {findOrderById} from "../../api/orders";
import {Divider, Table} from "antd";
import {tourOperatorsDataColumn} from "../../utils/tables/tourOperatorsDataColumn";
import {PATH} from "../../routes/PATH";
import {orderTypesDataColumn} from "../../utils/tables/orderTypesDataColumn";
import {
    CalendarOutlined,
    CommentOutlined, DollarOutlined,
    FieldTimeOutlined,
    NumberOutlined, PlusCircleOutlined,
    SolutionOutlined
} from "@ant-design/icons";

const OrderInfo = () => {

    const {id} = useParams();
    const [order, setOrder] = useState({});

    useEffect(() => {
        findOrderById(id).then(res => setOrder(res?.data));
    }, [])


    return (
        <div>
            <p style={{fontSize: "20px", textAlign: "center"}}>Інформація про замовлення: <b>{order?.orderNumber}</b></p>

            <div style={{margin: "25px 0 40px 0", display: "flex", justifyContent: "space-between"}}>
                <div>
                    <p style={{fontSize: "22px", margin: 0, padding: 0}}> <CalendarOutlined/> <b>{order?.orderDate}</b></p>
                    <p style={{color: "#ffa39e", fontWeight: "bold", fontSize: "16px", margin: 0, padding: 0}}>Дата замовлення</p>
                </div>

                <div>
                    <p style={{fontSize: "22px", margin: 0, padding: 0}}><FieldTimeOutlined />: <b>{order?.departureDate}</b></p>
                    <p style={{color: "#ffbb96", fontWeight: "bold", fontSize: "16px", margin: 0, padding: 0}}>Дата відправлення</p>
                </div>

                <div>
                    <p style={{fontSize: "22px", margin: 0, padding: 0}}><NumberOutlined />: <b>{order?.orderNumber}</b></p>
                    <p style={{color: "#5cdbd3", fontWeight: "bold", fontSize: "16px", margin: 0, padding: 0}}>Номер заявки</p>
                </div>
            </div>

            <div style={{display: "flex", justifyContent: "space-between", margin: "0 0 30px 0"}}>
                <div>
                    <p style={{fontSize: "22px", margin: 0, padding: 0}}><CommentOutlined />: <b>{order?.comment}</b></p>
                    <p style={{color: "#b37feb", fontWeight: "bold", fontSize: "16px", margin: 0, padding: 0}}>Коментар</p>
                </div>

                <div>
                    <p style={{fontSize: "22px", margin: 0, padding: 0}}><SolutionOutlined />: <b>{order?.nettoPrice}</b></p>
                    <p style={{color: "#597ef7", fontWeight: "bold", fontSize: "16px", margin: 0, padding: 0}}>Нетто</p>
                </div>

                <div>
                    <p style={{fontSize: "22px", margin: 0, padding: 0}}><DollarOutlined />: <b>{order?.bruttoPrice}</b></p>
                    <p style={{color: "#f759ab", fontWeight: "bold", fontSize: "16px", margin: 0, padding: 0}}>Брутто</p>
                </div>
            </div>

            <div style={{background: "#95de64", padding: "10px 5px", borderRadius: "20px"}}>
                <p style={{margin: 0, padding: 0, alignSelf: "center", fontSize: "22px"}}><PlusCircleOutlined /> <b>{order?.profit}</b></p>
                <p style={{margin: 0, padding: 0, fontSize: "16px", fontWeight: "bold", color: "#ff4d4f"}}>Profit</p>
            </div>

            <p style={{fontSize: "24px", margin: "15px 0 0 0"}}>Клієнт: <Link to={PATH.CLIENTS.info(order?.client?.id)}>{order?.client?.clientName}</Link></p>



            <Divider style={{border: "2px solid orange"}}/>

            <p style={{fontSize: "18px"}}>Тур оператор: <b>{order?.operator?.operatorName}</b></p>
            <Table
                dataSource={[order?.operator]}
                columns={tourOperatorsDataColumn(false)}
                bordered
                style={{width: "100%"}}
                pagination={false}
            />

            <Divider style={{border: "2px solid orange"}}/>

            <p style={{fontSize: "18px"}}>Типи замовлень - {order?.orderTypes?.map(item => (
                <b>{item?.orderType}; </b>))}
            </p>
            <Table
                dataSource={order?.orderTypes}
                columns={orderTypesDataColumn(false)}
                bordered
                style={{width: "100%"}}
                pagination={false}
            />
        </div>
    );
};

export default OrderInfo;