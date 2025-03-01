"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  employees_querie: true,
  users_queries: true
};
Object.defineProperty(exports, "employees_querie", {
  enumerable: true,
  get: function get() {
    return _employeesQuerys.employees_querie;
  }
});
Object.defineProperty(exports, "users_queries", {
  enumerable: true,
  get: function get() {
    return _usersQuerys.users_queries;
  }
});
var _connection = require("./connection");
Object.keys(_connection).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _connection[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _connection[key];
    }
  });
});
var _employeesQuerys = require("./querys/employeesQuerys");
var _usersQuerys = require("./querys/usersQuerys");