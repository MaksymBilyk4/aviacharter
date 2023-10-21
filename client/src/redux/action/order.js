import {createOrder, deleteOrderById, findAllOrders} from "../../api/orders";

export const FIND_ALL_ORDERS = "FIND_ALL_ORDERS";
export const CREATE_ORDER = "CREATE_ORDER";
export const DELETE_ORDER = "DELETE_ORDER";
export const findAllOrdersAction = () => async dispatch => {
    return await findAllOrders()
        .then(res => dispatch({type: FIND_ALL_ORDERS, payload: res?.data}));
}

export const createOrderAction = data => async dispatch => {
    return await createOrder(data)
        .then(res => dispatch({type: CREATE_ORDER, payload: res?.data}));
}

export const deleteOrderByIdAction = id => async dispatch => {
    deleteOrderById(id).then(() => dispatch({type: DELETE_ORDER, payload: {id:id}}))
}