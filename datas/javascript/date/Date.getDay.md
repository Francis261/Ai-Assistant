# Date.prototype.getDay()

Source: https://devdocs.io/javascript/global_objects/date/getday

The getDay() method of Date instances returns the day of the week for this date according to local time, where 0 represents Sunday. For the day of the month, see Date.prototype.getDate().

## Try it

```
const birthday = new Date("August 19, 1975 23:15:30");
const day1 = birthday.getDay();
// Sunday - Saturday : 0 - 6

console.log(day1);
// Expected output: 2
```

## Syntax

```
getDay()
```

### Parameters

None.

### Return value

An integer, between 0 and 6, representing the day of the week for the given date according to local time: 0 for Sunday, 1 for Monday, 2 for Tuesday, and so on. Returns NaN if the date is invalid.

## Description

The return value of getDay() is zero-based, which is useful for indexing into arrays of days, for example:

```
const valentines = new Date("1995-02-14");
const day = valentines.getDay();
const dayNames = ["Sunday", "Monday", "Tuesday" /* , … */];

console.log(dayNames[day]); // "Monday"
```

However, for the purpose of internationalization, you should prefer using Intl.DateTimeFormat with the options parameter instead.

```
const options = { weekday: "long" };
console.log(new Intl.DateTimeFormat("en-US", options).format(valentines));
// "Monday"
console.log(new Intl.DateTimeFormat("de-DE", options).format(valentines));
// "Montag"
```

## Examples

### Using getDay()

The weekday variable has value 1, based on the value of the Date object xmas95, because December 25, 1995 is a Monday.

```
const xmas95 = new Date("1995-12-25T23:15:30");
const weekday = xmas95.getDay();

console.log(weekday); // 1
```

## Specifications

## Browser compatibility

## See also

- Date.prototype.getUTCDate()
- Date.prototype.getUTCDay()
- Date.prototype.setDate()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay
