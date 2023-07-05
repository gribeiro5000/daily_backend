import note from "../Models/note.js"

class NoteRepository {
    getAll() {

    }

    getById() {

    }

    insert(data) {
        const response = note.create({
            
        }).then(() => {
            return [200, 'Note created successful']
        }).catch((error) => {
            return [400, error]
        })
        return response
    }

    update() {

    }

    delete() {

    }
}

export default new NoteRepository