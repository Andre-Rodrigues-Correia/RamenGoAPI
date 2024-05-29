import 'dotenv/config.js'
const SECRET = process.env.SECRET

async function verifyToken(req, res, next){

    const token = req.header('x-api-key')

    console.log(token)


    if(!token){
        return res.status(403).json({
            message: 'Token is required'
        })
    }

    try {
        if(token !== SECRET){
            return res.status(403).json({
                message: 'x-api-key header missing'
            })
        }

        next()

    }catch (error) {
        return res.status(500).json({
            error: 'could not place order'
        })
    }
}

export {verifyToken}