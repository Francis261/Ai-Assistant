# Temporal.PlainYearMonth.prototype.month

Source: https://devdocs.io/javascript/global_objects/temporal/plainyearmonth/month

The month accessor property of Temporal.PlainYearMonth instances returns a positive integer representing the 1-based month index in the year of this year-month. The first month of this year is 1, and the last month is the monthsInYear. It is calendar-dependent.

The set accessor of month is undefined. You cannot change this property directly. Use the with() method to create a new Temporal.PlainYearMonth object with the desired new value.

For general information and more examples, see Temporal.PlainDate.prototype.month.

## Examples

### Using month

```
const ym = Temporal.PlainYearMonth.from("2021-07"); // ISO 8601 calendar
console.log(ym.monthCode); // "M07"
console.log(ym.month); // 7
```

## Specifications

## Browser compatibility

## See also

- Temporal.PlainYearMonth
- Temporal.PlainYearMonth.prototype.with()
- Temporal.PlainYearMonth.prototype.add()
- Temporal.PlainYearMonth.prototype.subtract()
- Temporal.PlainYearMonth.prototype.year
- Temporal.PlainYearMonth.prototype.monthCode
- Temporal.PlainYearMonth.prototype.daysInMonth
- Temporal.PlainYearMonth.prototype.monthsInYear
- Temporal.PlainDate.prototype.month

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/month
