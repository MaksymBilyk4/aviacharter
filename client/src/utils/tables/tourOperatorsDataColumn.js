import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {Button} from "antd";
import {deleteTourOperatorByIdAction} from "../../redux/action/order";
import {PATH} from "../../routes/PATH";

export const tourOperatorsDataColumn = (deleteAccess = true) => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const dispatch = useDispatch();

    return [
        {
            title: "Id",
            dataIndex: "id",
            key: "id",
        },
        {
            title: "Тур Оператор",
            dataIndex: "operatorName",
            key: "operatorName",
        },
        {
            title: "Дії",
            dataIndex: "id",
            key: "actions",
            render: (id) => (<div style={{display: "flex", justifyContent: "space-between"}}>
                <Button type={"primary"} ghost onClick={() => navigate(PATH.TOUR_OPERATORS.info(id))}>Check full info</Button>
                {deleteAccess && <Button danger onClick={() => dispatch(deleteTourOperatorByIdAction(id))}>Видалити</Button>}
            </div>)
        }
    ];
}