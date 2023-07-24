import httpStatusCodes from "./httpStatusCodes.js";
import BaseError from "./baseError.js";

class Api401Error extends BaseError {
    constructor (
        name,
        statusCode = httpStatusCodes.UNAUTHORIZED,
        description = "Incorrect username or password",
        isOperational = true
    ) {
        super (name, statusCode, description, isOperational)
    }
}

export default Api401Error