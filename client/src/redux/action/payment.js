import {createPayment, deletePaymentById, findAllPayments, updatePayment} from "../../api/payment_api";

export const FIND_ALL_PAYMENTS = "FIND_ALL_PAYMENTS";
export const CREATE_PAYMENT = "CREATE_PAYMENT";
export const UPDATE_PAYMENT = "UPDATE_PAYMENT";
// export const UPDATE_BALANCE = "UPDATE_BALANCE";
export const DELETE_PAYMENT = "DELETE_PAYMENT";

export const findAllPaymentsAction = () => async (dispatch) => {
    await findAllPayments()
        .then(res => {
            dispatch({type: FIND_ALL_PAYMENTS, payload: res?.data});
        });
}

export const createPaymentAction = (data) => async (dispatch) => {
    await createPayment(data)
        .then(res => {
            dispatch({type: CREATE_PAYMENT, payload: res?.data})
        })
}

export const updatePaymentAction = (data, id) => async (dispatch) => {
    await updatePayment(data, id)
        .then(res => {
            dispatch({type: UPDATE_PAYMENT, payload: res?.data});
        })
}


// export const updateCardBalance = (data, index) => async (dispatch) => {
//     await updateBalance(data)
//         .then(res => {
//             dispatch({type: UPDATE_BALANCE, payload: {data: res?.data, index: index}})
//         })
// }

export const deletePaymentByIdAction = (id) => async (dispatch) => {
    await deletePaymentById(id).then(res => dispatch({type: DELETE_PAYMENT, payload: {id:id}}))
}