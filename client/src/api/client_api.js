import {$api} from "./index";
import {API_URLS, CLIENT_BASE_URL} from "./API_URLS";

export const findAllClients = async () => {
    return await $api.get(API_URLS.MAPPING.findAll(CLIENT_BASE_URL));
}

export const createClient = async (data) => {
    return await $api.post(API_URLS.MAPPING.create(CLIENT_BASE_URL), data);
}

export const findClientById = async (id) => {
    return await $api.get(API_URLS.MAPPING.findById(CLIENT_BASE_URL, id));
}

export const deleteClientById = async (id) => {
    await $api.delete(API_URLS.MAPPING.deleteById(CLIENT_BASE_URL, id));
}