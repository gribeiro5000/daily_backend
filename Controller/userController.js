import bcrypt from "bcrypt"
import Api400Error from "../Error_handler/api400Error.js";
import httpStatusCodes from "../Error_handler/httpStatusCodes.js"
import userRepository from "../Model/Repositories/userRepository.js";
import Api401Error from "../Error_handler/api401Error.js";
import generateWebToken from "../Auth/generateWebToken.js";
import jwt_blacklistRepository from "../Model/Repositories/jwt_blacklistRepository.js";

class UserController {
    async readAll(req, res, next) {
        try{
            const row = await userRepository.getAll()
            res.status(httpStatusCodes.OK).send(row)
        }
        catch(error) {
            next(error)
        }
    }

    async read(req, res, next) {
        try {
            const row = await userRepository.getById(req.params.id)
            console.log(res.status(httpStatusCodes.OK).send(row))
        } catch(error) {
            next(error)
        }
    }

    async login(req, res, next) {
        try {
            const row = await userRepository.getByUsername(req.body.username)
            if(await bcrypt.compare(req.body.password, row.password)){
                const token = generateWebToken(row.id)
                res.status(httpStatusCodes.OK).send(token)
            } else {
                throw new Api401Error()
            }
        } catch(error) {
            next(error)
        }
    }

    async logout(req, res, next) {
        try {
            const token = req.headers['x-access-token']
            await jwt_blacklistRepository.insert(token)
            const resp = {
                id: null,
                token: null
            }
            res.status(httpStatusCodes.OK).send(resp)
        }
        catch(error) {
            next(error)
        }
    }

    async create(req, res, next) {
        try {
            req.body.password = await bcrypt.hash(req.body.password, 10)
            const row = await userRepository.insert(req.body)
            res.status(httpStatusCodes.CREATED).send(row)
        }
        catch(error) {
            next(error)
        }
    }

    async update(req, res, next) {
        try {
            await userRepository.getById(req.params.id)
            const row = await userRepository.update(req.body, req.params.id)
            res.status(httpStatusCodes.OK).send(row)
        }
        catch(error) {
            next(error)
        }
    }

    async delete(req, res, next) {
        try {
            await userRepository.getById(req.params.id)
            const row = await userRepository.delete(req.params.id)
            res.status(httpStatusCodes.OK).send(row)
        } 
        catch(error) {
            next(error)
        }
    }
}

export default new UserController