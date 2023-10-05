import {create, deleteById, findAll, update, updateBalance} from "../../api/payment_api";

export const FIND_ALL_PAYMENTS = "FIND_ALL_PAYMENTS";
export const CREATE_PAYMENT = "CREATE_PAYMENT";
export const UPDATE_PAYMENT = "UPDATE_PAYMENT";
export const UPDATE_BALANCE = "UPDATE_BALANCE";
export const DELETE_PAYMENT = "DELETE_PAYMENT";

export const findAllPayments = () => async (dispatch) => {
    await findAll()
        .then(res => {
            dispatch({type: FIND_ALL_PAYMENTS, payload: res?.data});
        });
}

export const createPayment = (data) => async (dispatch) => {
    await create(data)
        .then(res => {
            dispatch({type: CREATE_PAYMENT, payload: res?.data})
        })
}

export const updatePayment = (data, id) => async (dispatch) => {
    await update(data, id)
        .then(res => {
            dispatch({type: UPDATE_PAYMENT, payload: res?.data});
        })
}

export const updateCardBalance = (data) => async (dispatch) => {
    await updateBalance(data)
        .then(res => {
            dispatch({type: UPDATE_BALANCE, payload: res?.data})
        })
}

export const deletePaymentById = (id) => async (dispatch) => {
    await deleteById(id).then(res => dispatch({type: DELETE_PAYMENT, payload: id}))
}