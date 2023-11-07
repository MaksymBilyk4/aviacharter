import {$api} from "./index";
import {API_URLS, ORDER_TYPES_BASE_URL, ORDERS_BASE_URL, TOUR_OPERATORS_BASE_URL} from "./API_URLS";

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

export const findAllOrderTypes = async () => {
    return await $api.get(API_URLS.MAPPING.findAll(ORDER_TYPES_BASE_URL));
}

export const findOrderTypesById = async id => {
    return await $api.get(API_URLS.MAPPING.findById(ORDER_TYPES_BASE_URL, id));
}

export const createOrderType = async data => {
    await $api.post(API_URLS.MAPPING.create(ORDER_TYPES_BASE_URL), data)
}

export const deleteOrderTypeById = async id => {
    await $api.delete(API_URLS.MAPPING.deleteById(ORDER_TYPES_BASE_URL, id));
}

export const findAllTourOperators = async () => {
    return await $api.get(API_URLS.MAPPING.findAll(TOUR_OPERATORS_BASE_URL));
}

export const findTourOperatorById = async id => {
    await $api.get(API_URLS.MAPPING.findAll(TOUR_OPERATORS_BASE_URL, id));
}

export const createTourOperator = async data => {
    return await $api.post(API_URLS.MAPPING.create(TOUR_OPERATORS_BASE_URL), data);
}

export const deleteTourOperatorById = async id => {
    await $api.delete(API_URLS.MAPPING.deleteById(TOUR_OPERATORS_BASE_URL, id));
}