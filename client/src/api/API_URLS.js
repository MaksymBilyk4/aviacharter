export const PAYMENT_BASE_URL = "/payments"

export const API_URLS = {
    MAPPING: {
        findAll: (entity) => `${entity}/all`,
        create: (entity) => `${entity}`,
        deleteById: (entity, id) => `${entity}/${id}`,
        update: (entity, id) => `${entity}/${id}`
    },
    PAYMENTS: {
        updateBalance: () => `${PAYMENT_BASE_URL}/updateBalance`
    }
}