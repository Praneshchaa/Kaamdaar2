import express from 'express'
const router = express.Router()
import { getWorkers, getWorkerById } from '../controllers/workerController.js'

router.route('/').get(getWorkers)

router.route('/:id').get(getWorkerById)

//res.json(worker)
export default router
