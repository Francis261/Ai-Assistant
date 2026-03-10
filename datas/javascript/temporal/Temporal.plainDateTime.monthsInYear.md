# Temporal.PlainDateTime.prototype.monthsInYear

Source: https://devdocs.io/javascript/global_objects/temporal/plaindatetime/monthsinyear

The monthsInYear accessor property of Temporal.PlainDateTime instances returns a positive integer representing the number of months in the year of this date. It is calendar-dependent.

The set accessor of monthsInYear is undefined. You cannot change this property directly.

For general information and more examples, see Temporal.PlainDate.prototype.monthsInYear.

## Examples

### Using monthsInYear

```
const dt = Temporal.PlainDateTime.from("2021-07-01");
console.log(dt.monthsInYear); // 12
```

## Specifications

## Browser compatibility

## See also

- Temporal.PlainDateTime
- Temporal.PlainDateTime.prototype.with()
- Temporal.PlainDateTime.prototype.add()
- Temporal.PlainDateTime.prototype.subtract()
- Temporal.PlainDateTime.prototype.year
- Temporal.PlainDateTime.prototype.month
- Temporal.PlainDateTime.prototype.monthCode
- Temporal.PlainDateTime.prototype.daysInMonth
- Temporal.PlainDate.prototype.monthsInYear

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/monthsInYear
