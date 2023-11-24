import {CREATE_CLIENT, DELETE_CLIENT, FIND_ALL_CLIENTS, SET_CURRENT_CLIENT_INFO} from "../action/client";
import {CREATE_PASSPORT, DELETE_PASSPORT, FIND_ALL_PASSPORTS} from "../action/passport";

const initialObject = {
    clientsInfo: [],
    passports: [],
    currentUserInfoPageData: {}
}


export const clientReducer = (state = initialObject, action) => {
    switch (action.type) {
        case FIND_ALL_CLIENTS:
            return {...state, clientsInfo: action.payload};
        case FIND_ALL_PASSPORTS:
            return {...state, passports: action.payload}
        case CREATE_CLIENT:
            return {clientsInfo: [...state.clientsInfo, action.payload]};
        case CREATE_PASSPORT:
            return {...state, passports: [...state.passports, action.payload]}
        case SET_CURRENT_CLIENT_INFO:
            return {...state, currentUserInfoPageData: action.payload}
        case DELETE_CLIENT:
            return {...state, clientsInfo: [...state.clientsInfo.filter(item => item?.id !== action.payload.id)]}
        case DELETE_PASSPORT:
            return {...state, passports: [...state.passports.filter(item => item?.id !== action.payload.id)]}
        default:
            return state
    }
}