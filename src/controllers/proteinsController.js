import proteins from '../database/proteins.json' assert { type: 'json'}
async function getProteins(req, res) {
    try {
        return res.status(200).json(
            proteins
        )
    }catch (error) {

    }
}

export {getProteins}