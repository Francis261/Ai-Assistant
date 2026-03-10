# Temporal.PlainDate.prototype.daysInWeek

Source: https://devdocs.io/javascript/global_objects/temporal/plaindate/daysinweek

The daysInWeek accessor property of Temporal.PlainDate instances returns a positive integer representing the number of days in the week of this date. It is calendar-dependent.

For the ISO 8601 calendar, this is always 7, but in other calendar systems it may differ from week to week. All commonly supported calendars use 7-day weeks.

The set accessor of daysInWeek is undefined. You cannot change this property directly.

## Examples

### Using daysInWeek

```
const date = Temporal.PlainDate.from("2021-07-01");
console.log(date.daysInWeek); // 7

const date2 = Temporal.PlainDate.from("2021-07-01[u-ca=chinese]");
console.log(date2.daysInWeek); // 7
```

## Specifications

## Browser compatibility

## See also

- Temporal.PlainDate
- Temporal.PlainDate.prototype.with()
- Temporal.PlainDate.prototype.add()
- Temporal.PlainDate.prototype.subtract()
- Temporal.PlainDate.prototype.yearOfWeek
- Temporal.PlainDate.prototype.weekOfYear
- Temporal.PlainDate.prototype.dayOfWeek
- Temporal.PlainDate.prototype.daysInMonth
- Temporal.PlainDate.prototype.daysInYear

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/daysInWeek
