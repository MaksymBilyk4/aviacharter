import {Link, useNavigate} from "react-router-dom";
import {PATH} from "../../routes/PATH";
import {Button} from "antd";
import {useDispatch} from "react-redux";
import {deleteOrderByIdAction} from "../../redux/action/order";

export const orderDataColumn = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const dispatch = useDispatch();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate();


    const handleDelete = (id) => dispatch(deleteOrderByIdAction(id));

    return [
        {
            title: "Id",
            dataIndex: "id",
            key: "id",
        },
        {
            title: "Дата замовлення",
            dataIndex: "orderDate",
            key: "orderDate",
        },
        {
            title: "Дата відправлення",
            dataIndex: "departureDate",
            key: "departureDate",
        },
        {
            title: "Номер замовлення",
            dataIndex: "orderNumber",
            key: "orderNumber"
        },
        {
            title: "Коментар",
            dataIndex: "comment",
            key: "comment"
        },
        {
            title: "Бруто",
            dataIndex: "bruttoPrice",
            key: "bruttoPrice"
        },
        {
            title: "Нетто",
            dataIndex: "nettoPrice",
            key: "nettoPrice"
        },
        {
            title: "Чисті",
            dataIndex: "profit",
            key: "profit"
        },
        {
            title: "Дії",
            dataIndex: "id",
            render: (id) => (
                <div style={{display: "flex", maxWidth: "100%"}}>
                    <Button style={{margin: "0 10px 0 0"}} type={"primary"} ghost onClick={() => navigate(PATH.ORDERS.info(id))}>Check Full info</Button>
                    <Button danger onClick={() => handleDelete(id)}>Видалити</Button>
                </div>
            )
        }
    ]
}