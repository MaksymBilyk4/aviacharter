import {createPassport, deletePassportById, findAllPassports} from "../../api/passport_api";

export const CREATE_PASSPORT = "CREATE_PASSPORT";
export const FIND_ALL_PASSPORTS = "FIND_ALL_PASSPORTS";

export const DELETE_PASSPORT = "DELETE_PASSPORT";

export const findAllPassportsAction = () => async dispatch => {
    return await findAllPassports()
        .then(res => dispatch({type: FIND_ALL_PASSPORTS, payload: res?.data}))
}

export const createPassportAction = (data) => async dispatch => {
    return await createPassport(data)
        .then(res => dispatch({type: CREATE_PASSPORT, payload: res?.data}));
}

export const deletePassportByIdAction = (id) => async dispatch => {
    return await deletePassportById(id)
        .then(() => dispatch({type: DELETE_PASSPORT, payload: {id: id}}))
}
