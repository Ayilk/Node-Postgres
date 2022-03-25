"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _task = require("../controllers/task.controller");

var router = (0, _express.Router)();
// /api/tasks
router.post('/', _task.createTask);
router.get('/', _task.getTasks); // /api/tasks/id

router["delete"]('/:id', _task.deletTask);
router.put('/:id', _task.updateTask);
router.get('/:id', _task.getOneTask); // /api/tasks/project/:projectId

router.get('/project/:proyectid', _task.getTaskByProject);
var _default = router;
exports["default"] = _default;