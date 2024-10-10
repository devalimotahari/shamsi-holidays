"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHolidays = exports.isHoliday = exports.updateStaticHolidayDays = exports.isHolidaysOnline = exports.getHolidaysYearAndMonthsOnline = exports.getHolidaysYearAndMonthOnline = exports.getHolidaysYearOnline = void 0;
var holidays_1 = require("./holidays");
var holidays_2 = require("./holidays");
Object.defineProperty(exports, "getHolidaysYearOnline", { enumerable: true, get: function () { return holidays_2.getHolidaysYearOnline; } });
Object.defineProperty(exports, "getHolidaysYearAndMonthOnline", { enumerable: true, get: function () { return holidays_2.getHolidaysYearAndMonthOnline; } });
Object.defineProperty(exports, "getHolidaysYearAndMonthsOnline", { enumerable: true, get: function () { return holidays_2.getHolidaysYearAndMonthsOnline; } });
Object.defineProperty(exports, "isHolidaysOnline", { enumerable: true, get: function () { return holidays_2.isHolidaysOnline; } });
Object.defineProperty(exports, "updateStaticHolidayDays", { enumerable: true, get: function () { return holidays_2.updateStaticHolidayDays; } });
Object.defineProperty(exports, "isHoliday", { enumerable: true, get: function () { return holidays_2.isHolidayOffline; } });
Object.defineProperty(exports, "getHolidays", { enumerable: true, get: function () { return holidays_2.getHolidaysYearOffline; } });
function updateYears() {
    var years = [1400, 1401, 1402, 1403, 1404, 1405, 1406];
    var _loop_1 = function (year) {
        console.log("updating year " + year + " ...");
        (0, holidays_1.updateStaticHolidayDays)(year.toString()).then(function () { return console.log("year " + year + " updated"); });
    };
    for (var _i = 0, years_1 = years; _i < years_1.length; _i++) {
        var year = years_1[_i];
        _loop_1(year);
    }
}
updateYears();
// import {
//     getHolidaysYearAndMonthOnline,
//     getHolidaysYearOnline,
//     getHolidaysYearAndMonthsOnline,
//     isHolidaysOnline,
//     updateStaticHolidayDays,
//     isHolidayOffline as isHoliday,
//     getHolidaysYearOffline as getHolidays
// } from './holidays';
// async function runTests() {
//     try {
//         // let x = await getHolidaysYearOnline()
//         // console.log("getHolidaysYearOnline", x);
//         // let x1 = await getHolidaysYearAndMonthOnline()
//         // console.log("getHolidaysYearAndMonthOnline:", x1);
//         // let x2 = await getHolidaysYearAndMonthsOnline("1400", ['1', '2'])
//         // console.log("getHolidaysYearAndMonthsOnline:", x2);
//         // let x3 = await isHolidaysOnline("1400/01/02")
//         // console.log("isHolidaysOnline:", x3);
//         // let x4 = await updateStaticHolidayDays('1406')
//         // console.log("updateStaticHolidayDays:", x4);
//         let x5 = await isHoliday("1400/01/01")
//         console.log("isHoliday:", x5);
//         // let x6 = await getHolidays("1400")
//         // console.log("getHolidays:", x6);
//     } catch (error) {
//         console.log(error);
//         console.log(error);
//     }
// }
// runTests()
//# sourceMappingURL=index.js.map