import broths from '../database/broths.json' assert { type: 'json'}
async function getBroths(req, res) {
    try {
        return res.status(200).json(
            broths
        )
    }catch (error) {

    }
}

export {getBroths}