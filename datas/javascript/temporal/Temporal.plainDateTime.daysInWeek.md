# Temporal.PlainDateTime.prototype.daysInWeek

Source: https://devdocs.io/javascript/global_objects/temporal/plaindatetime/daysinweek

The daysInWeek accessor property of Temporal.PlainDateTime instances returns a positive integer representing the number of days in the week of this date. It is calendar-dependent.

The set accessor of daysInWeek is undefined. You cannot change this property directly.

For general information and more examples, see Temporal.PlainDate.prototype.daysInWeek.

## Examples

### Using daysInWeek

```
const dt = Temporal.PlainDateTime.from("2021-07-01");
console.log(dt.daysInWeek); // 7
```

## Specifications

## Browser compatibility

## See also

- Temporal.PlainDateTime
- Temporal.PlainDateTime.prototype.with()
- Temporal.PlainDateTime.prototype.add()
- Temporal.PlainDateTime.prototype.subtract()
- Temporal.PlainDateTime.prototype.yearOfWeek
- Temporal.PlainDateTime.prototype.weekOfYear
- Temporal.PlainDateTime.prototype.dayOfWeek
- Temporal.PlainDateTime.prototype.daysInMonth
- Temporal.PlainDateTime.prototype.daysInYear
- Temporal.PlainDate.prototype.daysInWeek

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/daysInWeek
