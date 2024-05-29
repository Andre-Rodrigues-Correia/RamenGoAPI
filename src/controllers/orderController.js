import { getOrderId } from "../services/orderService.js";
import {getBrothById} from "../services/brothService.js";
import {getProteinById} from "../services/proteinService.js";

async function createOrder(req, res){
    const order = req.body
    try {
        const id = await getOrderId(order);

        const broth = getBrothById(req.body.brothId)
        const protein = getProteinById(req.body.proteinId)

        if(!broth || protein ){
            return res.status(400).json({
                error: 'brothId or proteinId invalid'
            });
        }

        const description = `${broth.name} and ${protein.name}`

        return res.status(201).json({
            id: id,
            description: description,
            image: "https://tech.redventures.com.br/icons/ramen/ramenChasu.png"
        });


    }catch (error){
        res.status(500).json({
            message: 'Internal Server Error'
        });
    }
}


export { createOrder }

