import { Router } from "express";
import { returnError } from "../Error_handler/errorHandler.js"
import noteController from "../Controller/noteController.js";
import userController from "../Controller/userController.js";
import authorization from "../Auth/authorization.js";
import userExistVerify from "../Business_rules/userExistVerify.js";
import checkAllFields from "../Business_rules/checkAllFields.js"

const router = Router()

router.get('/note/:id', authorization.verifyJWT, authorization.hasRoutePermission, noteController.readAll)
router.get('/note/:id/:noteId', authorization.verifyJWT, authorization.hasRoutePermission, noteController.read)
router.post('/note/:id', authorization.verifyJWT, authorization.hasRoutePermission, noteController.create)
router.put('/note/:id/:noteId', authorization.verifyJWT, authorization.hasRoutePermission, noteController.update)
router.delete('/note/:id/:noteId', authorization.verifyJWT, authorization.hasRoutePermission, noteController.delete)

router.get('/user', authorization.verifyJWT, userController.readAll)
router.get('/user/:id', authorization.verifyJWT, authorization.hasRoutePermission, userController.read)
router.post('/user', checkAllFields.userCreate, userExistVerify, userController.create)
router.put('/user/:id', authorization.verifyJWT, authorization.hasRoutePermission, userController.update)
router.delete('/user/:id', authorization.verifyJWT, authorization.hasRoutePermission, userController.delete)

router.post('/login', checkAllFields.userLogin, userController.login)
router.post('/logout', authorization.verifyJWT, userController.logout)

router.use(returnError)

export default router