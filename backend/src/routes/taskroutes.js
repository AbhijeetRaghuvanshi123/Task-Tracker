import express from 'express';
import {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask
} from '../controllers/taskcontroller.js';
import {
  validateCreateTask,
  validateUpdateTask,
  handleValidationErrors
} from '../middleware/validation.js';

const router = express.Router();

// Task routes
router.route('/')
  .get(getAllTasks)
  .post(validateCreateTask, handleValidationErrors, createTask);

router.route('/:id')
  .get(getTaskById)
  .put(validateUpdateTask, handleValidationErrors, updateTask)
  .delete(deleteTask);

export default router;
