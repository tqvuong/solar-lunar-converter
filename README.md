### Solar Lunar Converter

- Copyright (c) 2006 [Ho Ngoc Duc](http://www.informatik.uni-leipzig.de/~duc/amlich)

### Usage

##### 1. Installation

`yarn add solar-lunar-converter`
or
`npm i solar-lunar-converter`

##### 2. Converter

```
import solarLunarConverter from 'solar-lunar-converter';

const solarDate = new Date('Sun Dec 26 2021 20:35:23 GMT+0700');
const lunarDate = solarLunarConverter.convertSolar2Lunar(solarDate) // [23, 11, 2021, 0]
```
