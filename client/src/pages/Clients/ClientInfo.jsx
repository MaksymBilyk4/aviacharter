import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {currentClientData, passportSelector} from "../../redux/selector/clientSelector";
import {setCurrentClientInfoOptionalById} from "../../redux/action/client";
import {Link, useParams} from "react-router-dom";
import {PATH} from "../../routes/PATH";

const ClientInfo = () => {
    let clientData = useSelector(currentClientData);

    const userPassport = useSelector(passportSelector)?.filter(item => item.clientId === clientData?.id);
    const date = new Date();
    const currentDateString = `${date.getDate()}.${date.getMonth() + 1}`;
    const dispatch = useDispatch();
    const {id} = useParams();

    if (!clientData) {
        dispatch(setCurrentClientInfoOptionalById(id));
    }


    return (
        <div>
            <div>Повернутися до вкладки <Link to={PATH.CLIENTS.ROOT}>УСІ КЛІЄНТИ</Link></div>
            <h1 style={{fontWeight: "bold", fontSize: "54px"}}>{clientData?.clientName}</h1>
            <p style={{fontSize: "24px"}}>Дата народження: <b>{clientData?.birthday || "Інформація відсутня"}</b> {currentDateString === clientData?.birthday?.slice(0,5) && <b> - У клієнта день народження!!!</b>}</p>
            <p style={{fontSize: "24px"}}>Номер телефону: <b>{clientData?.telephoneNumber}</b></p>
            <div>
                <p style={{fontSize: "22px"}}><a href={`https://t.me/${clientData?.telephoneNumber}`}>Telegram contact</a></p>
                <p style={{fontSize: "22px"}}><a href={`viber://chat/?number=%2B${clientData?.telephoneNumber}`}>Viber contact</a></p>
            </div>
            <p style={{fontSize: "24px"}}>Електронна пошта: <b>{clientData?.email || "Інформація відсутня"}</b></p>
            <p style={{fontSize: "24px"}}>Додаткова інформація: <b>{clientData?.additionalInfo || "Інформація відсутня"}</b></p>

            <h1 style={{textAlign: "center", fontSize: "20px", margin: "10px 0"}}>{userPassport.length > 0 ? "Пспортні дані" : "Паспорті дані відсутні"}</h1>
            {userPassport.length &&

                <>
                    <p>First name: {userPassport[0]?.firstName}</p>
                    <p>Last name: {userPassport[0]?.lastName}</p>
                    <p>День народження: {userPassport[0]?.birthDate}</p>
                    <p>Гендер: {userPassport[0]?.gender}</p>
                    <p>Серія номер паспорта: {userPassport[0]?.passportNumber}</p>
                    <p>Виготовлений: {userPassport[0]?.startDate}</p>
                    <p>Дійсний до: {userPassport[0]?.expiredDate}</p>
                    <p>Додаткова інформація: {userPassport[0]?.addtionalData?.length > 0 ? userPassport[0]?.addtionalData : "Додаткова інформація відсутня"}</p>
                </>
            }


        </div>
    );
};

export default ClientInfo;