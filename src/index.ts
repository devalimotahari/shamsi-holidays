// import { getHolidaysYearOnline, updateStaticHolidayDays } from './holidays';

export {
    getHolidaysYearOnline,
    getHolidaysYearAndMonthOnline,
    getHolidaysYearAndMonthsOnline,
    isHolidaysOnline,
    updateStaticHolidayDays,
    isHolidayOffline as isHoliday,
    getHolidaysYearOffline as getHolidays
} from './holidays';

// function updateYears() {
//     const years = [1400, 1401, 1402, 1403, 1404, 1405, 1406];
//     for (const year of years) {
//         console.log(`updating year ${year} ...`)
//         updateStaticHolidayDays(year.toString()).then(()=>console.log(`year ${year} updated`));
        
//     }
// }

// updateYears();

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