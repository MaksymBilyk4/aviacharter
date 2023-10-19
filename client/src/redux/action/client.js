import {createClient, deleteClientById, findAllClients, findClientById} from "../../api/client_api";

export const FIND_ALL_CLIENTS = "FIND_ALL_CLIENTS";
export const CREATE_CLIENT = "CREATE_CLIENT";
export const UPDATE_CLIENT = "UPDATE_CLIENT";
export const DELETE_CLIENT = "DELETE_CLIENT";
export const SET_CURRENT_CLIENT_INFO = "SET_CURRENT_CLIENT_INFO";

export const findAllClientsAction = () => async (dispatch) => {
    return await findAllClients()
        .then(res => dispatch({type: FIND_ALL_CLIENTS, payload: res?.data}));
}

export const createClientAction = (data) => async (dispatch) => {
    return await createClient(data)
        .then(res => dispatch({type: CREATE_CLIENT, payload: res?.data}));
}

export const setCurrentClientInfoOptionalById = id => async (dispatch) => {
    return await findClientById(id)
        .then(res => dispatch({type: SET_CURRENT_CLIENT_INFO, payload: res?.data}))
}


export const setCurrentClientInfo = (clientEntity) => async dispatch => {
    return dispatch({type: SET_CURRENT_CLIENT_INFO, payload: clientEntity});
}

export const deleteClientByIdAction = (id) => async dispatch => {
    return await deleteClientById(id).then(res => dispatch({type: DELETE_CLIENT, payload: {id:id}}))
}