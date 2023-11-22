import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {paymentSelector} from "../../redux/selector/paymentSelector";
import {Button, Card, Input, Table} from "antd";
import {DeleteOutlined} from "@ant-design/icons";
import {deletePaymentByIdAction} from "../../redux/action/payment";
import debounce from "lodash.debounce";
import {paymentDataColumn} from "../../utils/tables/paymentDataColumn";

const Payments = () => {

    const payments = useSelector(paymentSelector);
    const dispatch = useDispatch();

    const [filtered, setFiltered] = useState(useSelector(paymentSelector));
    const [query, setQuery] = useState("");
    const [tableView, setTableView] = useState(true);
    const handleTableViewOn = () => setTableView(true);
    const handleTableViewOff = () => setTableView(false);

    useEffect(() => setFiltered(payments), [payments])

    const filterPaymentsChange = (e) => {
        setFiltered(payments?.filter
        (item =>
            item?.cardNumber?.includes(e.target.value) ||
            item?.cardOwner?.toLowerCase().includes(e.target.value.toLowerCase()) ||
            item?.bankName?.toLowerCase().includes(e.target.value.toLowerCase()))
        );
        setQuery(e.target.value);
    }


    return (
        <>
            <h1 style={{textAlign: "center", fontSize: "22px", margin: "5px 0 20px 0"}}>Банківські картки</h1>

            <div style={{margin: "5px 0 25px 0"}}>
                <Button style={{margin: "0 10px 0 0"}} onClick={handleTableViewOn} type={tableView ? "primary" : "default"}>Табличний вид</Button>
                <Button onClick={handleTableViewOff} type={tableView ? "default" : "primary"}>Карточний вид</Button>
            </div>

            <h1>Пошук</h1>
            <Input
                placeholder={"Шукай за: номером картки, власником, назвою банку (НА АНГЛІЙСЬКІЙ)"}
                onChange={debounce(filterPaymentsChange, 500)}
                style={{marginBottom: "20px"}}
            />

            <h1>{filtered.length === 0 && `Картки за запитом ${query} не знайдено`}</h1>

            <Table
                bordered
                pagination={false}
                style={{width: "100%", display: tableView ? "block" : "none"}}
                columns={paymentDataColumn()}
                dataSource={filtered || payments}
            />

            <div style={{display: tableView ? "none" : "block"}}>
            {
                filtered?.length > 0 &&
                    <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gridGap: "20px"}}>
                        {filtered?.map(item =>
                            <Card
                                key={item?.id}
                                title={
                                    <p>{item.cardNumber} - {item.bankName}</p>
                                }
                                bordered={true}
                                actions={[
                                    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                                        <Button danger type={"primary"}
                                                onClick={() => dispatch(deletePaymentByIdAction(item.id))}
                                                style={{width: "90%"}}
                                                icon={<DeleteOutlined
                                                    style={{color: "white", fontWeight: "bold", fontSize: "22px"}}/>}
                                        />
                                    </div>
                                ]}
                            >
                                <div style={{display: "grid", gridTemplateColumns: "repeat(2, 50%)", gridGap: "30px"}}>
                                    <div>Expired date: <p style={{fontWeight: "bold"}}>{item.expiredDate}</p></div>
                                    <div>CVV: <p style={{fontWeight: "bold"}}>{item.cvv}</p></div>
                                </div>

                                <div style={{fontWeight: "bold"}}>Власник: {item.cardOwner}</div>
                                <div style={{fontWeight: "bold"}}>Баланс: {item.balance}</div>
                                <p>Додаткова
                                    інформація: {item.cardInfo.length > 0 ? item.cardInfo : "Додаткова інформація відсутня"}</p>
                            </Card>)}
                    </div>
            }
            </div>
        </>

    );
};

export default Payments;