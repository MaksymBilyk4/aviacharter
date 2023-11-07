import {Link} from "react-router-dom";
import {PATH} from "../../routes/PATH";

export const orderTypesDataColumn = [
    {
        title: "Id",
        dataIndex: "id",
        key: "id",
        render: (id) => <Link to={PATH.ORDER_TYPES.info(id)} style={{fontWeight: "bold", fontSize: "14px", color: "black", textDecoration: "underline"}}>{id} (натисніть для детальнішої інформації)</Link>,
        width: "20%"
    },
    {
        title: "Тип замовлення",
        dataIndex: "orderType",
        key: "orderType",
        render: (orderType) => <p style={{fontSize: "16px", fontWeight: "bold"}}>{orderType}</p>,
        width: "80%"
    }
];