import Api400Error from "../../Error_handler/api400Error.js"
import note from "../Models/note.js"

class NoteRepository {
    getAll(userId) {
        const response = note.findAll({
            where: {
                UserId: userId
            }
        }).then(result => {
            return result
        }).catch(error => {
            throw new Api400Error(error)
        })

        return response
    }

    getById(id) {
        const response = note.findOne({
            where: {
                id: id
            }
        }).then(result => {
            return result
        }).catch(error => {
            throw new Api400Error(error)
        })

        return response
    }

    insert(data, userId) {
        const response = note.create({
            annotation: data.annotation,
            day: data.day,
            UserId: userId
        }).then(result => {
            return result
        }).catch(error => {
            return error
        })
        return response
    }

    update(data, id) {
        const response = note.update(data, {
            where: {
                id: id
            }
        }).then(() => {
            return 'note updated successfully'
        }).catch(error => {
            throw new Api400Error(error)
        })

        return response
    }

    delete(id) {
        const response = note.destroy({
            where: {
                id: id
            }
        }).then(() => {
            return 'Note deleted successfully'
        }).catch(error => {
            throw new Api400Error(error)
        })

        return response
    }
}

export default new NoteRepository