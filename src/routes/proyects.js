import { Router } from "express";
import { createProject, deleteProject, getProjects, getProjectsId, updateProject } from "../controllers/project.controller";
const router = Router();

// /api/projects/
router.post('/', createProject);
router.get('/', getProjects);

// /api/projects/:projectId
router.get('/:id',getProjectsId)
router.delete('/:id', deleteProject)
router.put('/:id', updateProject)


export default router;
