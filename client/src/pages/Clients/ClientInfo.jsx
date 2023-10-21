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


    if (Object.keys(clientData).length === 0) {
        dispatch(setCurrentClientInfoOptionalById(id));
    }


    return (
        <div style={{display: "grid", justifyContent: "center", gridTemplateColumns: "60% 40%"}}>

            <div>
                <div>Повернутися до вкладки <Link to={PATH.CLIENTS.ROOT}>УСІ КЛІЄНТИ</Link></div>
                <h1 style={{fontWeight: "bold", fontSize: "54px"}}>{clientData?.clientName}</h1>
                <p style={{fontSize: "24px"}}>Дата народження: <b>{clientData?.birthday || "Інформація відсутня"}</b> {currentDateString === clientData?.birthday?.slice(0,5) && <b> - У клієнта день народження!!!</b>}</p>
                <p style={{fontSize: "24px"}}>Номер телефону: <b>{clientData?.telephoneNumber}</b></p>
                <div>
                    <p style={{fontSize: "22px"}}><a target="_blank" href={`https://t.me/${clientData?.telephoneNumber}`}>Telegram contact</a></p>
                    <p style={{fontSize: "22px"}}><a target="_blank" href={`viber://chat/?number=%2B${clientData?.telephoneNumber}`}>Viber contact</a></p>
                </div>
                <p style={{fontSize: "24px"}}>Електронна пошта: <b>{clientData?.email || "Інформація відсутня"}</b></p>
                <p style={{fontSize: "24px"}}>Додаткова інформація: <b>{clientData?.additionalInfo || "Інформація відсутня"}</b></p>

            </div>

            <div>
                <h1 style={{textAlign: "center", fontSize: "20px", margin: "10px 0"}}>{userPassport.length > 0 ? "Пспортні дані" : "Паспорті дані відсутні"}</h1>
                {userPassport.length &&

                    <>
                        <p style={{fontSize: "18px"}}>First name: <b>{userPassport[0]?.firstName}</b></p>
                        <p style={{fontSize: "18px"}}>Last name: <b>{userPassport[0]?.lastName}</b></p>
                        <p style={{fontSize: "18px"}}>День народження: <b>{userPassport[0]?.birthDate}</b></p>
                        <p style={{fontSize: "18px"}}>Гендер: <b>{userPassport[0]?.gender}</b></p>
                        <p style={{fontSize: "18px"}}>Серія номер паспорта: <b>{userPassport[0]?.passportNumber}</b></p>
                        <p style={{fontSize: "18px"}}>Виготовлений: <b>{userPassport[0]?.startDate}</b></p>
                        <p style={{fontSize: "18px"}}>Дійсний до: <b>{userPassport[0]?.expiredDate}</b></p>
                        <p style={{fontSize: "18px"}}>Додаткова інформація: {userPassport[0]?.addtionalData?.length > 0 ? userPassport[0]?.addtionalData : "Додаткова інформація відсутня"}</p>
                    </>
                }
            </div>

        </div>
    );
};

export default ClientInfo;