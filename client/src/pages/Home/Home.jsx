import React, {useRef, useState} from 'react';
import {Alert, Button, Divider, Form, Input} from "antd";
import TextArea from "antd/es/input/TextArea";
import axios from "axios";
import {TG_BOT_CHAT_ID, TG_BOT_URL_API} from "../../api";

const Home = () => {
    const form = useRef();

    const [topic, setTopic] = useState("");
    const [description, setDescription] = useState("");
    const [message, setMessage] = useState("");

    const handleTopicChange = e => setTopic(e.target.value);
    const handleDescriptionChange = e => setDescription(e.target.value);

    let chatMessage = `<b>Уведомление с сайта STAR AVIA (мама CRM)</b>\n`;

    const handleFormFinish = () => {
        chatMessage += `<i>Тема: ${topic}</i>\n`;
        chatMessage += `${description}`;

        axios.post(TG_BOT_URL_API, {
            chat_id:TG_BOT_CHAT_ID,
            parse_mode: "html",
            text: chatMessage,
        }).then(() => setMessage("success")
        ).catch(() => setMessage("failed"));

        form.current.resetFields();
    }

    return (
        <div>
            <h1>Що можна зробити в цій програмкі: </h1>

            <Divider style={{border: "2px solid black"}}/>

            <h2>Клієнти</h2>

            <p>- Переглянути всіх клієнтів (шукати / видаляти)</p>
            <p>- Подивитися детальну інформацію про клієнта</p>
            <p>- Додати клієнта + паспорт</p>

            <Divider style={{border: "2px solid black"}}/>

            <h2>Замовлення</h2>
            <p>- Переглянути всі замолвення (шукати / видаляти)</p>
            <p>- Переглянути детальне інфо про замовлення</p>
            <p>- Додати замовення</p>
            <p>- Додавати та видаляти інфо про <b>ТИПИ ЗАМОЛВЕНЬ</b> та <b>ТУР ОПЕРАТОРІВ</b></p>

            <Divider style={{border: "2px solid black"}}/>

            <h2>Статистика та фінанси</h2>
            <p>- Додавати / Видаляти картки</p>
            <p>- В детальній інформації про (клієнта, тур оператора, типа замовлення) можна переглянути <b>міні</b> статискитику </p>

            <Divider style={{border: "2px solid red"}}/>

            <h1>Фідбек / Побажання</h1>
            <Form
                onFinish={handleFormFinish}
                ref={form}
            >
                <Form.Item
                    label={"Тема / Ідея"}
                    rules={[{
                        required: true,
                        message: "Обов'язкове поле"
                    }]}
                    name={"topic"}
                >
                    <Input
                        style={{width: "100%"}}
                        value={topic}
                        onChange={handleTopicChange}
                    />
                </Form.Item>
                <Form.Item
                    label={"Опис реалізації"}
                    rules={[{
                        required: true,
                        message: "Обов'язкове поле"
                    }]}
                    name={"description"}
                >
                    <TextArea
                        value={description}
                        onChange={handleDescriptionChange}
                    />
                </Form.Item>
                <Button htmlType="submit" type={"primary"}>Відправити</Button>

                {message === "success" ?
                        <Alert style={{margin: "15px 0 0 0"}} message="Success" description="Повідомлення успішно відправлено" type="success" showIcon /> :
                        <Alert style={{margin: "15px 0 0 0", display: message.length === 0 ? "none" : "block"}} message="Error" type="error" description="Щось пішло не так..." showIcon />
                }
            </Form>
        </div>
    );
};

export default Home;