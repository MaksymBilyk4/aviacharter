import React, {useRef, useState} from 'react';
import {Button, DatePicker, Form, Input, InputNumber, message, Select} from "antd";
import TextArea from "antd/es/input/TextArea";
import {useDispatch, useSelector} from "react-redux";
import {orderTypesSelector, tourOperatorsSelector} from "../../redux/selector/orderSelector";
import {clientSelector} from "../../redux/selector/clientSelector";
import {createOrderAction} from "../../redux/action/order";
import {parseDate} from "../../utils/parseDate";

const OrdersAdmin = () => {

    const dispatch = useDispatch();

    const formRef = useRef();

    const tourOperators = useSelector(tourOperatorsSelector)?.map(item => {
        return {value: item?.id, label: item?.operatorName}
    });
    const clients = useSelector(clientSelector)?.map(item => {
        return {value: item?.id, label: item?.clientName}
    });
    const orderTypes = useSelector(orderTypesSelector)?.map(item => {
        return {value: item?.id, label: item?.orderType}
    });

    const [messageApi, contextHolder] = message.useMessage();
    const [orderDate, setOrderDate] = useState("");
    const [departureDate, setDepartureDate] = useState("");
    const [netto, setNetto] = useState(0);
    const [brutto, setBrutto] = useState(0);
    const [profit, setProfit] = useState(0);
    const [showProfit, setShowProfit] = useState(false);
    const [orderNumber, setOrderNumber] = useState("");
    const [comment, setComment] = useState("");
    const [clientId, setClientId] = useState(0);
    const [operatorId, setOperatorId] = useState(0);
    const [orderTypesState, setOrderTypes] = useState([]);

    const handleOrderDate = e => setOrderDate(e);
    const handleDepartureDate = e => setDepartureDate(e);
    const handleNetto = e => setNetto(e);
    const handleBrutto = e => setBrutto(e);
    const handleOrderNumber = e => setOrderNumber(e.target.value);
    const handleComment = e => setComment(e.target.value);
    const handleClientId = e => setClientId(e);
    const handleOperatorId = e => setOperatorId(e);
    const handleOrderTypes = (e, arr) => setOrderTypes(arr.map(item => {return {id: item?.value, orderType: item?.label}}));
    const success = () => {
        messageApi.open({
            type: 'success',
            content: 'Клієнта успіщно створено',
        });
    };

    const handleOnFinish = () => {
        dispatch(createOrderAction({
            bruttoPrice: brutto,
            nettoPrice: netto,
            profit: profit,
            orderDate: parseDate(orderDate?.$d),
            departureDate: parseDate(departureDate?.$d),
            orderNumber: orderNumber,
            comment: comment,
            clientId: clientId,
            orderType: orderTypesState,
            operatorId: operatorId
        }));

        success();

        formRef.current.resetFields();
    }

    return (
        <>
            {contextHolder}
            <Form
                onFinish={handleOnFinish}
                ref={formRef}
            >

                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <Form.Item
                        label={"Дата замовлення"}
                        rules={[{
                            required: true,
                            message: "Введіть дату замовлення"
                        }]}
                        name={"orderDate"}
                    >
                        <DatePicker
                            format={"DD.MM.YYYY"}
                            onChange={handleOrderDate}
                            value={orderDate}
                            placeholder={"01.01.2023"}
                        />
                    </Form.Item>

                    <Form.Item
                        label={"Дата відправлення"}
                        rules={[{
                            required: true,
                            message: "Введіть дату відправлення"
                        }]}
                        name={"departureDate"}
                    >
                        <DatePicker
                            format={"DD.MM.YYYY"}
                            onChange={handleDepartureDate}
                            value={departureDate}
                            placeholder={"01.01.2023"}
                        />
                    </Form.Item>
                </div>

                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <Form.Item
                        label={"Netto"}
                        rules={[{
                            required: true,
                            message: "Введіть ціну нето"
                        }]}
                        name={"nettoPrice"}
                    >
                        <InputNumber
                            onChange={handleNetto}
                            placeholder={"100"}
                            value={netto}
                        />
                    </Form.Item>

                    <Form.Item
                        label={"Brutto"}
                        rules={[{
                            required: true,
                            message: "Введіть ціну нето"
                        }]}
                        name={"bruttoPrice"}
                    >
                        <InputNumber
                            onChange={handleBrutto}
                            placeholder={"100"}
                            value={brutto}
                        />
                    </Form.Item>

                    <Button
                        disabled={netto === 0 && brutto === 0}
                        onClick={() => {
                            setShowProfit(true);
                            setProfit(brutto - netto);
                        }}
                    >Порахувати чистий дохід</Button>
                    {showProfit && <p><b>Чисті: {profit}</b></p>}
                </div>

                <Form.Item
                    label={"Номер замовлення"}
                    rules={[{
                        required: true,
                        message: "Введіть номер замолвення"
                    }]}
                    name={"orderNumber"}
                >
                    <Input
                        value={orderNumber}
                        onChange={handleOrderNumber}
                        placeholder={"CX751264"}
                        width={"100%"}
                    />
                </Form.Item>

                <Form.Item
                    rules={[{
                        required: false
                    }]}
                    label={"Коментар (опціонально)"}
                    name={"comment"}
                >
                    <TextArea
                        bordered
                        onChange={handleComment}
                        value={comment}
                    />
                </Form.Item>

                <Form.Item
                    label={"Оберіть клієнта"}
                    rules={[{
                        required: true,
                        message: "Оберіть клієнта!!!"
                    }]}
                    name={"clientId"}
                >
                    <Select
                        showSearch
                        style={{width: 300}}
                        placeholder={"Search clients"}
                        filterOption={(input, option) => (option?.label ?? "").includes(input)}
                        filterSort={(optionA, optionB) => (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())}
                        options={clients}
                        onChange={handleClientId}
                    />
                </Form.Item>

                <Form.Item
                    rules={[{
                        required: true,
                        message: "Оберіть оператора!"
                    }]}
                    label={"Оператор"}
                    name={"operatorId"}
                >
                    <Select
                        showSearch
                        style={{width: 300}}
                        placeholder={"Search operators"}
                        filterOption={(input, option) => (option?.label ?? "").includes(input)}
                        filterSort={(optionA, optionB) => (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())}
                        options={tourOperators}
                        onChange={handleOperatorId}
                    />
                </Form.Item>

                <Form.Item
                    label={"Оберіть тип послуги"}
                    rules={[{
                        required: true,
                        message: "Оберіть тип послуги!!!!"
                    }]}
                    name={"orderType"}
                >
                    <Select
                        mode="multiple"
                        allowClear
                        style={{width: "100%"}}
                        placeholder={"Оберіть типи послуг"}
                        options={orderTypes}
                        filterOption={(input, option) => (option?.label ?? "").includes(input)}
                        onChange={handleOrderTypes}
                    />
                </Form.Item>

                <Button htmlType="submit">Створити замовлення</Button>
            </Form>
        </>
    );
};

export default OrdersAdmin;