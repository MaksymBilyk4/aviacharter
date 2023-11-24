import {
    completeNoteById,
    createNote,
    deleteNoteById,
    findAllCompletedNotes,
    findAllExpiredNotes,
    findAllNotes, findNotCompletedAndNotExpiredNotes
} from "../../api/notes_api";

export const FIND_ALL_NOTES = "FIND_ALL_NOTES";
export const FIND_ALL_EXPIRED_NOTES = "FIND_ALL_EXPIRED_NOTES";
export const FIND_ALL_COMPLETED_NOTES = "FIND_ALL_COMPLETED_NOTES";
export const CREATE_NOTE  = "CREATE_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";
export const COMPLETE_NOTE = "COMPLETE_NOTE";
export const FIND_NOT_COMPLETED_AND_NOT_EXPIRED_NOTES = "FIND_NOT_COMPLETED_AND_NOT_EXPIRED_NOTES";
export const findAllNotesAction = () => async (dispatch) => {
    await findAllNotes()
        .then(res => dispatch({type: FIND_ALL_NOTES, payload: res?.data}))
}

export const findAllExpiredNotesAction = () => async (dispatch) => {
    await findAllExpiredNotes()
        .then(res => dispatch({type: FIND_ALL_EXPIRED_NOTES, payload: res?.data}));
}

export const findAllCompletedNotesAction = () => async (dispatch) => {
    await findAllCompletedNotes()
        .then(res => dispatch({type: FIND_ALL_COMPLETED_NOTES, payload: res?.data}));
}

export const findNotCompletedAndNotExpiredNotesAction = () => async (dispatch) => {
    await findNotCompletedAndNotExpiredNotes()
        .then(res => dispatch({type: FIND_NOT_COMPLETED_AND_NOT_EXPIRED_NOTES, payload: res?.data}));
}

export const createNoteAction = (data) => async (dispatch) => {
    await createNote(data)
        .then(res => dispatch({type: CREATE_NOTE, payload: res?.data}));
}

export const deleteNoteAction = (id) => async (dispatch) => {
    await deleteNoteById().then(() => dispatch({type: DELETE_NOTE, payload: {noteId: id}}))
}

export const completeNoteByIdAction = (id) => async (dispatch) => {
    await completeNoteById(id)
        .then(res => dispatch({type: COMPLETE_NOTE, payload: {id: id, note: res?.data}}));
}