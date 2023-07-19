import Api400Error from "../../Error_handler/api400Error.js"
import Api404Error from "../../Error_handler/api404Error.js"
import Api500Error from "../../Error_handler/api500Error.js"

import user from "../Models/user.js"

class UserRepository {
    getAll() {
        const response = user.findAll().then(result => {
            if(result == null)
                throw new Api404Error('users not found')
            else
                return result
        }).catch(error => {
            throw new Api400Error(error)
        })

        return response
    }

    getById(id) {
        const response = user.findOne({
            where: {
                id: id
            }
        }).then(result => {
            if(result == null)
                throw new Api404Error(`users with id ${id} not found`)
            else
                return result
        }).catch(error => {
            throw new Api400Error (error)
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
            return 'User created successfully'
        }).catch((error) => {
            throw new Api500Error(error)
        })
        return response
    }

    update(data, id) {
        const response = user.update(data, {
            where: {
                id: id
            }
        }).then(() => {
            return "user updated successfully"
        }).catch(error => {
            throw new Api400Error(error)
        })

        return response
    }

    delete(id) {
        const response = user.destroy({
            where: {
                id: id
            }
        }).then(() => {
            return 'User deleted successfully'
        }).catch(error => {
            throw new Api400Error(error)
        })
        return response
    }
}

export default new UserRepository