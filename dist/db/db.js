"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sequelieze = void 0;

var _sequelize = require("sequelize");

var sequelieze = new _sequelize.Sequelize('postgres', 'postgres', '1234', {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    require: 30000,
    idle: 10000
  },
  logging: false
});
exports.sequelieze = sequelieze;