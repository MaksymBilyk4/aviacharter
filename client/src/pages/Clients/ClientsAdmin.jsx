import React, {useRef, useState} from 'react';
import {Button, DatePicker, Form, Input, message} from "antd";
import TextArea from "antd/es/input/TextArea";
import {parseDate} from "../../utils/parseDate";
import {useDispatch} from "react-redux";
import {createClientAction} from "../../redux/action/client";

const ClientsAdmin = () => {

    const form = useRef();
    const [messageApi, contextHolder] = message.useMessage();

    const dispatch = useDispatch();

    const success = () => {
        messageApi.open({
            type: 'success',
            content: 'Клієнта успіщно створено',
        });
    };


    const [name, setName] = useState("");
    const [telephone, setTelephone] = useState("");
    const [email, setEmail] = useState("");
    const [birthday, setBirthday] = useState("");
    const [info, setInfo] = useState("");

    const onFinish = () => {
        dispatch(createClientAction({
            clientName: name,
            telephoneNumber: telephone,
            email: email,
            birthday: parseDate(birthday) || "",
            additionalInfo: info,
        }));

        success();

        form.current.resetFields();
    }

    const onNameChange = e => setName(e.target.value);
    const onTelephoneChange = e => setTelephone(e.target.value);
    const onEmailChange = e => setEmail(e.target.value);
    const onBirthdayChange = e => setBirthday(e?.$d || "");
    const onInfoChange = e => setInfo(e.target.value);

    return (
        <>
            <h1 style={{textAlign: "center", fontSize: "24x", margin: "0 0 20px 0"}}>Додати клієнта</h1>

            {contextHolder}
            <Form
                ref={form}
                onFinish={onFinish}
            >
                <Form.Item
                    label={"Ім'я клієнта"}
                    rules={[{
                        required: true,
                        message: "Введіть ім'я клієнта"
                    }]}
                    name={"name"}
                >
                    <Input
                        onChange={onNameChange}
                        value={name}
                        size={"large"}
                        placeholder={"Tetiana"}
                    />
                </Form.Item>

                <Form.Item
                    name={"telephone"}
                    label={"Номер телефону (перевірка валідності відключена)"}
                    rules={[{
                        required: true,
                        message: "Введіть номер телефону клієнта"
                    }]}
                >
                    <Input
                        addonBefore={"+"}
                        onChange={onTelephoneChange}
                        placeholder={"00 000 000 000"}
                        value={telephone}
                    />
                </Form.Item>

                <Form.Item
                    label={"Email (не обов'язково)"}
                    name={"email"}
                >
                    <Input
                        onChange={onEmailChange}
                        placeholder={"example@gmail.com"}
                        value={email}
                    />
                </Form.Item>

                <Form.Item
                    label={"Додаткова інформація (не обов'язково)"}
                    name={"info"}
                >
                    <TextArea
                        onChange={onInfoChange}
                        value={info}
                        placeholder={"bla bla bla"}
                    />
                </Form.Item>

                <Form.Item
                    label={"Оберіть дату народження клієнта (не обов'язково)"}
                    name={"birthday"}
                >
                    <DatePicker
                        format={"DD.MM.YYYY"}
                        onChange={onBirthdayChange}
                        value={birthday}
                        placeholder={"01.01.2023"}
                    />
                </Form.Item>

                <Button htmlType={'submit'} type={"primary"}>Додати</Button>
            </Form>
        </>
    );
};

export default ClientsAdmin;