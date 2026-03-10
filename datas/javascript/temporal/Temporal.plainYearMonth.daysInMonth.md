# Temporal.PlainYearMonth.prototype.daysInMonth

Source: https://devdocs.io/javascript/global_objects/temporal/plainyearmonth/daysinmonth

The daysInMonth accessor property of Temporal.PlainYearMonth instances returns a positive integer representing the number of days in the month of this date. It is calendar-dependent.

The set accessor of daysInMonth is undefined. You cannot change this property directly.

For general information and more examples, see Temporal.PlainDate.prototype.daysInMonth.

## Examples

### Using daysInMonth

```
const ym = Temporal.PlainYearMonth.from("2021-07");
console.log(ym.daysInMonth); // 31
```

## Specifications

## Browser compatibility

## See also

- Temporal.PlainYearMonth
- Temporal.PlainYearMonth.prototype.with()
- Temporal.PlainYearMonth.prototype.add()
- Temporal.PlainYearMonth.prototype.subtract()
- Temporal.PlainYearMonth.prototype.year
- Temporal.PlainYearMonth.prototype.month
- Temporal.PlainYearMonth.prototype.daysInYear
- Temporal.PlainDate.prototype.daysInMonth

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/daysInMonth
