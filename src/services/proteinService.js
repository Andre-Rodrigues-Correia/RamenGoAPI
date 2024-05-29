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

function getProteinById (proteinId){
    const protein = proteins.find(protein => protein.id == proteinId);
    if(protein){
        return protein
    }
    return false;
}

export {getProteinById}