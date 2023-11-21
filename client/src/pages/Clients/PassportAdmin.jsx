import React, {useRef, useState} from 'react';
import {DatePicker, Form, Input, Select, Radio, Button, message} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {clientSelector} from "../../redux/selector/clientSelector";
import TextArea from "antd/es/input/TextArea";
import {createPassportAction} from "../../redux/action/passport";
import {parseDate} from "../../utils/parseDate";

const PassportAdmin = () => {

    const clients = useSelector(clientSelector).filter(item => item?.passportId < 1);

    const dispatch = useDispatch();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [birthday, setBirthday] = useState("");
    const [passportNumber, setPassportNumber] = useState("");
    const [gender, setGender] = useState("");
    const [startDate, setStartDate] = useState("");
    const [expiredDate, setExpiredDate] = useState("");
    const [additionalData, setAdditionalData] = useState("");
    const [clientId, setClientId] = useState(0);
    const [messageApi, contextHolder] = message.useMessage();
    const handleFirstNameChange = e => setFirstName(e.target.value);
    const handleLastNameChange = e => setLastName(e.target.value);
    const handleBirthdayChange = e => setBirthday(e?.$d || "");
    const handlePassportNumberChange = e => setPassportNumber(e.target.value);
    const handleGenderChange = e => setGender(e.target.value);
    const handleStartDateChange = e => setStartDate(e?.$d || "");
    const handleExpiredDateChange = e => setExpiredDate(e?.$d || "");
    const handleAdditionalDataChange = e => setAdditionalData(e.target.value);
    const handleClientId = val => setClientId(val);
    const handleFilterClientOptions = (input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

    const success = () => {
        messageApi.open({
            type: 'success',
            content: 'Паспорт успіщно створено',
        });
    };

    const onFinish = () => {
        dispatch(createPassportAction({
            firstName,
            lastName,
            birthDate: parseDate(birthday),
            passportNumber,
            gender,
            startDate: parseDate(startDate),
            expiredDate: parseDate(expiredDate),
            additionalData,
            clientId
        }));

        success();

        form.current.resetFields();
    }

    const form = useRef();

    return (
        <>
            {contextHolder}
            <h1 style={{textAlign: "center", margin: "10px 0 20px 0", fontSize: "20px"}}>Додайте паспорт клієнтові</h1>

            <Form
                ref={form}
                onFinish={onFinish}
            >
                <Form.Item
                    label={"Виберіть клієнта для створення паспорта"}
                    rules={[{
                        required: true,
                        message: "Оберіть клієнта!"
                    }]}
                    name={"clientId"}
                >
                    <Select
                        showSearch
                        placeholder={"Оберіть клієнта"}
                        optionFilterProp="children"
                        onChange={handleClientId}
                        filterOption={handleFilterClientOptions}
                        options={
                            clients?.map(item => {return {value: item?.id, label: item?.clientName}})
                        }
                        size={"large"}
                    />
                </Form.Item>

                <Form.Item
                    label={"First name (як в паспорті)"}
                    rules={[{
                        required: true,
                        message: "Введіть ім'я клієнта як у паспорті"
                    }]}
                    name={"firstName"}
                >
                    <Input
                        onChange={handleFirstNameChange}
                        placeholder={"Tetiana"}
                        value={firstName}
                        bordered
                    />
                </Form.Item>

                <Form.Item
                    label={"Last name (як в паспорті)"}
                    rules={[{
                        required: true,
                        message: "Введіть фамілію клієнта як в паспорті"
                    }]}
                    name={"lastName"}
                >
                    <Input
                        onChange={handleLastNameChange}
                        placeholder={"Bilyk"}
                        bordered
                        value={lastName}
                    />
                </Form.Item>

                <Form.Item
                    label={"Дата народженя"}
                    rules={[{
                        required: true,
                        message: "Введіть дату народження"
                    }]}
                    name={"birthday"}
                >
                    <DatePicker
                        format={"DD.MM.YYYY"}
                        onChange={handleBirthdayChange}
                        value={birthday}
                        placeholder={"01.01.2023"}
                    />
                </Form.Item>

                <Form.Item
                    label={"Серія та номер паспорта"}
                    rules={[{
                        required: true,
                        message: "Введіть номер паспорту"
                    }]}
                    name={"passportNumber"}
                >
                    <Input
                        value={passportNumber}
                        onChange={handlePassportNumberChange}
                        placeholder={"FF000000"}
                        bordered
                    />
                </Form.Item>

                <Form.Item
                    label={"Оберіть стать"}
                    rules={[{
                        required: true,
                        message: "Оберіть стать клієнта"
                    }]}
                    name={"gender"}
                >
                    <Radio.Group
                        onChange={handleGenderChange}
                        value={gender}
                    >
                        <Radio value={"FEMALE"}>FEMALE</Radio>
                        <Radio value={"MALE"}>MALE</Radio>
                    </Radio.Group>
                </Form.Item>

                <Form.Item
                    label={"Виготовлення паспорту"}
                    rules={[{
                        required: true,
                        message: "Оберіть дату коли був вироблений паспорт"
                    }]}
                    name={"startDate"}
                >
                    <DatePicker
                        onChange={handleStartDateChange}
                        value={startDate}
                        format={"DD.MM.YYYY"}
                        placeholder={"20.03.2018"}
                    />
                </Form.Item>

                <Form.Item
                    label={"Дійсний до"}
                    rules={[{
                        required: true,
                        message: "Оберіть дату до коли дійсний паспорт"
                    }]}
                    name={"expiredDate"}
                >
                    <DatePicker
                        onChange={handleExpiredDateChange}
                        value={expiredDate}
                        format={"DD.MM.YYYY"}
                        placeholdeer={"20.03.2028"}
                    />
                </Form.Item>

                <Form.Item
                    label={"Додаткова інформація (не обов'язково)"}
                    name={"additionalInfo"}
                >
                    <TextArea
                        bordered
                        onChange={handleAdditionalDataChange}
                        value={additionalData}
                        placeholder={"Bla bla bla...."}
                    />
                </Form.Item>

                <Button htmlType={"submit"} type={"primary"}>Додати паспорт</Button>

            </Form>
        </>
    );
};

export default PassportAdmin;