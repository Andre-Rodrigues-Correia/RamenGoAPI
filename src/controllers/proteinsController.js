const proteins = [
    {
        "id": "1",
        "imageInactive": "https://tech.redventures.com.br/icons/pork/inactive.svg",
        "imageActive": "https://tech.redventures.com.br/icons/pork/active.svg",
        "name": "Chasu",
        "description": "A sliced flavourful pork meat with a selection of season vegetables.",
        "price": 10
    }
]
async function getProteins(req, res) {
    try {
        return res.status(200).json(
            proteins
        )
    }catch (error) {

    }
}

export {getProteins}