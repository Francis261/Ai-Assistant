# Temporal.PlainYearMonth.prototype.inLeapYear

Source: https://devdocs.io/javascript/global_objects/temporal/plainyearmonth/inleapyear

The inLeapYear accessor property of Temporal.PlainYearMonth instances returns a boolean indicating whether this year-month is in a leap year. A leap year is a year that has more days (due to a leap day or leap month) than a common year. It is calendar-dependent.

The set accessor of inLeapYear is undefined. You cannot change this property directly.

For general information and more examples, see Temporal.PlainDate.prototype.inLeapYear.

## Examples

### Using inLeapYear

```
const ym = Temporal.PlainYearMonth.from("2021-07");
console.log(ym.inLeapYear); // false
console.log(ym.daysInYear); // 365
console.log(ym.monthsInYear); // 12
```

## Specifications

## Browser compatibility

## See also

- Temporal.PlainYearMonth
- Temporal.PlainYearMonth.prototype.with()
- Temporal.PlainYearMonth.prototype.add()
- Temporal.PlainYearMonth.prototype.subtract()
- Temporal.PlainYearMonth.prototype.year
- Temporal.PlainYearMonth.prototype.daysInYear
- Temporal.PlainYearMonth.prototype.monthsInYear
- Temporal.PlainDate.prototype.inLeapYear

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/inLeapYear
