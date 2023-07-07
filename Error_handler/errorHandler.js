export function logError(err) {
    console.error(err)
}

export function logErrorMiddleware (err, req, res, next) {
    logError(err)
    next(err)
}

export function returnError (err, req, res, next) {
    res.status(err.statusCode || 500).send(err.message)
}

export function isOperationalError(error) {
    if(error instanceof BaseError) {
        return error.isOperational
    }
    return false
}
