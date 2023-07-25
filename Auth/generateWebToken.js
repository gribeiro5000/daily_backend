import "dotenv/config"
import jsonwebtoken from "jsonwebtoken"

function generateWebToken(id) {
    const token = jsonwebtoken.sign({userId: id}, process.env.JWT_SECRET, {
        expiresIn: '1h'
    })
    const resp = {
        id: id,
        accessToken: token
    }
    return resp
}

export default generateWebToken