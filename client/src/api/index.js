import axios from "axios";

export const $api = axios.create({
    baseURL: "http://localhost:9000/api/v1"
});


export const TG_BOT_TOKEN = "6882359536:AAERAkPZQR6z9ysaW7k2Eufa_kdDzFFmYTo";
export const TG_BOT_CHAT_ID = "-1002080145896";
export const TG_BOT_URL_API = `https://api.telegram.org/bot${ TG_BOT_TOKEN }/sendMessage`;