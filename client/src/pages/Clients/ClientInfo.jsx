import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {currentClientData} from "../../redux/selector/clientSelector";
import {setCurrentClientInfoOptionalById} from "../../redux/action/client";
import {useParams} from "react-router-dom";

const ClientInfo = () => {
    let clientData = useSelector(currentClientData);

    const date = new Date();
    const currentDateString = `${date.getDate()}.${date.getMonth() + 1}`;
    const dispatch = useDispatch();
    const {id} = useParams();

    if (!clientData) {
        dispatch(setCurrentClientInfoOptionalById(id));
    }


    return (
        <div>
            <h1 style={{fontWeight: "bold", fontSize: "54px"}}>{clientData?.clientName}</h1>
            <p style={{fontSize: "24px"}}>Дата народження: <b>{clientData?.birthday}</b> {currentDateString === clientData?.birthday?.slice(0,5) && <b> - У клієнта день народження!!!</b>}</p>
            <p style={{fontSize: "24px"}}>Номер телефону: <b>{clientData?.telephoneNumber}</b></p>
            <div>
                <p style={{fontSize: "22px"}}><a href={`https://t.me/${clientData?.telephoneNumber}`}>Telegram contact</a></p>
                <p style={{fontSize: "22px"}}><a href={`viber://chat/?number=%2B${clientData?.telephoneNumber}`}>Viber contact</a></p>
            </div>
            <p style={{fontSize: "24px"}}>Електронна пошта: <b>{clientData?.email}</b></p>
            <p style={{fontSize: "24px"}}>Додаткова інформація: <b>{clientData?.additionalInfo}</b></p>
        </div>
    );
};

export default ClientInfo;