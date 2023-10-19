import React, {useRef, useState} from 'react';
import {Button, Form, Input, InputNumber, Select, message} from "antd";
import {banks} from "./BanksConstants";
import {useDispatch} from "react-redux";
import {createPaymentAction} from "../../redux/action/payment";
import {PaymentInputsWrapper, usePaymentInputs} from "react-payment-inputs";
import images from "react-payment-inputs/images";

const {TextArea} = Input;

const PaymentsAdmin = () => {

    const {
        wrapperProps,
        getCardImageProps,
        getCardNumberProps,
        getExpiryDateProps,
        getCVCProps
    } = usePaymentInputs();

    const [cardNumber, setNumber] = useState("");
    const [cardOwner, setOwner] = useState("");
    const [expiredDate, setDate] = useState("");
    const [cvv, setCVV] = useState("");
    const [bank, setBank] = useState(Object.values(banks)[0]);
    const [balance, setBalance] = useState(0);
    const [cardInfo, setInfo] = useState("");
    const form = useRef();

    const onNumberChange = (e) => setNumber(e.target.value);
    const onDateChange = (e) => setDate(e.target.value);
    const onCVVChange = (e) => setCVV(e.target.value);
    const onBankChange = (value) => setBank(value);
    const onOwnerChange = (e) => setOwner(e.target.value);
    const onBalanceChange = (e) => setBalance(e);
    const onInfoChange = (e) => setInfo(e.target.value);

    const [messageApi, contextHolder] = message.useMessage();

    const dispatch = useDispatch();


    const onFinish = async () => {
        dispatch(createPaymentAction({
            cardNumber,
            cardOwner,
            bankName: bank,
            expiredDate,
            balance,
            cardInfo,
            cvv,
        }))

        messageApi.open({
            type: "success",
            content: "Спосіб оплати / Картку - успішно створено"
        });

        form.current.resetFields();
    }


    return (
        <>
            {contextHolder}
            <Form
                ref={form}
                onFinish={onFinish}
            >
                <Form.Item
                    label={"Введіть дані банківської картки"}
                    name={"private_card_info"}
                >
                    <PaymentInputsWrapper {...wrapperProps}>
                        <svg {...getCardImageProps({images})} />
                        <input {...getCardNumberProps({
                            onChange: onNumberChange,
                            value: cardNumber
                        })} />
                        <div></div>
                        <input onChange={onDateChange} {...getExpiryDateProps({
                            onChange: onDateChange,
                            value: expiredDate
                        })} />
                        <input onChange={onCVVChange} {...getCVCProps({
                            onChange: onCVVChange,
                            value: cvv
                        })} />
                    </PaymentInputsWrapper>
                </Form.Item>

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
                        onChange={(e) => {
                            onOwnerChange(e);
                        }}
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
                    <TextArea
                        value={cardInfo}
                        onChange={onInfoChange}
                        bordered
                        showCount
                        maxLength={100}
                        style={{maxWidth: "50%"}}
                    />
                </Form.Item>

                <Button htmlType={"submit"}
                        style={{marginTop: "10px"}}
                        type={"primary"}
                        disabled={wrapperProps.error !== undefined}
                >
                    Зберегти
                </Button>
            </Form>
        </>

    );
};

export default PaymentsAdmin;