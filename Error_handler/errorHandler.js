import httpStatusCodes from "./httpStatusCodes.js"

export function logError(err) {
    console.error(err)
}

export function returnError (err, req, res, next) {
    logError(err)
    res.status(err.statusCode || httpStatusCodes.INTERNAL_SERVER).send(err)
}
