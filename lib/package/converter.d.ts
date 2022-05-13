export default LunarSolarConverter;
declare class LunarSolarConverter {
    convertSolar2Lunar(dd: any, mm: any, yy: any, timeZone: any): any[];
    convertLunar2Solar(lunarDay: any, lunarMonth: any, lunarYear: any, lunarLeap: any, timeZone: any): number[];
}
