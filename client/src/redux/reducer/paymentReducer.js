import {FIND_ALL_PAYMENTS, CREATE_PAYMENT, UPDATE_PAYMENT, DELETE_PAYMENT} from "../action/payment";

const initialObj = {
    paymentInfo: [],
}

export const paymentReducer = (state = initialObj, action) => {
    switch (action.type) {
        case FIND_ALL_PAYMENTS:
            return {paymentInfo: action.payload}
        case CREATE_PAYMENT:
            return {paymentInfo: [...state.paymentInfo, action.payload]}
        case UPDATE_PAYMENT:
            return {...state, paymentInfo: [...state.paymentInfo?.filter(item => item.id !== action.payload.id), action.payload] }
        case DELETE_PAYMENT:
            return {paymentInfo: [...state.paymentInfo?.filter(item => item.id !== action.payload.id)]}
        default:
            return state;
    }
}