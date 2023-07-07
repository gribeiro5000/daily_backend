import httpStatusCodes from "../Error_handler/httpStatusCodes.js"

import userRepository from "../Model/Repositories/userRepository.js";

class UserController {
    async readAll(req, res) {
        try{
            const row = await userRepository.getAll()
            res.status(httpStatusCodes.OK).send(row)
        }
        catch(error) {
            res.status(error.statusCode).send(error)
        }
    }

    async read(req, res) {
        try {
            const row = await userRepository.getById(req.params.id)
            res.status(httpStatusCodes.OK).send(row)
        } catch(error) {
            res.status(error.statusCode).send(error)
        }
    }

    async create(req, res) {
        try {
            const row = await userRepository.insert(req.body)
            res.status(httpStatusCodes.CREATED).send(row)
        }
        catch(error) {
            res.status(error.statusCode).send(error)
        }
    }

    async update(req, res) {
        try {
            const row = await userRepository.update(req.body, req.params.id)
            res.status(httpStatusCodes.OK).send(row)
        }
        catch(error) {
            res.status(error.statusCode).send(error)
        }
    }

    async delete(req, res) {
        try {
            const row = await userRepository.delete(req.params.id)
            res.status(httpStatusCodes.OK).send(row)
        } 
        catch(error) {
            res.status(error.statusCode).send(error)
        }
    }
}

export default new UserController