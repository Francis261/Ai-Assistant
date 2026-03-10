# Temporal.ZonedDateTime.prototype.inLeapYear

Source: https://devdocs.io/javascript/global_objects/temporal/zoneddatetime/inleapyear

The inLeapYear accessor property of Temporal.ZonedDateTime instances returns a boolean indicating whether this date is in a leap year. A leap year is a year that has more days (due to a leap day or leap month) than a common year. It is calendar-dependent.

The set accessor of inLeapYear is undefined. You cannot change this property directly.

For general information and more examples, see Temporal.PlainDate.prototype.inLeapYear.

## Examples

### Using inLeapYear

```
const dt = Temporal.ZonedDateTime.from("2021-07-01[America/New_York]");
console.log(dt.inLeapYear); // false
console.log(dt.daysInYear); // 365
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
- Temporal.ZonedDateTime.prototype.daysInYear
- Temporal.ZonedDateTime.prototype.monthsInYear
- Temporal.PlainDate.prototype.inLeapYear

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/inLeapYear
