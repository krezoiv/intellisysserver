"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var DataCommissionConceptModel = /*#__PURE__*/(0, _createClass2["default"])(function DataCommissionConceptModel(_ref) {
  var idDataCommissionConcept = _ref.idDataCommissionConcept,
    concept = _ref.concept,
    idCommissionType = _ref.idCommissionType;
  (0, _classCallCheck2["default"])(this, DataCommissionConceptModel);
  Object.assign(this, {
    idDataCommissionConcept: idDataCommissionConcept,
    concept: concept,
    idCommissionType: idCommissionType
  });
});
var _default = DataCommissionConceptModel;
exports["default"] = _default;