import httpStatusCodes from "../Error_handler/httpStatusCodes.js"
import jwt from "jsonwebtoken"
import jwt_blacklistRepository from "../Model/Repositories/jwt_blacklistRepository.js"

async function verifyJWT(req, res, next) {
    const token = req.headers['x-access-token']
    if(!token) {
        res.status(httpStatusCodes.BAD_REQUEST).send({message: 'No Token Provided'})
    } 
    jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
        if (error) {
            res.status(httpStatusCodes.INTERNAL_SERVER).send({message: 'Failed to authenticate token'})    
        }
        else{
            req.id = decoded.userId
        }
    })
    try {
        const row = await jwt_blacklistRepository.getByToken(token)
        if(row){
            res.status(httpStatusCodes.UNAUTHORIZED).send({message: "token is invalid"})
        } else {
            next()
        }
    }
    catch {
        next()
    }
}

function hasRoutePermission(req, res, next) {
    if(req.id == req.params.id){
        next()
    }
    else {
        res.status(httpStatusCodes.UNAUTHORIZED).send({
            message: "this user don't have permission to access this route"
        })
    }
}

export default {
    verifyJWT: verifyJWT,
    hasRoutePermission: hasRoutePermission
}