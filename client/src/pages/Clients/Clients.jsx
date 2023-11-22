import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {clientSelector} from "../../redux/selector/clientSelector";
import {Button, Card, Input, Table} from "antd";
import {useNavigate} from "react-router-dom";
import {PATH} from "../../routes/PATH";
import {deleteClientByIdAction, setCurrentClientInfo} from "../../redux/action/client";
import {DeleteOutlined} from "@ant-design/icons";
import debounce from "lodash.debounce";
import {clientDataColumn} from "../../utils/tables/clientDataColumn";

const Clients = () => {

    const navigate = useNavigate();
    let clients = useSelector(clientSelector);
    const dispatch = useDispatch();

    const [tableView, setTableView] = useState(true);

    const handleTableViewOn = () => setTableView(true);
    const handleTableViewOff = () => setTableView(false);

    const [filtered, setFiltered] = useState(useSelector(clientSelector));
    const [query, setQuery] = useState("");

    const filterClientsChange = (e) => {
        setFiltered(clients.filter(item =>
            item?.clientName?.toLowerCase()?.includes(e.target.value.toLowerCase()) ||
            item?.telephoneNumber?.includes(e.target.value) ||
            item?.email?.toLowerCase()?.includes(e.target.value?.toLowerCase())
        ));
        setQuery(e.target.value);
    };

    useEffect(() => setFiltered(clients), [clients]);

    return (
        <>
            <h1 style={{textAlign: "center", fontSize: "26px"}}>Клієнти</h1>

            <div style={{margin: "15px 0"}}>
                <Button style={{margin: "0 15px 0 0"}} onClick={handleTableViewOn} type={tableView ? "primary" : "default"}>Табличний вид</Button>
                <Button onClick={handleTableViewOff} type={tableView ? "default" : "primary"}>Карточний вид</Button>
            </div>


            <div style={{margin: "20px 0"}}>
                <h1>Пошук</h1>
                <Input
                    placeholder="Шукай клінєтів за ім'ям, номером телефону або e-mail"
                    onChange={debounce(filterClientsChange, 300)}
                    size={"large"}
                    style={{marginBottom: "20px"}}
                />
            </div>

            {clients?.length === 0 && <h1 style={{textAlign: "center", fontSize: "20px", marginTop: "20px"}}>На разі немає жодної інформації про клієнтів</h1>}

            {filtered?.length === 0 && clients.length > 0 ? <h1 style={{textAlign: "cneter", fontSize: "20px", margin: "0 0 10px 0"}}>Клієнта за запитом {query} не знайдено!</h1> : ""}

            <Table
                pagination={false}
                bordered
                style={{width: "100%", display: tableView ? "block" : "none"}}
                columns={clientDataColumn()}
                dataSource={filtered || clients}
            />
            <div style={{display: tableView ? "none" : "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: "15px"}}>
                {filtered?.length > 0 && filtered?.map(item => <Card
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
                        </Card>)}
            </div>
        </>
    );
};

export default Clients;