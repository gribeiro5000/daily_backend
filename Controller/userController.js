import "dotenv/config"
import jsonwebtoken from "jsonwebtoken";
import Api400Error from "../Error_handler/api400Error.js";
import httpStatusCodes from "../Error_handler/httpStatusCodes.js"
import userRepository from "../Model/Repositories/userRepository.js";
import Api401Error from "../Error_handler/api401Error.js";

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

    async readByUsername(req, res, next) {
        try {
            if(!req.body.username || !req.body.password){
                throw new Api400Error("some argument is invalid")
            }
            const row = await userRepository.getByUsername(req.body.username)
            if(row.username == req.body.username && row.password == req.body.password){
                const token = jsonwebtoken.sign({user: row.id}, process.env.JWT_SECRET)
                res.status(httpStatusCodes.OK).json(token)
            } else {
                throw new Api401Error(Error)
            }
        } catch(error) {
            next(error)
        }
    }

    async create(req, res, next) {
        try {
            if(req.body.name == null || 
                req.body.lastName == null || 
                req.body.birthday == null ||
                req.body.country == null ||
                req.body.city == null ||
                req.body.username == null ||
                req.body.password == null){
                    throw new Api400Error("some argument is invalid")
                }
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