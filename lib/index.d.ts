import LunarSolarConverter from './package/converter.js';
declare class Converter extends LunarSolarConverter {
    _isValidDate(date: any): boolean;
    _parse_to_params(date: Date): number[];
    convertSolar2Lunar(date: any): any[];
    toLunar(date: any): string;
}
declare const _default: Converter;
export default _default;
