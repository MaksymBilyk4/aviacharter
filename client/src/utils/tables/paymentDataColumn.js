import {useDispatch} from "react-redux";
import {Button} from "antd";
import {deletePaymentByIdAction} from "../../redux/action/payment";

export const paymentDataColumn = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const dispatch = useDispatch();

    return [
        {
            title: "Номер картки",
            dataIndex: "cardNumber",
            key: "cardNumber",
        },
        {
            title: "Власник",
            dataIndex: "cardOwner",
            key: "cardOwner",
        },
        {
            title: "Банк",
            dataIndex: "bankName",
            key: "bankName"
        },
        {
            title: "Expired date",
            dataIndex: "expiredDate",
            key: "expiredDate"
        },
        {
            title: "CVV",
            dataIndex: "CVV",
            key: "CVV"
        },
        {
            title: "Баланс",
            dataIndex: "balance",
            key: "balance"
        },
        {
            title: "Додатков інформація",
            dataIndex: "cardInfo",
            key: "cardInfo"
        },
        {
            title: "Дії",
            dataIndex: "id",
            key: "actions",
            render: (id) => <Button danger onClick={() => dispatch(deletePaymentByIdAction(id))}>Видалити</Button>
        }
    ]
}