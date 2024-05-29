import proteins from '../database/proteins.json' assert { type: 'json'}


function getProteinById (proteinId){
    const protein = proteins.find(protein => protein.id == proteinId);
    if(protein){
        return protein
    }
    return false;
}

export {getProteinById}