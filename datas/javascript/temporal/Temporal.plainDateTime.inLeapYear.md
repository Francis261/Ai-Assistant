# Temporal.PlainDateTime.prototype.inLeapYear

Source: https://devdocs.io/javascript/global_objects/temporal/plaindatetime/inleapyear

The inLeapYear accessor property of Temporal.PlainDateTime instances returns a boolean indicating whether this date is in a leap year. A leap year is a year that has more days (due to a leap day or leap month) than a common year. It is calendar-dependent.

The set accessor of inLeapYear is undefined. You cannot change this property directly.

For general information and more examples, see Temporal.PlainDate.prototype.inLeapYear.

## Examples

### Using inLeapYear

```
const dt = Temporal.PlainDateTime.from("2021-07-01");
console.log(dt.inLeapYear); // false
console.log(dt.daysInYear); // 365
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
- Temporal.PlainDateTime.prototype.daysInYear
- Temporal.PlainDateTime.prototype.monthsInYear
- Temporal.PlainDate.prototype.inLeapYear

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/inLeapYear
