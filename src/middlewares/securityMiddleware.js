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
                message: 'Not Authorized'
            })
        }

        next()

    }catch (error) {
        return res.status(500).json({
            message: 'Internal server error'
        })
    }
}

export {verifyToken}