import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {clientSelector} from "../../redux/selector/clientSelector";
import {Button, Card} from "antd";
import {useNavigate} from "react-router-dom";
import {PATH} from "../../routes/PATH";
import {deleteClientByIdAction, setCurrentClientInfo} from "../../redux/action/client";
import {DeleteOutlined} from "@ant-design/icons";

const Clients = () => {

    const navigate = useNavigate();
    const clients = useSelector(clientSelector);
    const dispatch = useDispatch();

    return (
        <>
            {clients?.length === 0 && <h1 style={{textAlign: "center", fontSize: "20px", marginTop: "20px"}}>На разі немає жодної інформації про клієнтів</h1>}

            <div style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: "15px"}}>
                {clients?.map(item =>
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
                        <p style={{fontSize: "16px", fontWeight: 400}}>Birthday: {item?.birthday}</p>
                    </Card>
                )}
            </div>
        </>
    );
};

export default Clients;