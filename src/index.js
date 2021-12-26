import LunarSolarConverter from './package/converter.js';


class Converter extends LunarSolarConverter {
    _isValidDate(date) {
        return (new Date(date) !== "Invalid Date") && !isNaN(new Date(date));
    }

    _parse_to_params(date) {
        if (!this._isValidDate(date)) {
            throw new Error(`${date} invalid date`)
        }

        date = new Date(date);
        return [date.getDate(), date.getMonth() + 1, date.getFullYear()]
    }

    convertSolar2Lunar(date) {
        const [day, month, year] = this._parse_to_params(date)
        return super.convertSolar2Lunar(day, month, year);
    }
}

export default new Converter()
