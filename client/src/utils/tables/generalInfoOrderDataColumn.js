import {Button} from "antd";
import {useNavigate} from "react-router-dom";
import {PATH} from "../../routes/PATH";

export const generalInfoOrderDataColumn = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate();

    return [
        {
            title: "Id",
            dataIndex: "id",
            key: "id",
        },
        {
            title: "Номер замовлнення",
            dataIndex: "orderNumber",
            key: "orderNumber"
        },
        {
            title: "Дата замовлення",
            dataIndex: "orderDate",
            key: "orderDate"
        },
        {
            title: "Чисті",
            dataIndex: "profit",
            key: "profit"
        },
        {
            title: "Повна інформація",
            dataIndex: "id",
            key: "full_info",
            render: (id) => <Button type={"primary"} ghost onClick={() => navigate(PATH.ORDERS.info(id))}>Check full info</Button>
        }
    ]
}