"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var DataCommissionDetailModel = /*#__PURE__*/(0, _createClass2["default"])(function DataCommissionDetailModel(_ref) {
  var idDataDetail = _ref.idDataDetail,
    reference = _ref.reference,
    idDataCommissionConcept = _ref.idDataCommissionConcept,
    description = _ref.description,
    value = _ref.value,
    idCommissionType = _ref.idCommissionType,
    idDataBatch = _ref.idDataBatch;
  (0, _classCallCheck2["default"])(this, DataCommissionDetailModel);
  Object.assign(this, {
    idDataDetail: idDataDetail,
    reference: reference,
    idDataCommissionConcept: idDataCommissionConcept,
    description: description,
    value: value,
    idCommissionType: idCommissionType,
    idDataBatch: idDataBatch
  });
});
var _default = DataCommissionDetailModel;
exports["default"] = _default;