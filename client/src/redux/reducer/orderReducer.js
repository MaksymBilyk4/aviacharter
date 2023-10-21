import {CREATE_ORDER, DELETE_ORDER, FIND_ALL_ORDERS} from "../action/order";

const initialObj = {
    ordersInfo: []
}

export const orderReducer = (state = initialObj, action) => {
    switch (action.type) {
        case FIND_ALL_ORDERS:
            return {...state, ordersInfo: action.payload};
        case CREATE_ORDER:
            return {...state, ordersInfo: [...state.ordersInfo, action.payload]};
        case DELETE_ORDER:
            return {...state, ordersInfo: [...state.ordersInfo?.filter(item => item?.id !== action.payload.id)]}
        default:
            return state;
    }
}