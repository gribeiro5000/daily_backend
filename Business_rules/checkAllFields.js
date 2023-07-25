import httpStatusCodes from "../Error_handler/httpStatusCodes.js"

function userCreate(req, res, next) {
    if(!req.body.name || !req.body.lastName || !req.body.birthday ||
        !req.body.country || !req.body.city || !req.body.username ||
        !req.body.password){
            res.status(httpStatusCodes.BAD_REQUEST).send({
                message: "some argument is invalid"
            })
        }
    else {
        next()
    }
}

function userLogin(req, res, next) {
    if(!req.body.username || !req.body.password){
        res.status(httpStatusCodes.BAD_REQUEST).send({
            messae: "some argument is invalid"
        })
    }
    else {
        next()
    }
}

export default {
    userCreate: userCreate,
    userLogin: userLogin
}