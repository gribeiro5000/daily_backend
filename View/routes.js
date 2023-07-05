import { Router } from "express";
import dailyController from "../Controller/dailyController.js";

const router = Router()

router.get('/daily', dailyController.index)

export default router