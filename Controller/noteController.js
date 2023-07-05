import noteRepository from "../Model/Repositories/noteRepository.js"

class NoteController {
    index(req, res) {
        res.json({"name": "Gabriel"})
    }

    async store(req, res) {
        const row = await noteRepository.insert(req.body)
        res.status(row[0]).send(row[1])
    }
}

export default new NoteController