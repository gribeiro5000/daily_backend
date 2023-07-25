import httpStatusCodes from "../Error_handler/httpStatusCodes.js";
import userRepository from "../Model/Repositories/userRepository.js";

async function userExistVerify(req, res, next) {
    try{
        const oldUser = await userRepository.getByUsername(req.body.username)
        if(oldUser) {
            res.status(httpStatusCodes.UNAUTHORIZED).send({
                message: `user ${req.body.username} already exist!`
            })
        }
    }
    catch {
        next()
    }
}

export default userExistVerify