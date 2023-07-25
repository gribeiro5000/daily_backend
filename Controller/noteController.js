import httpStatusCodes from "../Error_handler/httpStatusCodes.js"
import noteRepository from "../Model/Repositories/noteRepository.js"

class NoteController {
    async readAll(req, res, next) {
        try {
            const row = await noteRepository.getAll(req.params.id)
            res.status(httpStatusCodes.OK).send(row)
        }
        catch(error) {
            next(error)
        }
    }

    async read(req, res, next) {
        try{
            const row = await noteRepository.getById(req.params.noteId)
            res.status(httpStatusCodes.OK).send(row)
        }
        catch(error) {
            next(error)
        }
    }

    async create(req, res, next) {
        try {
            const row = await noteRepository.insert(req.body, req.params.id)
            res.status(httpStatusCodes.CREATED).send(row)
        }
        catch(error) {
            next(error)
        }
    }

    async update(req, res, next) {
        try {
            await noteRepository.getById(req.params.noteId)
            const row = await noteRepository.update(req.body, req.params.noteId)
            res.status(httpStatusCodes.OK).send(row)
        }
        catch(error) {
            next(error)
        }
    }

    async delete(req, res, next) {
        try {
            await noteRepository.getById(req.params.noteId)
            const row = await noteRepository.delete(req.params.noteId)
            res.status(httpStatusCodes.OK).send(row)
        }
        catch(error) {
            next(error)
        }
    }
}

export default new NoteController