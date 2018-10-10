"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ratioMaps;

exports.default = stringDisplayWidth;

var _FontWeight = require("./FontWeight");

var _FontWeight2 = _interopRequireDefault(_FontWeight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function jsonToMap(jsonObj) {
    return new Map(Object.entries(jsonObj));
}

var ratioMaps = (_ratioMaps = {}, _defineProperty(_ratioMaps, _FontWeight2.default.regular, jsonToMap(require("./ratios/regular"))), _defineProperty(_ratioMaps, _FontWeight2.default.medium, jsonToMap(require("./ratios/medium"))), _defineProperty(_ratioMaps, _FontWeight2.default.semiBold, jsonToMap(require("./ratios/semiBold"))), _ratioMaps);

function charCodeToFontSizeRatio(ratioMap, charCode) {
    if (charCode > 255) {
        return 1.005;
    }
    return ratioMap.get(charCode) || 0.5;
}

function stringDisplayWidth(str, fontSize) {
    var fontWeight = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _FontWeight2.default.regular;

    var ratioMap = ratioMaps[fontWeight];
    var rTotal = 0;
    for (var i = 0; i < str.length; i++) {
        var c = str.charCodeAt(i);
        rTotal += charCodeToFontSizeRatio(ratioMap, c);
    }
    return rTotal * fontSize;
}