import {combineReducers} from "redux";
import {paymentReducer} from "./paymentReducer";
import {clientReducer} from "./clientReducer";
import {orderReducer} from "./orderReducer";
import {noteReducer} from "./noteReducer";

export const rootReducer = combineReducers({
    payments: paymentReducer,
    clients: clientReducer,
    orders: orderReducer,
    notes: noteReducer,
});