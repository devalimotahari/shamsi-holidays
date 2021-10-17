# shamsi-holidays

> Holidays in Iran calender

[![NPM version](https://badge.fury.io/js/shamsi-holidays.svg)](https://www.npmjs.com/package/shamsi-holidays/)

You can get all dates of Holidays beasd on www.time.ir

This module provides dates of holidays for Iran, check the any specific date is holiday or not beased on online.

### Get all Holidays in a specific year

```javascript
const { getHolidaysYearOnline } = require('shamsi-holidays');

async function holiday() {
    const result = await getHolidaysYearOnline('1400');
    console.log(result);
}
holiday()
```

### Get all Holidays in a specific year based on offline

There are dates of holidays for 1400-1405

```javascript
const { getHolidays } = require('shamsi-holidays');

async function holiday() {
    const result = await getHolidays('1400');
    console.log(result);
}
holiday()
```


### Check status of Date based on online and send a request to time.ir

```javascript
const { isHolidaysOnline } = require('shamsi-holidays');

// date format = jYYYY/jMM/jDD | 1400/01/02

const date = '1400/01/02'
async function holiday() {
    const result = await isHolidaysOnline(date);
    console.log(result);
}
holiday()
```


### Check status of Date based on offline without any request to time.ir

```javascript
const { isHoliday } = require('shamsi-holidays');

// date format = jYYYY/jMM/jDD | 1400/01/02

const date = '1400/01/02'
async function holiday() {
    const result = await isHoliday(date);
    console.log(result);
}
holiday()
```

### Get all Holidays in specific month of year

```javascript
const { getHolidaysYearAndMonthOnline } = require('shamsi-holidays');

// month should be = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];

async function holiday() {
    const result = await getHolidaysYearAndMonthOnline('1400','1');
    console.log(result);
}
holiday()
```


### Get all Holidays in specific months of year

```javascript
const { getHolidaysYearAndMonthsOnline } = require('shamsi-holidays');

// month should be = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];

async function holiday() {
    const result = await getHolidaysYearAndMonthsOnline('1400', ['1',12'] );
    console.log(result);
}
holiday()
```