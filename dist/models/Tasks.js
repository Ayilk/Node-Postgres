"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _db = require("../db/db");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Task = _db.sequelieze.define('task', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  name: {
    type: _sequelize["default"].TEXT
  },
  done: {
    type: _sequelize["default"].BOOLEAN
  },
  proyectid: {
    type: _sequelize["default"].INTEGER
  }
}, {
  timestamps: false
});

var _default = Task;
exports["default"] = _default;