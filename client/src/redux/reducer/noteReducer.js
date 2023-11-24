import {
    COMPLETE_NOTE,
    CREATE_NOTE, DELETE_NOTE,
    FIND_ALL_COMPLETED_NOTES,
    FIND_ALL_EXPIRED_NOTES,
    FIND_ALL_NOTES, FIND_NOT_COMPLETED_AND_NOT_EXPIRED_NOTES
} from "../action/note";

const initialState = {
    notes: [],
    expiredNotes: [],
    completedNotes: [],
    notCompletedNotes: [],
}

export const noteReducer = (state = initialState, action) => {
    switch (action.type) {
        case FIND_ALL_NOTES: return  {...state, notes: action.payload};
        case FIND_ALL_EXPIRED_NOTES: return {...state, expiredNotes: action.payload};
        case FIND_ALL_COMPLETED_NOTES: return {...state, completedNotes: action.payload};
        case FIND_NOT_COMPLETED_AND_NOT_EXPIRED_NOTES: return {...state, notCompletedNotes: action.payload};
        case COMPLETE_NOTE: return {
                ...state,
                expiredNotes: state.expiredNotes?.filter(item => item?.id !== action.payload.id),
                completedNotes: [...state.completedNotes, action.payload.note],
                notCompletedNotes: state.notCompletedNotes?.filter(item => item?.id !== action.payload.id)
        };
        case CREATE_NOTE: return {
            ...state,
            notes: [...state.notes, action.payload],
            notCompletedNotes: [...state.notCompletedNotes, action.payload]
        };
        case DELETE_NOTE: return {
            ...state,
            notes: state.notes?.filter(item => item.id !== action.payload.id),
            completedNotes: state.notes?.filter(item => item.id !== action.payload.id),
            notCompletedNotes: state.notes?.filter(item => item.id !== action.payload.id),
        }
        default:
            return state

    }
}