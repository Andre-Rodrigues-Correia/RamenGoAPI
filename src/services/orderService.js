import axios from "axios";
import 'dotenv/config.js'
const API_KEY = process.env.API_KEY
async function getOrderId(order){
    const response =  await axios.post('https://api.tech.redventures.com.br/orders/generate-id', order, {
        headers: {
            'x-api-key': API_KEY
        }
    })
    return response.data.orderId;
}


export {getOrderId}