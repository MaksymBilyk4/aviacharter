import Home from "../pages/Home/Home";
import {PATH} from "./PATH";
import OrderInfo from "../pages/Orders/OrderInfo";
import Orders from "../pages/Orders/Orders";
import OrdersAdmin from "../pages/Orders/OrdersAdmin";
import Clients from "../pages/Clients/Clients";
import ClientInfo from "../pages/Clients/ClientInfo";
import ClientsAdmin from "../pages/Clients/ClientsAdmin";
import Payments from "../pages/Payments/Payments";
import PaymentsAdmin from "../pages/Payments/PaymentsAdmin";
import PassportAdmin from "../pages/Clients/PassportAdmin";
import OperatorAdmin from "../pages/Operators/OperatorAdmin";
import OperatorInfo from "../pages/Operators/OperatorInfo";
import Operators from "../pages/Operators/Operators";
import OrderTypeAdmin from "../pages/OrderTypes/OrderTypeAdmin";
import OrderTypesInfo from "../pages/OrderTypes/OrderTypesInfo";
import OrderTypes from "../pages/OrderTypes/OrderTypes";
import Notes from "../pages/Notes/Notes";

export const routes = [
    {
        element: <Home/>,
        path: PATH.HOME
    },
    {
        element: <OrderTypeAdmin/>,
        path: PATH.ORDER_TYPES.ADMIN
    },
    {
        element: <OrderTypesInfo/>,
        path: PATH.ORDER_TYPES.INFO
    },
    {
        element: <OrderTypes/>,
        path: PATH.ORDER_TYPES.ROOT
    },
    {
        element: <Orders/>,
        path: PATH.ORDERS.ROOT,
    },
    {
        element: <OrderInfo/>,
        path: PATH.ORDERS.INFO,
    },
    {
        element: <OrdersAdmin/>,
        path: PATH.ORDERS.ADMIN,
    },
    {
        element: <Clients/>,
        path: PATH.CLIENTS.ROOT
    },
    {
        element: <ClientInfo/>,
        path: PATH.CLIENTS.INFO
    },
    {
        element: <ClientsAdmin/>,
        path: PATH.CLIENTS.ADMIN
    },
    {
        element: <Payments/>,
        path: PATH.PAYMENTS.ROOT
    },
    {
        element: <PaymentsAdmin/>,
        path: PATH.PAYMENTS.ADMIN
    },
    {
        element: <PassportAdmin/>,
        path: PATH.CLIENTS.PASSPORT,
    },
    {
        element: <OperatorAdmin/>,
        path: PATH.TOUR_OPERATORS.ADMIN
    },
    {
        element: <OperatorInfo/>,
        path: PATH.TOUR_OPERATORS.INFO
    },
    {
        element: <Operators/>,
        path: PATH.TOUR_OPERATORS.ROOT
    },
    {
        element: <Notes/>,
        path: PATH.NOTES.ROOT
    },
]