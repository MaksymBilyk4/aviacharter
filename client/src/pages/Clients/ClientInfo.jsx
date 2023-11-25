import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {currentClientData, passportSelector} from "../../redux/selector/clientSelector";
import {setCurrentClientInfoOptionalById} from "../../redux/action/client";
import {useParams} from "react-router-dom";
import {Divider, Table} from "antd";
import {generalInfoOrderDataColumn} from "../../utils/tables/generalInfoOrderDataColumn";
import {GiftOutlined, InfoCircleOutlined, MailOutlined, MessageOutlined, PhoneOutlined} from "@ant-design/icons";

const ClientInfo = () => {
    let clientData = useSelector(currentClientData);

    const userPassport = useSelector(passportSelector)?.filter(item => item.clientId === clientData?.id);
    const date = new Date();
    const currentDateString = `${date.getDate()}.${date.getMonth() + 1}`;
    const dispatch = useDispatch();
    const {id} = useParams();
    const [generalProfit, setGeneralProfit] = useState(0);

    if (Object.keys(clientData).length === 0) {
        dispatch(setCurrentClientInfoOptionalById(id));
    }

    useEffect(() => {
        const income = clientData?.orderData?.reduce((acc, val) => acc + val?.profit, 0);
        setGeneralProfit(income);
    }, [clientData?.orderData]);

    return (
        <>
            <h1 style={{color: "#f5222d", fontSize: "26px"}}>{currentDateString === clientData?.birthday?.slice(0,5) && <b> - У клієнта день народження!!!</b>}</h1>
            <p style={{textAlign: "center", fontSize: "20px"}}>Інформація про клієнта: <b>{clientData?.clientName}</b></p>

            <div style={{display: "flex", justifyContent: "space-between"}}>
                <div>
                    <h1 style={{fontSize: "24px"}}>Контактна інформація: </h1>

                    <div>
                        <p><MessageOutlined style={{fontSize: "24px", margin: "0 10px 0 0"}} /><a target="_blank" style={{fontWeight: "bold"}} href={`https://t.me/${clientData?.telephoneNumber}`}>Telegram contact</a></p>
                        <p><MessageOutlined style={{fontSize: "24px", margin: "0 10px 0 0"}} /><a target="_blank" style={{fontWeight: "bold"}} href={`viber://chat/?number=%2B${clientData?.telephoneNumber}`}>Viber contact</a></p>
                        <p><PhoneOutlined style={{fontSize: "24px", margin: "0 10px 0 0"}}/>Номер телефону: <b>{clientData?.telephoneNumber}</b></p>
                        <p><MailOutlined style={{fontSize: "24px", margin: "0 10px 0 0"}}/>Електронна пошта: <b>{clientData?.email || "Інформація відсутня"}</b></p>
                    </div>
                </div>

                <div>
                    <h1 style={{fontSize: "24px"}}>Додаткова інформація: </h1>

                    <div>
                        <p><GiftOutlined style={{fontSize: "24px", margin: "0 10px 0 0"}} />День народження: <b>{clientData?.birthday || "Інформація відсутня"}</b></p>
                        <p><InfoCircleOutlined style={{fontSize: "24px", margin: "0 10px 0 0"}} />Додаткова інформація: <b>{clientData?.additionalInfo || "Інформація відсутня"}</b></p>
                    </div>
                </div>
            </div>

            <Divider style={{border: "2px solid #fa8c16"}}/>

            <h1 style={{textAlign: "center", fontSize: "24px"}}>{userPassport.length > 0 ? `Паспортні дані ${clientData?.clientName}` : "Паспортні дані відсутні"}</h1>


            {userPassport.length &&
                <>
                    <div style={{display: "flex", justifyContent: "space-between", margin: "10px 0 10px 0"}}>
                        <div>
                            <p style={{fontSize: "16px"}}>First name: <b>{userPassport[0]?.firstName}</b></p>
                            <p style={{fontSize: "16px"}}>Last name: <b>{userPassport[0]?.lastName}</b></p>
                            <p style={{fontSize: "16px"}}>День народження: <b>{userPassport[0]?.birthDate}</b></p>
                            <p style={{fontSize: "16px"}}>Гендер: <b>{userPassport[0]?.gender}</b></p>
                        </div>
                        <div>
                            <p style={{fontSize: "16px"}}>Серія номер паспорта: <b>{userPassport[0]?.passportNumber}</b></p>
                            <p style={{fontSize: "16px"}}>Виготовлений: <b>{userPassport[0]?.startDate}</b></p>
                            <p style={{fontSize: "16px"}}>Дійсний до: <b>{userPassport[0]?.expiredDate}</b></p>
                        </div>
                    </div>
                    <p style={{fontSize: "16px"}}>Додаткова інформація: {userPassport[0]?.addtionalData?.length > 0 ? userPassport[0]?.addtionalData : "Додаткова інформація відсутня"}</p>
                </>
            }

            <Divider style={{border: "2px solid #f5222d"}}/>

            <h1 style={{color: "#ff4d4f"}}>Загальна сума замовлень становить: {generalProfit}</h1>
            <h1>Кількість замовлень: {clientData?.orderData?.length}</h1>
            <h1>Історія замовлень цього клієнта</h1>

            <Table
                pagination={false}
                bordered
                columns={generalInfoOrderDataColumn()}
                style={{width: "100%"}}
                dataSource={clientData?.orderData}
            />
        </>
    );
};

export default ClientInfo;