import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {Button} from "antd";
import {PATH} from "../../routes/PATH";
import {deleteClientByIdAction} from "../../redux/action/client";

export const clientDataColumn = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const dispatch = useDispatch();

    return [
        {
            title: "Id",
            dataIndex: "id",
            key: "id"
        },
        {
            title: "Ініціали",
            dataIndex: "clientName",
            key: "clientName"
        },
        {
            title: "Номер телефону",
            dataIndex: "telephoneNumber",
            key: "telephoneNumber"
        },
        {
            title: "e-mail",
            dataIndex: "email",
            key: "email"
        },
        {
            title: "Дії",
            dataIndex: "id",
            key: "actions",
            render: (id) => (<div style={{display: "flex", justifyContent: "space-between"}}>
                <Button type={"primary"} ghost  onClick={() => navigate(PATH.CLIENTS.info(id))}>Check full info</Button>
                <Button danger onClick={() => dispatch(deleteClientByIdAction(id))}>Видалити клієнта</Button>
            </div>)
        }
    ]
}