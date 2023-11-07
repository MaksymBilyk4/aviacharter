import {Link} from "react-router-dom";
import {PATH} from "../../routes/PATH";

export const tourOperatorsDataColumn = [
    {
        title: "Id",
        dataIndex: "id",
        key: "id",
        render: (id) => <Link to={PATH.TOUR_OPERATORS.info(id)} style={{
            fontWeight: "bold",
            fontSize: "14px",
            color: "black",
            textDecoration: "underline"
        }}>{id} (натисніть для детальнішої інформації)</Link>,
        width: "20%"
    },
    {
        title: "Tour Operator Name",
        dataIndex: "operatorName",
        key: "operatorName",
        render: (operatorName) => <p style={{fontWeight: "bold"}}>{operatorName}</p>,
        width: "80%"
    }
]