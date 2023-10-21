import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {clientSelector} from "../../redux/selector/clientSelector";
import {Button, Card, Input} from "antd";
import {useNavigate} from "react-router-dom";
import {PATH} from "../../routes/PATH";
import {deleteClientByIdAction, setCurrentClientInfo} from "../../redux/action/client";
import {DeleteOutlined} from "@ant-design/icons";
import debounce from "lodash.debounce";

const Clients = () => {

    const navigate = useNavigate();
    let clients = useSelector(clientSelector);
    const dispatch = useDispatch();


    const [filtered, setFiltered] = useState(useSelector(clientSelector));
    const [query, setQuery] = useState("");

    const filterClientsChange = (e) => {
        setFiltered(clients.filter(item => item?.clientName?.includes(e.target.value) || item?.telephoneNumber?.includes(e.target.value)));
        setQuery(e.target.value);
    };

    useEffect(() => setFiltered(clients), [clients]);

    return (
        <>
            <Input
                placeholder="Шукай клінєтів за ім'ям або номером телефону"
                onChange={debounce(filterClientsChange, 300)}
                size={"large"}
                style={{marginBottom: "20px"}}
            />

            {clients?.length === 0 && <h1 style={{textAlign: "center", fontSize: "20px", marginTop: "20px"}}>На разі немає жодної інформації про клієнтів</h1>}

            {filtered?.length === 0 && clients.length > 0 ? <h1 style={{textAlign: "cneter", fontSize: "20px"}}>Клієнта за запитом {query} не знайдено!</h1> : ""}

            <div style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: "15px"}}>
                {filtered?.length > 0 && filtered?.map(item =>
                    <Card
                        key={item.id}
                        bordered={true}
                        title={<p>{item?.clientName}</p>}
                        actions={[
                            <>
                                <Button
                                    type={"primary"}
                                    onClick={() => {
                                        navigate(PATH.CLIENTS.info(item?.id));
                                        dispatch(setCurrentClientInfo(item));
                                    }}
                                    style={{marginRight: "15px"}}
                                >Переглянути повну інформацію</Button>
                                <Button
                                    icon={<DeleteOutlined />}
                                    type={"primary"}
                                    danger
                                    onClick={() => dispatch(deleteClientByIdAction(item?.id))}
                                />
                            </>

                        ]}
                    >
                        <p style={{fontSize: "16px", fontWeight: 400}}>Telephone number: {item?.telephoneNumber}</p>
                        <p style={{fontSize: "16px", fontWeight: 400}}>Birthday: {item?.birthday || "Інформація відсутня"}</p>
                    </Card>
                )}
            </div>
        </>
    );
};

export default Clients;