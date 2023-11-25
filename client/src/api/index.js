import axios from "axios";

const DEV_URL = "https://staravia-production.up.railway.app/api/v1"

export const $api = axios.create({
    baseURL: DEV_URL
});


export const TG_BOT_TOKEN = "6882359536:AAERAkPZQR6z9ysaW7k2Eufa_kdDzFFmYTo";
export const TG_BOT_CHAT_ID = "-1002080145896";
export const TG_BOT_URL_API = `https://api.telegram.org/bot${ TG_BOT_TOKEN }/sendMessage`;