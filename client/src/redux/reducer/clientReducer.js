import {CREATE_CLIENT, DELETE_CLIENT, FIND_ALL_CLIENTS, SET_CURRENT_CLIENT_INFO} from "../action/client";

const initialObject = {
    clientsInfo: [],
    currentUserInfoPageData: {}
}

export const clientReducer = (state = initialObject, action) => {
    switch (action.type) {
        case FIND_ALL_CLIENTS:
            return {clientsInfo: action.payload};
        case CREATE_CLIENT:
            return {clientsInfo: [...state.clientsInfo, action.payload]};
        case SET_CURRENT_CLIENT_INFO:
            return {...state, currentUserInfoPageData: action.payload}
        case DELETE_CLIENT:
            return {...state, clientsInfo: [...state.clientsInfo.filter(item => item?.id !== action.payload.id)]}
        default:
            return state
    }
}