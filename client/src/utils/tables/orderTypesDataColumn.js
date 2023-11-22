import {useNavigate} from "react-router-dom";
import {PATH} from "../../routes/PATH";
import {useDispatch} from "react-redux";
import {Button} from "antd";
import {deleteOrderTypeByIdAction} from "../../redux/action/order";

export const orderTypesDataColumn = (deleteAccess = true) => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const dispatch = useDispatch();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate();

    return [
        {
            title: "Id",
            dataIndex: "id",
            key: "id",
        },
        {
            title: "Тип замовлення",
            dataIndex: "orderType",
            key: "orderType",
            render: (orderType) => <p>{orderType}</p>,
        },
        {
            title: "Дії",
            dataIndex: "id",
            key: "actions",
            render: (id) => (
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <Button type={"primary"} ghost onClick={() => navigate(PATH.ORDER_TYPES.info(id))}>Check full info</Button>
                    {deleteAccess && <Button onClick={() => dispatch(deleteOrderTypeByIdAction(id))} danger>Delete</Button>}
                </div>
            )
        }
    ]
};