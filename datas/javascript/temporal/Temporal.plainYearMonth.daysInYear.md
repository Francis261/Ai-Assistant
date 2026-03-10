# Temporal.PlainYearMonth.prototype.daysInYear

Source: https://devdocs.io/javascript/global_objects/temporal/plainyearmonth/daysinyear

The daysInYear accessor property of Temporal.PlainYearMonth instances returns a positive integer representing the number of days in the year of this date. It is calendar-dependent.

The set accessor of daysInYear is undefined. You cannot change this property directly.

For general information and more examples, see Temporal.PlainDate.prototype.daysInYear.

## Examples

### Using daysInYear

```
const ym = Temporal.PlainYearMonth.from("2021-07");
console.log(ym.daysInYear); // 365
```

## Specifications

## Browser compatibility

## See also

- Temporal.PlainYearMonth
- Temporal.PlainYearMonth.prototype.with()
- Temporal.PlainYearMonth.prototype.add()
- Temporal.PlainYearMonth.prototype.subtract()
- Temporal.PlainYearMonth.prototype.year
- Temporal.PlainYearMonth.prototype.daysInMonth
- Temporal.PlainDate.prototype.daysInYear

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/daysInYear
