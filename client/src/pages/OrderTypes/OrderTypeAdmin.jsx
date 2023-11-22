import React, {useRef, useState} from 'react';
import {Button, Form, Input, message} from "antd";
import {useDispatch} from "react-redux";
import {createOrderTypeAction} from "../../redux/action/order";

const OrderTypeAdmin = () => {

    const form = useRef();
    const dispatch = useDispatch();
    const [messageApi, contextHolder] = message.useMessage();

    const [orderType, setOrderType] = useState("");
    const handleOrderTypeChange = e => setOrderType(e.target.value);

    const success = () => {
        messageApi.open({
            type: 'success',
            content: 'Тип замовлення | Тип послуги успішно створено!',
        });
    };

    const onFinish = () => {
        dispatch(createOrderTypeAction({
            orderType: orderType,
        }));

        success();

        form.current.resetFields();
    };

    return (
        <>
            <h1 style={{textAlign: "center", fontSize: "18px", margin: "5px 0 20px 0"}}>Додати тип змовлення</h1>

            {contextHolder}
            <Form
                ref={form}
                onFinish={onFinish}
            >
                <Form.Item
                    label={"Введіть назву послуги"}
                    rules={[{
                        required: true,
                        message: "Введіть назву послуги!"
                    }]}
                    name={"orderType"}
                >
                    <Input
                        bordered
                        value={orderType}
                        placeholder={"ТУР"}
                        onChange={handleOrderTypeChange}
                    />
                </Form.Item>

                <Button htmlType="submit" ghost type="primary">Додати</Button>
            </Form>
        </>
    );
};

export default OrderTypeAdmin;
