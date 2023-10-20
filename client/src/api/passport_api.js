import {$api} from "./index";
import {API_URLS, PASSPORT_BASE_URL} from "./API_URLS";


export const findAllPassports = async () => {
    return await $api.get(API_URLS.MAPPING.findAll(PASSPORT_BASE_URL));
}
export const createPassport = async (data) => {
    return await $api.post(API_URLS.MAPPING.create(PASSPORT_BASE_URL), data);
}

export const deletePassportById = async id => {
    return await $api.delete(API_URLS.MAPPING.deleteById(PASSPORT_BASE_URL, id));
}