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

export const routes = [
    {
        element: <Home/>,
        path: PATH.HOME
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
    }
]