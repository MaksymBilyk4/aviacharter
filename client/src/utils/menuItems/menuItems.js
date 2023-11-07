import {getItem} from "./getItem";
import {PATH} from "../../routes/PATH";
import {
    BookOutlined,
    ContactsOutlined,
    CreditCardOutlined, CustomerServiceOutlined,
    HomeOutlined, ReadOutlined,
    ShoppingOutlined, SisternodeOutlined, SolutionOutlined,
    TeamOutlined,
    UserAddOutlined
} from "@ant-design/icons";
import {Link} from "react-router-dom";

export const menuItems = [
    getItem(<Link to={PATH.HOME}>Головна</Link>, PATH.HOME, <HomeOutlined/>),
    getItem("Клієнти", "CLIENTS", <ContactsOutlined/>, [
        getItem(<Link to={PATH.CLIENTS.ROOT}>Всі клієнти</Link>, PATH.CLIENTS.ROOT, <TeamOutlined/>),
        getItem(<Link to={PATH.CLIENTS.ADMIN}>Додати клієнта</Link>, PATH.CLIENTS.ADMIN, <UserAddOutlined/>),
        getItem(<Link to={PATH.CLIENTS.PASSPORT}>Додати паспорт</Link>, PATH.CLIENTS.PASSPORT, <ReadOutlined />)
    ]),
    getItem("Типи замовлень", "ORDER_TYPES", <BookOutlined />, [
        getItem(<Link to={PATH.ORDER_TYPES.ROOT}>Переглянути інфо по типам замовлення</Link>, PATH.ORDER_TYPES.ROOT),
        getItem(<Link to={PATH.ORDER_TYPES.ADMIN}>Додати новий тип замовлення</Link>, PATH.ORDER_TYPES.ADMIN)
    ]),
    getItem("Замовлення", "ORDERS", <ShoppingOutlined/>, [
        getItem(<Link to={PATH.ORDERS.ROOT}>Всі замовлення</Link>, PATH.ORDERS.ROOT, <SolutionOutlined/>),
        getItem(<Link to={PATH.ORDERS.ADMIN}>Додати замовлення</Link>, PATH.ORDERS.ADMIN, <SisternodeOutlined/>)
    ]),
    getItem("Тур оператори", "TOUR_OPERATORS1111", <CustomerServiceOutlined />, [
        getItem(<Link to={PATH.TOUR_OPERATORS.ROOT}>Переглянути інфо по всім операторам</Link>, PATH.TOUR_OPERATORS.ROOT),
        getItem(<Link to={PATH.TOUR_OPERATORS.ADMIN}>Додати тур оператор.</Link>, PATH.TOUR_OPERATORS.ADMIN)
    ]),
    getItem("Платіжні дані", "PAYMENTS", <CreditCardOutlined/>, [
        getItem(<Link to={PATH.PAYMENTS.ROOT}>Платіжні дані</Link>, PATH.PAYMENTS.ROOT, <CreditCardOutlined/>),
        getItem(<Link to={PATH.PAYMENTS.ADMIN}>Додати картку</Link>, PATH.PAYMENTS.ADMIN, <CreditCardOutlined/>)
    ])
]