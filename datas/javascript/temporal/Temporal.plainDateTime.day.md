# Temporal.PlainDateTime.prototype.day

Source: https://devdocs.io/javascript/global_objects/temporal/plaindatetime/day

The day accessor property of Temporal.PlainDateTime instances returns a positive integer representing the 1-based day index in the month of this date, which is the same day number you would see on a calendar. It is calendar-dependent.

The set accessor of day is undefined. You cannot change this property directly. Use the with() method to create a new Temporal.PlainDateTime object with the desired new value.

For general information and more examples, see Temporal.PlainDate.prototype.day.

## Examples

### Using day

```
const dt = Temporal.PlainDateTime.from("2021-07-01"); // ISO 8601 calendar
console.log(dt.day); // 1
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
- Temporal.PlainDateTime.prototype.daysInMonth
- Temporal.PlainDateTime.prototype.dayOfWeek
- Temporal.PlainDateTime.prototype.dayOfYear
- Temporal.PlainDate.prototype.day

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/day
