import {
    CREATE_ORDER,
    CREATE_ORDER_TYPE, CREATE_TOUR_OPERATOR,
    DELETE_ORDER,
    DELETE_ORDER_TYPE, DELETE_TOUR_OPERATOR,
    FIND_ALL_ORDER_TYPES,
    FIND_ALL_ORDERS, FIND_ALL_TOUR_OPERATORS
} from "../action/order";

const initialObj = {
    ordersInfo: [],
    orderTypes: [],
    tourOperators: []
}

export const orderReducer = (state = initialObj, action) => {
    switch (action.type) {
        case FIND_ALL_ORDERS:
            return {...state, ordersInfo: action.payload};
        case FIND_ALL_ORDER_TYPES:
            return {...state, orderTypes: action.payload};
        case FIND_ALL_TOUR_OPERATORS:
            return {...state, tourOperators: action.payload};
        case CREATE_ORDER:
            return {...state, ordersInfo: [...state.ordersInfo, action.payload]};
        case CREATE_ORDER_TYPE:
            return {...state, orderTypes: [...state.orderTypes, action.payload]};
        case CREATE_TOUR_OPERATOR:
            return {...state, tourOperators: [...state.tourOperators, action.payload]};
        case DELETE_ORDER:
            return {...state, ordersInfo: [...state.ordersInfo?.filter(item => item?.id !== action.payload.id)]}
        case DELETE_ORDER_TYPE:
            return {...state, orderTypes: [...state.orderTypes?.filter(item => item?.id !== action.payload.id)]}
        case DELETE_TOUR_OPERATOR:
            return {...state, tourOperators: [...state.tourOperators?.filter(item => item?.id !== action.payload.id)]};
        default:
            return state;
    }
}