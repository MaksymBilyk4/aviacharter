import {combineReducers} from "redux";
import {paymentReducer} from "./paymentReducer";

export const rootReducer = combineReducers({
    payments: paymentReducer,
});