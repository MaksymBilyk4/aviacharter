import {$api} from "./index";
import {API_URLS, NOTES_BASE_URL} from "./API_URLS";

export const findAllNotes = async () => {
    return await $api.get(API_URLS.MAPPING.findAll(NOTES_BASE_URL));
}

export const findAllExpiredNotes = async () => {
    return await $api.get(API_URLS.NOTES.findAllExpiredNotes());
}

export const findAllCompletedNotes = async () => {
    return await $api.get(API_URLS.NOTES.findAllCompletedNotes());
}

export const findNotCompletedAndNotExpiredNotes = async () => {
    return await $api.get(API_URLS.NOTES.findNotCompletedAndNotExpiredNotes());
}

export const findNoteById = async (id) => {
    return await $api.get(API_URLS.MAPPING.findById(NOTES_BASE_URL, id));
}

export const createNote = async (data) => {
    return await $api.post(API_URLS.MAPPING.create(NOTES_BASE_URL), data);
}

export const updateNote = async (data, id) => {
    return await $api.put(API_URLS.MAPPING.update(NOTES_BASE_URL, id), data);
}

export const deleteNoteById = async (id) => await $api.delete(API_URLS.MAPPING.deleteById(NOTES_BASE_URL, id));

export const completeNoteById = async (id) => {
    return await $api.put(API_URLS.NOTES.completeNote(id));
}