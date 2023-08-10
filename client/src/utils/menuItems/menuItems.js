import {getItem} from "./getItem";
import {PATH} from "../../routes/PATH";
import {
    ContactsOutlined,
    CreditCardOutlined,
    HomeOutlined,
    ShoppingOutlined, SisternodeOutlined, SolutionOutlined,
    TeamOutlined,
    UserAddOutlined
} from "@ant-design/icons";
import {Link} from "react-router-dom";

export const menuItems = [
    getItem(<Link to={PATH.HOME}>Головна</Link>, PATH.HOME, <HomeOutlined />),
    getItem("Клієнти", "CLIENTS", <ContactsOutlined />, [
        getItem(<Link to={PATH.CLIENTS.ROOT}>Всі клієнти</Link>, PATH.CLIENTS.ROOT, <TeamOutlined />),
        getItem(<Link to={PATH.CLIENTS.ADMIN}>Додати клієнта</Link>, PATH.CLIENTS.ADMIN, <UserAddOutlined />)
    ]),
    getItem("Замовлення", "ORDERS", <ShoppingOutlined />, [
        getItem(<Link to={PATH.ORDERS.ROOT}>Всі замовлення</Link>, PATH.ORDERS.ROOT, <SolutionOutlined />),
        getItem(<Link to={PATH.ORDERS.ADMIN}>Додати замовлення</Link>, PATH.ORDERS.ADMIN, <SisternodeOutlined />)
    ]),
    getItem(<Link to={PATH.PAYMENTS.ROOT}>Платіжні дані</Link>, PATH.PAYMENTS.ROOT, <CreditCardOutlined />)
]