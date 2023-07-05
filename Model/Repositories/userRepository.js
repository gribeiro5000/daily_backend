import user from "../Models/user.js"

class NoteRepository {
    getAll() {
        const response = user.findAll().then(result => {
            return [200, result]
        }).catch(error => {
            return [404, error]
        })

        return response
    }

    getById(id) {
        const response = user.findByPk(id).then(result => {
            return [200, result]
        }).catch(error => {
            return [404, error]
        })

        return response
    }

    insert(data) {
        const response = user.create({
            name: data.name,
            lastName: data.lastName,
            birthday: data.birthday,
            country: data.country,
            city: data.city,
            username: data.username,
            password: data.password
        }).then(() => {
            return [201, 'User created successfully']
        }).catch((error) => {
            return [400, error]
        })
        return response
    }

    update(data, id) {
        const response = user.update(data, {
            where: {
                id: id
            }
        }).then(() => {
            return [200, "user updated successfully"]
        }).catch(error => {
            return [400, error]
        })

        return response
    }

    delete(id) {
        const response = user.destroy({
            where: {
                id: id
            }
        }).then(() => {
            return [200, 'User deleted successfully']
        }).catch(error => {
            return [400, error]
        })
        return response
    }
}

export default new NoteRepository