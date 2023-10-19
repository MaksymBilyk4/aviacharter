import {$api} from "./index";
import {API_URLS, PAYMENT_BASE_URL} from "./API_URLS";

export const findAllPayments = async () => {
    return await $api.get(API_URLS.MAPPING.findAll(PAYMENT_BASE_URL));
}

export const createPayment = async (data) => {
    return await $api.post(API_URLS.MAPPING.create(PAYMENT_BASE_URL), data);
}

export const updatePayment = async (data, id) => {
    return await $api.put(API_URLS.MAPPING.update(PAYMENT_BASE_URL, id), data);
}

export const deletePaymentById = async (id) => {
    await $api.delete(API_URLS.MAPPING.deleteById(PAYMENT_BASE_URL, id));
}

export const updatePaymentBalance = async (data) => {
    return await $api.put(API_URLS.PAYMENTS.updateBalance(), data);
}
