export const allNotesSelector = state => state.notes.notes;
export const completedNotesSelector = state => state.notes.completedNotes;
export const expiredNotesSelector = state => state.notes.expiredNotes;
export const notCompletedNotesSelector = state => state.notes.notCompletedNotes;