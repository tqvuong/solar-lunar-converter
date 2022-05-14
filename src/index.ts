import LunarSolarConverter from './package/converter.js';

class Converter extends LunarSolarConverter {
    private _isValidDate(date: any): boolean {
        const _date = Date.parse(date);
        if (isNaN(_date)) {
            return false
        }
        return true
    }

    private _parse_to_params(date: any) {
        const _date = new Date(date);
        return [_date.getDate(), _date.getMonth() + 1, _date.getFullYear()];
    }

     convertSolar2Lunar(date: any) {
        if (!this._isValidDate(date)) {
            throw new Error(`${date} invalid date`);
        }
        const [day, month, year] = this._parse_to_params(date);
        return super.convertSolar2Lunar(day, month, year);
    }

    toLunar(date: any): string {
        const [day, month, year, _] = this.convertLunar2Solar(date);
        return `${day}/${month}/${year}`
    }
}

const lunarSolarConverter = new Converter()

export {
    lunarSolarConverter,
}

export default lunarSolarConverter;
