import Api400Error from "../../Error_handler/api400Error.js"
import Api500Error from "../../Error_handler/api500Error.js"
import Jwt_blacklist from "../Models/jwt_blacklist.js"

class Jwt_blacklistRepository {
    getByToken(token) {
        const response = Jwt_blacklist.findOne({
            where: {
                token: token
            }
        }).then(result => {
            return result
        }).catch(error => {
            throw new Api400Error(error)
        })

        return response
    }

    insert(token) {
        const response = Jwt_blacklist.create({
            token: token
        }).then(result => {
            return result
        }).catch(error => {
            throw new Api500Error(error)
        })

        return response
    }

    delete(token) {
        const response = Jwt_blacklist.destroy({
            where: {
                token: token
            }
        }).then(result => {
            return result
        }).catch(error => {
            throw new Api500Error(error)
        })

        return response
    }
}

export default new Jwt_blacklistRepository