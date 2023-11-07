import React, {useRef, useState} from 'react';
import {Button, Form, Input, message} from "antd";
import {useDispatch} from "react-redux";
import {createTourOperatorAction} from "../../redux/action/order";

const OperatorAdmin = () => {

    const dispatch = useDispatch();
    const form = useRef();
    const [operatorName, setOperatorName] = useState("");
    const [messageApi, contextHolder] = message.useMessage();

    const success = () => {
        messageApi.open({
            type: 'success',
            content: 'Тип замовлення | Тип послуги успішно створено!',
        });
    };

    const handleOperatorNameChange = e => setOperatorName(e.target.value);

    const onFinish = () => {
        dispatch(createTourOperatorAction({
            operatorName: operatorName
        }));

        success();

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
                    name={"operatorName"}
                    label={"Оператор"}
                    rules={[{
                        required: true,
                        message: "Впишіть назву оператора"
                    }]}
                >
                    <Input
                        value={operatorName}
                        onChange={handleOperatorNameChange}
                        bordered
                        size={"large"}
                        style={{width: "100%"}}
                        placeholder={"Anex Tour"}
                    />
                </Form.Item>

                <Button htmlType="submit">Створити</Button>
            </Form>
        </>
    );
};

export default OperatorAdmin;