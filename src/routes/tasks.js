import { Router } from "express";
const router = Router();

import { createTask, deletTask, getOneTask, getTaskByProject, getTasks, updateTask } from "../controllers/task.controller";

// /api/tasks
router.post('/', createTask);
router.get('/', getTasks);

// /api/tasks/id

router.delete('/:id', deletTask)
router.put('/:id', updateTask)
router.get('/:id', getOneTask)

// /api/tasks/project/:projectId

router.get('/project/:proyectid', getTaskByProject)

export default router;