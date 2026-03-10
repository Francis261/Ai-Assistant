# Temporal.ZonedDateTime.prototype.monthsInYear

Source: https://devdocs.io/javascript/global_objects/temporal/zoneddatetime/monthsinyear

The monthsInYear accessor property of Temporal.ZonedDateTime instances returns a positive integer representing the number of months in the year of this date. It is calendar-dependent.

The set accessor of monthsInYear is undefined. You cannot change this property directly.

For general information and more examples, see Temporal.PlainDate.prototype.monthsInYear.

## Examples

### Using monthsInYear

```
const dt = Temporal.ZonedDateTime.from("2021-07-01[America/New_York]");
console.log(dt.monthsInYear); // 12
```

## Specifications

## Browser compatibility

## See also

- Temporal.ZonedDateTime
- Temporal.ZonedDateTime.prototype.with()
- Temporal.ZonedDateTime.prototype.add()
- Temporal.ZonedDateTime.prototype.subtract()
- Temporal.ZonedDateTime.prototype.year
- Temporal.ZonedDateTime.prototype.month
- Temporal.ZonedDateTime.prototype.monthCode
- Temporal.ZonedDateTime.prototype.daysInMonth
- Temporal.PlainDate.prototype.monthsInYear

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/monthsInYear
