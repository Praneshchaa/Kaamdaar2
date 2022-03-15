import asyncHandler from 'express-async-handler'
import Worker from '../models/workerModel.js'

//@description fetch all workers
//@route GET/api/workers
//@access public
const getWorkers = asyncHandler(async (req, res) => {
  const workers = await Worker.find({})

  res.json(workers)
})

//@description fetch single worker
//@route GET/api/workers
//@access public
const getWorkerById = asyncHandler(async (req, res) => {
  const worker = await Worker.findById(req.params.id)

  if (worker) {
    res.json(worker)
  } else {
    res.status(404)
    throw new Error('Worker not found')
  }
})

export { getWorkers, getWorkerById }
