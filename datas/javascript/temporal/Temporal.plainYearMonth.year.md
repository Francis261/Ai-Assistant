# Temporal.PlainYearMonth.prototype.year

Source: https://devdocs.io/javascript/global_objects/temporal/plainyearmonth/year

The year accessor property of Temporal.PlainYearMonth instances returns an integer representing the number of years of this year-month relative to the start of a calendar-specific epoch year. It is calendar-dependent.

The set accessor of year is undefined. You cannot change this property directly. Use the with() method to create a new Temporal.PlainYearMonth object with the desired new value.

For general information and more examples, see Temporal.PlainDate.prototype.year.

## Examples

### Using year

```
const ym = Temporal.PlainYearMonth.from("2021-07"); // ISO 8601 calendar
console.log(ym.year); // 2021
```

## Specifications

## Browser compatibility

## See also

- Temporal.PlainYearMonth
- Temporal.PlainYearMonth.prototype.with()
- Temporal.PlainYearMonth.prototype.add()
- Temporal.PlainYearMonth.prototype.subtract()
- Temporal.PlainYearMonth.prototype.era
- Temporal.PlainYearMonth.prototype.eraYear
- Temporal.PlainYearMonth.prototype.month
- Temporal.PlainDate.prototype.year

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/year
