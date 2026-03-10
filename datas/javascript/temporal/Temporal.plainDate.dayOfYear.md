# Temporal.PlainDate.prototype.dayOfYear

Source: https://devdocs.io/javascript/global_objects/temporal/plaindate/dayofyear

The dayOfYear accessor property of Temporal.PlainDate instances returns a positive integer representing the 1-based day index in the year of this date. The first day of this year is 1, and the last day is the daysInYear. It is calendar-dependent.

The set accessor of dayOfYear is undefined. You cannot change this property directly. To create a new Temporal.PlainDate object with the desired new dayOfYear value, use the add() or subtract() method with the appropriate number of days.

## Examples

### Using dayOfYear

```
const date = Temporal.PlainDate.from("2021-07-01");
console.log(date.dayOfYear); // 182

const date2 = Temporal.PlainDate.from("2021-07-01[u-ca=chinese]");
console.log(date2.dayOfYear); // 140

const date3 = Temporal.PlainDate.from("2020-07-01");
console.log(date3.dayOfYear); // 183; 2020 is a leap year
```

### Changing dayOfYear

PlainDate does not support changing dayOfYear directly. To change the day of the year, you need to first figure out the difference in days to your desired day of the year, then use add or subtract to adjust the date accordingly. For example, to change to the 100th day of this year (whether before or after):

```
function getDayInSameYear(date, destDayOfYear) {
  return date.add({ days: destDayOfYear - date.dayOfYear });
}

console.log(
  getDayInSameYear(Temporal.PlainDate.from("2021-07-01"), 100).toString(),
); // 2021-04-10
console.log(
  getDayInSameYear(Temporal.PlainDate.from("2021-01-01"), 100).toString(),
); // 2021-04-10
console.log(
  getDayInSameYear(Temporal.PlainDate.from("2020-01-01"), 100).toString(),
); // 2020-04-09
```

By default, with() constrains the day to the range of valid values. So you can always use { month: 1, day: 1 } to set the day to the first day of the year, even if the first day does not have the number 1. Similarly, the following will set the day to the last day of the year, regardless of how many days are in the last month or year:

```
const date = Temporal.PlainDate.from("2021-07-01");
const lastDay = date.with({ month: Number.MAX_VALUE, day: Number.MAX_VALUE }); // 2021-12-31
```

## Specifications

## Browser compatibility

## See also

- Temporal.PlainDate
- Temporal.PlainDate.prototype.with()
- Temporal.PlainDate.prototype.add()
- Temporal.PlainDate.prototype.subtract()
- Temporal.PlainDate.prototype.year
- Temporal.PlainDate.prototype.day
- Temporal.PlainDate.prototype.dayOfWeek
- Temporal.PlainDate.prototype.daysInYear

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/dayOfYear
