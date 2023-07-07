import httpStatusCodes from "./httpStatusCodes.js";
import BaseError from "./baseError.js";

class Api500Error extends BaseError {
    constructor (
        name,
        statusCode = httpStatusCodes.INTERNAL_SERVER,
        description = "Internal Server Error",
        isOperational = true
    ) {
        super(name, statusCode, isOperational, description)
    }
}

export default Api500Error