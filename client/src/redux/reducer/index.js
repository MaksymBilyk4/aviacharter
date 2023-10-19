import {combineReducers} from "redux";
import {paymentReducer} from "./paymentReducer";
import {clientReducer} from "./clientReducer";

export const rootReducer = combineReducers({
    payments: paymentReducer,
    clients: clientReducer,
});