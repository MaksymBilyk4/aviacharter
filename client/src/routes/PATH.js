export const PATH = {
    HOME: "/",
    ORDERS: {
        ROOT: "/orders",
        INFO: "/orders/info/:id",
        info: id => `/orders/info/${id}`,
        ADMIN: "/order/create",
    },
    ORDER_TYPES: {
        ROOT: "/types",
        INFO: "/types/info/:id",
        info: id => `/types/info/${id}`,
        ADMIN: "/types/create"
    },
    TOUR_OPERATORS: {
        ROOT: "/operators",
        INFO: "/operators/info/:id",
        info: id => `/operators/info/${id}`,
        ADMIN: "/operators/create"
    },
    CLIENTS: {
        ROOT: "/clients",
        INFO: "/clients/info/:id",
        info: id => `/clients/info/${id}`,
        ADMIN: "/clients/create",
        PASSPORT: "/clients/passport"
    },
    PAYMENTS: {
        ROOT: "/payments",
        ADMIN: "/payments/create"
    },
    NOTES: {
        ROOT: "/notes"
    }
}