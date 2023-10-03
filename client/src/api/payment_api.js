import {$api} from "./index";
import {API_URLS, PAYMENT_BASE_URL} from "./API_URLS";

export const findAll = async () => {
    return await $api.get(API_URLS.MAPPING.findAll(PAYMENT_BASE_URL));
}

export const create = async (data) => {
    return await $api.post(API_URLS.MAPPING.create(PAYMENT_BASE_URL), data);
}

export const update = async (data, id) => {
    return await $api.put(API_URLS.MAPPING.update(PAYMENT_BASE_URL, id), data);
}

export const deleteById = async (id) => {
    await $api.delete(API_URLS.MAPPING.deleteById(PAYMENT_BASE_URL, id));
}

export const updateBalance = async (data) => {
    return await $api.put(API_URLS.PAYMENTS.updateBalance(), data);
}