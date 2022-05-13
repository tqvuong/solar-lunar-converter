"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const converter_js_1 = require("./package/converter.js");
class Converter extends converter_js_1.default {
    _isValidDate(date) {
        return date instanceof Date && !Number.isNaN(date);
    }
    _parse_to_params(date) {
        const _date = new Date(date);
        return [_date.getDate(), _date.getMonth() + 1, _date.getFullYear()];
    }
    convertSolar2Lunar(date) {
        if (!this._isValidDate(date)) {
            throw new Error(`${date} invalid date`);
        }
        const [day, month, year] = this._parse_to_params(date);
        return super.convertSolar2Lunar(day, month, year);
    }
    toLunar(date) {
        const [day, month, year, _] = this.convertLunar2Solar(date);
        return `${day}/${month}/${year}`;
    }
}
exports.default = new Converter();
