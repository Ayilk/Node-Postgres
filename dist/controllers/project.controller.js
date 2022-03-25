"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createProject = createProject;
exports.deleteProject = deleteProject;
exports.getProjects = getProjects;
exports.getProjectsId = getProjectsId;
exports.updateProject = updateProject;

var _Project = _interopRequireDefault(require("../models/Project"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getProjects(_x, _x2) {
  return _getProjects.apply(this, arguments);
}

function _getProjects() {
  _getProjects = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var projects;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _Project["default"].findAll();

          case 2:
            projects = _context.sent;
            res.json({
              data: projects
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getProjects.apply(this, arguments);
}

function getProjectsId(_x3, _x4) {
  return _getProjectsId.apply(this, arguments);
}

function _getProjectsId() {
  _getProjectsId = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var id, projectId;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.params.id;
            _context2.prev = 1;
            _context2.next = 4;
            return _Project["default"].findOne({
              where: {
                id: id
              }
            });

          case 4:
            projectId = _context2.sent;
            res.json(projectId);
            _context2.next = 12;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            console.log(_context2.t0);
            res.send("Algo salio mal");

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 8]]);
  }));
  return _getProjectsId.apply(this, arguments);
}

function createProject(_x5, _x6) {
  return _createProject.apply(this, arguments);
}

function _createProject() {
  _createProject = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var _req$body, name, priority, description, deliverydate, newProject;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, priority = _req$body.priority, description = _req$body.description, deliverydate = _req$body.deliverydate;
            _context3.prev = 1;
            _context3.next = 4;
            return _Project["default"].create({
              name: name,
              priority: priority,
              description: description,
              deliverydate: deliverydate
            }, {
              fields: ['name', 'priority', 'description', 'deliverydate']
            });

          case 4:
            newProject = _context3.sent;

            if (!newProject) {
              _context3.next = 7;
              break;
            }

            return _context3.abrupt("return", res.json({
              message: "Projecto creado exitosamente",
              data: newProject
            }));

          case 7:
            _context3.next = 13;
            break;

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](1);
            console.log(_context3.t0);
            res.status(500).json({
              message: "Algo salió mal"
            });

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 9]]);
  }));
  return _createProject.apply(this, arguments);
}

function deleteProject(_x7, _x8) {
  return _deleteProject.apply(this, arguments);
}

function _deleteProject() {
  _deleteProject = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, projectDelet;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _context4.next = 3;
            return _Project["default"].destroy({
              where: {
                id: id
              }
            });

          case 3:
            projectDelet = _context4.sent;
            res.json({
              message: "Projecto eliminado exitosamente",
              count: projectDelet
            });

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _deleteProject.apply(this, arguments);
}

function updateProject(_x9, _x10) {
  return _updateProject.apply(this, arguments);
}

function _updateProject() {
  _updateProject = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var id, _req$body2, name, priority, description, deliverydate, projectUpdated;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, name = _req$body2.name, priority = _req$body2.priority, description = _req$body2.description, deliverydate = _req$body2.deliverydate;
            _context6.next = 4;
            return _Project["default"].findAll({
              attributes: ['id', 'name', 'description', 'deliverydate'],
              where: {
                id: id
              }
            });

          case 4:
            projectUpdated = _context6.sent;

            if (projectUpdated.length > 0) {
              projectUpdated.forEach( /*#__PURE__*/function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(el) {
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.next = 2;
                          return el.update({
                            name: name,
                            priority: priority,
                            description: description,
                            deliverydate: deliverydate
                          });

                        case 2:
                        case "end":
                          return _context5.stop();
                      }
                    }
                  }, _callee5);
                }));

                return function (_x11) {
                  return _ref.apply(this, arguments);
                };
              }());
            }

            return _context6.abrupt("return", res.json({
              message: "Projecto actualizado exitosamente",
              data: projectUpdated
            }));

          case 7:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _updateProject.apply(this, arguments);
}