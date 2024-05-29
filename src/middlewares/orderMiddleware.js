
function validateOrder(req, res, next){
    const { brothId, proteinId} = req.body;

    console.log(brothId, proteinId)
    console.log(req.body)

    next();
}

export { validateOrder }