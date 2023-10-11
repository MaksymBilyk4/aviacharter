import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {paymentSelector} from "../../redux/selector/paymentSelector";
import {Button, Card, Modal} from "antd";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import {deletePaymentById} from "../../redux/action/payment";
import PaymentsAdmin from "./PaymentsAdmin";

const Payments = () => {

    const payments = useSelector(paymentSelector);
    const dispatch = useDispatch();

    const [isOpen, setOpen] = useState(false);
    const [entity, setEntity] = useState({});

    const handleModalSubmit = () => {
        setOpen(false);
    }

    const handleModalCancel = () => {
        setOpen(false);
        setEntity({});
    }

    const showModal = () => setOpen(true);


    return (
        <>
            {
                payments.length > 0 ?
                    <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gridGap: "20px"}}>
                        {payments?.map(item =>
                            <Card
                                key={item?.id}
                                title={
                                    <p>{item.cardNumber} - {item.bankName}</p>
                                }
                                bordered={true}
                                actions={[
                                    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                                        <Button danger type={"primary"}
                                                onClick={() => dispatch(deletePaymentById(item.id))}
                                                style={{width: "90%"}}
                                                icon={<DeleteOutlined
                                                    style={{color: "white", fontWeight: "bold", fontSize: "22px"}}/>}
                                        />

                                        <Button type={"primary"}
                                                onClick={() => {
                                                    setEntity(item);
                                                    showModal();
                                                }}
                                                style={{width: "90%", marginTop: "10px"}}
                                                icon={<EditOutlined
                                                    style={{color: "white", fontWeight: "bold", fontSize: "22px"}}/>}
                                        />
                                    </div>
                                ]}
                            >
                                <div style={{display: "grid", gridTemplateColumns: "repeat(2, 50%)", gridGap: "30px"}}>
                                    <div>Expired date: <p style={{fontWeight: "bold"}}>{item.expiredDate}</p></div>
                                    <div>CVV: <p style={{fontWeight: "bold"}}>{item.cvv}</p></div>
                                </div>

                                <div style={{fontWeight: "bold"}}>Власник: {item.cardOwner}</div>
                                <div style={{fontWeight: "bold"}}>Баланс: {item.balance}</div>
                                <p>Додаткова
                                    інформація: {item.cardInfo.length > 0 ? item.cardInfo : "Додаткова інформація відсутня"}</p>
                            </Card>)}
                    </div> : <h1 style={{textAlign: "center", fontSize: "22px"}}>Немає жодної інформації</h1>
            }

            <Modal
                title={`Зміна картки - ${entity.cardNumber}`}
                open={isOpen}
                cancelButtonProps={{type: "primary", danger: true}}
                okButtonProps={{style: {display: "none"}}}
                onOk={handleModalSubmit}
                onCancel={handleModalCancel}
                width={"70%"}
            >
                <div style={{padding: "25px 0 0 0"}}>
                    <PaymentsAdmin inputsData={entity} isRefactoredInputs={true}/>
                </div>
            </Modal>
        </>

    );
};

export default Payments;