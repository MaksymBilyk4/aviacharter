import {
    createOrder,
    createOrderType, createTourOperator,
    deleteOrderById,
    deleteOrderTypeById, deleteTourOperatorById,
    findAllOrders,
    findAllOrderTypes, findAllTourOperators
} from "../../api/orders";

export const FIND_ALL_ORDERS = "FIND_ALL_ORDERS";
export const FIND_ALL_ORDER_TYPES = "FIND_ALL_ORDER_TYPES";
export const FIND_ALL_TOUR_OPERATORS = "FIND_ALL_TOUR_OPERATORS";
export const CREATE_ORDER = "CREATE_ORDER";
export const CREATE_ORDER_TYPE = "CREATE_ORDER_TYPE";
export const CREATE_TOUR_OPERATOR = "CREATE_TOUR_OPERATOR";
export const DELETE_ORDER = "DELETE_ORDER";
export const DELETE_ORDER_TYPE = "DELETE_ORDER_TYPE";
export const DELETE_TOUR_OPERATOR = "DELETE_TOUR_OPERATOR";

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

export const findAllOrderTypesAction = () => async dispatch => {
    return await findAllOrderTypes()
        .then(res => dispatch({type: FIND_ALL_ORDER_TYPES, payload: res?.data}));
}

export const createOrderTypeAction = data => async dispatch => {
    return await createOrderType(data)
        .then(res => dispatch({type: CREATE_ORDER_TYPE, payload: res?.data}));
}

export const deleteOrderTypeByIdAction = id => async dispatch => {
    return await deleteOrderTypeById(id)
        .then(() => dispatch({type: DELETE_ORDER_TYPE, payload: {id: id}}))
}

export const findAllTourOperatorsAction = () => async dispatch => {
    return await findAllTourOperators()
        .then((res) => dispatch({type: FIND_ALL_TOUR_OPERATORS, payload: res?.data}));
}

export const createTourOperatorAction = data => async dispatch => {
    return await createTourOperator(data)
        .then((res) => dispatch({type: CREATE_TOUR_OPERATOR, payload: res?.data}))
}

export const deleteTourOperatorByIdAction = id => async dispatch => {
    return await deleteTourOperatorById(id)
        .then(() => dispatch({type: DELETE_TOUR_OPERATOR, payload: {id: id}}));
}