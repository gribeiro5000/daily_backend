import { Router } from "express";
import noteController from "../Controller/noteController.js";
import userController from "../Controller/userController.js";

const router = Router()

router.get('/note', noteController.index)
router.post('/note', noteController.store)

router.get('/user', userController.readAll)
router.get('/user/:id', userController.read)
router.post('/user', userController.create)
router.put('/user/:id', userController.update)
router.delete('/user/:id', userController.delete)

export default router