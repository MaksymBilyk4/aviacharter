import {$api} from "./index";
import {API_URLS, ORDERS_BASE_URL} from "./API_URLS";

export const findAllOrders = async () => {
    return await $api.get(API_URLS.MAPPING.findAll(ORDERS_BASE_URL));
}

export const findOrderById = async id => {
    return await $api.get(API_URLS.MAPPING.findById(ORDERS_BASE_URL, id));
}

export const createOrder = async data => {
    return await $api.post(API_URLS.MAPPING.create(ORDERS_BASE_URL, data));
}

export const deleteOrderById = async id => {
    await $api.delete(API_URLS.MAPPING.deleteById(ORDERS_BASE_URL, id));
}