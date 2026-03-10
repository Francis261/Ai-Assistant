# Temporal.PlainDateTime.prototype.year

Source: https://devdocs.io/javascript/global_objects/temporal/plaindatetime/year

The year accessor property of Temporal.PlainDateTime instances returns an integer representing the number of years of this date relative to the start of a calendar-specific epoch year. It is calendar-dependent.

The set accessor of year is undefined. You cannot change this property directly. Use the with() method to create a new Temporal.PlainDateTime object with the desired new value.

For general information and more examples, see Temporal.PlainDate.prototype.year.

## Examples

### Using year

```
const dt = Temporal.PlainDateTime.from("2021-07-01"); // ISO 8601 calendar
console.log(dt.year); // 2021
```

## Specifications

## Browser compatibility

## See also

- Temporal.PlainDateTime
- Temporal.PlainDateTime.prototype.with()
- Temporal.PlainDateTime.prototype.add()
- Temporal.PlainDateTime.prototype.subtract()
- Temporal.PlainDateTime.prototype.era
- Temporal.PlainDateTime.prototype.eraYear
- Temporal.PlainDateTime.prototype.yearOfWeek
- Temporal.PlainDateTime.prototype.month
- Temporal.PlainDateTime.prototype.day
- Temporal.PlainDate.prototype.year

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/year
