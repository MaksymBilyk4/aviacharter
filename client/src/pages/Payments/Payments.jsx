import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {paymentSelector} from "../../redux/selector/paymentSelector";
import {Button, Card, InputNumber} from "antd";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import {deletePaymentById, updateCardBalance} from "../../redux/action/payment";

const Payments = () => {

    const payments = useSelector(paymentSelector);
    const dispatch = useDispatch();

    const [isBalance, setToggleBalance] = useState(false);
    const [balance, setBalance] = useState(0);

    const onBalanceChange = (e) => setBalance(e);


    return (
        <>
            {
                payments.length > 0 ? payments?.map(item =>
                    <div style={{display: "grid", gridTemplateColumns: "repeat(3, 33%)", gridGap: "20px"}}>
                        <Card
                            title={
                                <p>{item.cardNumber} - {item.bankName}</p>
                            }
                            bordered={true}
                            actions={[
                                <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                                    <Button danger type={"primary"} onClick={() => dispatch(deletePaymentById(item.id))}
                                            style={{width: "90%"}}
                                            icon={<DeleteOutlined style={{color: "white", fontWeight: "bold", fontSize: "22px"}}/>}
                                    />

                                    <Button type={"primary"}
                                            style={{width: "90%", marginTop: "10px"}}
                                            icon={<EditOutlined style={{color: "white", fontWeight: "bold", fontSize: "22px"}}/>}
                                    />
                                </div>
                            ]}
                        >
                            <div style={{display: "grid", gridTemplateColumns: "repeat(2, 50%)", gridGap: "30px"}}>
                                <p>Expired date: <p style={{fontWeight: "bold"}}>{item.expiredDate}</p></p>
                                <p>CVV: <p style={{fontWeight: "bold"}}>{item.cvv}</p></p>
                            </div>

                            <p style={{fontWeight: "bold"}}>Власник: {item.cardOwner}</p>
                            <p style={{fontWeight: "bold"}}>Баланс:
                                {!isBalance
                                    ? <> {item.balance} <Button onClick={() => setToggleBalance(true)} type={"primary"} icon={<EditOutlined />}/> </>
                                    :  <>
                                        <InputNumber
                                            style={{marginLeft: "10px"}}
                                            value={balance}
                                            onChange={onBalanceChange}
                                            bordered
                                        />

                                        <Button
                                            style={{margin: "0 20px"}}
                                            type={"primary"}
                                            onClick={() => {
                                                dispatch(updateCardBalance({id: item.id, balance: balance}));
                                                setToggleBalance(false)}}
                                        >Зберегти</Button>

                                        <Button
                                            type={"primary"}
                                            danger
                                            onClick={() => setToggleBalance(false)}
                                        >Відміна</Button></>
                                }
                            </p>
                            <p>Додаткова
                                інформація: {item.cardInfo.length > 0 ? item.cardInfo : "Додаткова інформація відсутня"}</p>
                        </Card>
                    </div>
                ) : <h1 style={{textAlign: "center", fontSize: "22px"}}>Немає жодної інформації</h1>
            }
        </>

    );
};

export default Payments;