"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _municipality = require("../../controllers/locations/municipality.controllers");
var router = (0, _express.Router)();
router.get('/municipalities', _municipality.getListMunicipality);
router.get('/municipalitiesOnCampus', _municipality.getListMunicipalityOnCampus);
router.get('/municipality/:idMunicipality', _municipality.getMunicipalityById);
router.get('/municipalities/:idDepartment', _municipality.getMunicipalitiesByIdDepartment);
var _default = router;
exports["default"] = _default;