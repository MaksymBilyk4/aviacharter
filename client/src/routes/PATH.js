export const PATH = {
    HOME: "/",
    ORDERS: {
        ROOT: "/orders",
        INFO: "/orders/info/:id",
        info: id => `/orders/info/${id}`,
        ADMIN: "/order/create",
    },
    CLIENTS: {
        ROOT: "/clients",
        INFO: "/clients/info/:id",
        info: id => `/clients/info/${id}`,
        ADMIN: "/clients/create"
    },
    PAYMENTS: {
        ROOT: "/payments"
    },
}