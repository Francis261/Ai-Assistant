# Temporal.ZonedDateTime.prototype.dayOfYear

Source: https://devdocs.io/javascript/global_objects/temporal/zoneddatetime/dayofyear

The dayOfYear accessor property of Temporal.ZonedDateTime instances returns a positive integer representing the 1-based day index in the year of this date. The first day of this year is 1, and the last day is the daysInYear. It is calendar-dependent.

The set accessor of dayOfYear is undefined. You cannot change this property directly. To create a new Temporal.ZonedDateTime object with the desired new dayOfYear value, use the add() or subtract() method with the appropriate number of days.

For general information and more examples, see Temporal.PlainDate.prototype.dayOfYear.

## Examples

### Using dayOfYear

```
const dt = Temporal.ZonedDateTime.from("2021-07-01[America/New_York]");
console.log(dt.dayOfYear); // 182
```

## Specifications

## Browser compatibility

## See also

- Temporal.ZonedDateTime
- Temporal.ZonedDateTime.prototype.with()
- Temporal.ZonedDateTime.prototype.add()
- Temporal.ZonedDateTime.prototype.subtract()
- Temporal.ZonedDateTime.prototype.year
- Temporal.ZonedDateTime.prototype.day
- Temporal.ZonedDateTime.prototype.dayOfWeek
- Temporal.ZonedDateTime.prototype.daysInYear
- Temporal.PlainDate.prototype.dayOfYear

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/dayOfYear
