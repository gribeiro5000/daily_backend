import userRepository from "../Model/Repositories/userRepository.js";

class UserController {
    async readAll(req, res) {
        const row = await userRepository.getAll()
        res.status(row[0]).send(row[1])
    }

    async read(req, res) {
        const row = await userRepository.getById(req.params.id)
        res.status(row[0]).send(row[1])
    }

    async create(req, res) {
        const row = await userRepository.insert(req.body)
        res.status(row[0]).send(row[1])
    }

    async update(req, res) {
        const row = await userRepository.update(req.body, req.params.id)
        res.status(row[0]).send(row[1])
    }

    async delete(req, res) {
        const row = await userRepository.delete(req.params.id)
        res.status(row[0]).send(row[1])
    }
}

export default new UserController