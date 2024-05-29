import broths from '../database/broths.json' assert { type: 'json'}


function getBrothById (brothId){
    const broth = broths.find(broth => broth.id == brothId);
    if(broth){
        return broth
    }
    return false;
}

export {getBrothById}