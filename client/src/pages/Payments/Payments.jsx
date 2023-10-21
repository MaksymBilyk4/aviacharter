import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {paymentSelector} from "../../redux/selector/paymentSelector";
import {Button, Card, Input, Modal} from "antd";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import {deletePaymentByIdAction} from "../../redux/action/payment";
import PaymentsAdmin from "./PaymentsAdmin";
import debounce from "lodash.debounce";

const Payments = () => {

    const payments = useSelector(paymentSelector);
    const dispatch = useDispatch();

    const [isOpen, setOpen] = useState(false);
    const [entity, setEntity] = useState({});
    const [filtered, setFiltered] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
        setFiltered(payments);
    }, [payments])

    const handleModalSubmit = () => {
        setOpen(false);
    }

    const handleModalCancel = () => {
        setOpen(false);
        setEntity({});
    }

    const showModal = () => setOpen(true);

    const filterPaymentsChange = (e) => {
        setFiltered(payments?.filter
        (item =>
            item?.cardNumber?.includes(e.target.value) ||
            item?.cardOwner?.includes(e.target.value) ||
            item?.bankName?.includes(e.target.value.toUpperCase()))
        );
        setQuery(e.target.value);
    }


    return (
        <>

            <Input
                placeholder={"Шукай за: номером картки, власником, назвою банку (НА АНГЛІЙСЬКІЙ)"}
                onChange={debounce(filterPaymentsChange, 500)}
                size={"large"}
                style={{marginBottom: "20px"}}
            />

            {payments?.length === 0&& <h1 style={{textAlign: "center", fontSize: "20px", marginTop: "20px"}}>На разі немає жодного способу оплати</h1>}

            {filtered.length === 0 && payments?.length > 0 ? <h1 style={{fontSize: "20px"}}>Картки за даними {query} не знайдено</h1> : ""}

            {
                filtered?.length > 0 &&
                    <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gridGap: "20px"}}>
                        {filtered?.map(item =>
                            <Card
                                key={item?.id}
                                title={
                                    <p>{item.cardNumber} - {item.bankName}</p>
                                }
                                bordered={true}
                                actions={[
                                    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                                        <Button danger type={"primary"}
                                                onClick={() => dispatch(deletePaymentByIdAction(item.id))}
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
                    </div>
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