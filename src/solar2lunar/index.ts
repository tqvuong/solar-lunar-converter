import LunarSolarConverter from "../package/converter";

class Solar2LunarConverter extends LunarSolarConverter {
  private _isValidDate(date: any): boolean {
    const _date = Date.parse(date);
    if (isNaN(_date)) {
      return false;
    }
    return true;
  }

  private _parse_to_params(date: any): Array<number> {
    const _date = new Date(date);
    return [_date.getDate(), _date.getMonth() + 1, _date.getFullYear()];
  }

  public toArray(date: any): Array<number> {
    if (!this._isValidDate(date)) {
      throw new Error(`${date} invalid date`);
    }
    const [day, month, year] = this._parse_to_params(date);
    return super.convertSolar2Lunar(day, month, year);
  }

  public toLunar(date: any): string {
    const [day, month, year, _] = this.toArray(date);
    return `${day}/${month}/${year}`;
  }
}

export default Solar2LunarConverter;
