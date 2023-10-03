import React, {useState} from 'react';
import {Button, Form, Input, InputNumber, Select} from "antd";
import {banks} from "./BanksConstants";
import {useDispatch} from "react-redux";
import {createPayment} from "../../redux/action/payment";

const PaymentsAdmin = () => {
    const [cardNumber, setNumber] = useState("");
    const [cardOwner, setOwner] = useState("");
    const [expiredDate, setDate] = useState("");
    const [cvv, setCVV] = useState("");
    const [bank, setBank] = useState(Object.values(banks)[0]);
    const [balance, setBalance] = useState(0);
    const [cardInfo, setInfo] = useState("");

    const onNumberChange = (e) => setNumber(e.target.value);
    const onDateChange = (e) => setDate(e.target.value);
    const onCVVChange = (e) => setCVV(e.target.value);
    const onBankChange = (value) => setBank(value);
    const onOwnerChange = (e) => setOwner(e.target.value);
    const onBalanceChange = (e) => setBalance(e);
    const onInfoChange = (e) => setInfo(e.target.value);

    const dispatch = useDispatch();

    // TODO
    const onFinish = async () => {
        dispatch(createPayment({
            cardNumber,
            cardOwner,
            bankName: bank,
            expiredDate,
            balance,
            cardInfo,
            cvv,
        }));
    }

    return (
        <>
            <Form onFinish={onFinish}>
                <Form.Item
                    label={"Номер картки"}
                    rules={[{
                        required: true,
                        message: "Введіть номер картки!"
                    }]}
                    name={"card_number"}
                >
                    <Input
                        bordered
                        onChange={onNumberChange}
                        value={cardNumber}
                        size={"large"}
                        placeholder={"0000 0000 0000 0000"}
                    />
                </Form.Item>

                <div style={{display: "grid", gridTemplateColumns: "repeat(2, 50%)"}}>
                    <Form.Item
                        label={"Date Expired"}
                        rules={[{
                            required: true,
                            message: "Введіть час спливу роботи картки!"
                        }]}
                        name={"expired_date"}
                    >
                        <Input
                            bordered
                            onChange={onDateChange}
                            value={expiredDate}
                            placeholder={"00/0000"}
                            style={{maxWidth: "30%"}}
                        />
                    </Form.Item>

                    <Form.Item
                        label={"CVV"}
                        rules={[{
                            required: true,
                            message: "Введіть cvv код!"
                        }]}
                        name={"cvv"}
                    >
                        <Input
                            bordered
                            onChange={onCVVChange}
                            value={cvv}
                            placeholder={"***"}
                            style={{maxWidth: "30%"}}
                        />
                    </Form.Item>
                </div>

                <Form.Item
                    label={"Оберіть банк"}
                    rules={[{
                        required: true,
                        message: "Оберіть банк!"
                    }]}
                    name={"bank"}
                    style={{maxWidth: "50%"}}
                >
                    <Select
                        onChange={onBankChange}
                        options={Object.values(banks).map(item => {
                            return {value: item, label: item.toUpperCase()}
                        })}
                    />

                </Form.Item>

                <Form.Item
                    label={"Імя власника картки"}
                    rules={[{
                        required: true,
                        message: "Введіть ім'я власника картки!"
                    }]}
                    name={"card_owner"}
                >
                    <Input
                        onChange={onOwnerChange}
                        value={cardOwner}
                        bordered
                    />
                </Form.Item>

                <Form.Item
                    label={"Баланс"}
                    rules={[{
                        required: true,
                        message: "Введіть баланс картки"
                    }]}
                    name={"balance"}
                >
                    <InputNumber
                        value={balance}
                        onChange={onBalanceChange}
                        bordered
                    />
                </Form.Item>

                <Form.Item
                    label={"Коротка інформація (Optional)"}
                    name={"short_info"}
                >
                    <InputNumber
                        value={cardInfo}
                        onChange={onInfoChange}
                        bordered
                    />
                </Form.Item>

                <Button htmlType={"submit"}
                        style={{marginTop: "10px"}}
                        type={"primary"}
                >
                    Зберегти
                </Button>
            </Form>
        </>

    );
};

export default PaymentsAdmin;