import httpStatusCodes from "./httpStatusCodes.js";
import BaseError from "./baseError.js";

class Api400Error extends BaseError {
    constructor(
        name,
        statusCode = httpStatusCodes.BAD_REQUEST,
        description = 'Bad Request',
        isOperational = true
    ) {
        super(name, statusCode, isOperational, description)
    }
}

export default Api400Error