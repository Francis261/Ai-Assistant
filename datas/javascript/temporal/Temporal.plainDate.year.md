# Temporal.PlainDate.prototype.year

Source: https://devdocs.io/javascript/global_objects/temporal/plaindate/year

The year accessor property of Temporal.PlainDate instances returns an integer representing the number of years of this date relative to the start of a calendar-specific epoch year. It is calendar-dependent.

This property has the same function as the era/eraYear pair as a unique identifier of a year in a calendar. Usually year 1 is either the first year of the latest era or the ISO 8601 year 0001. Because year is relative to the start of the epoch year, not the epoch date, if the epoch is in the middle of the year, that year will have the same value before and after the start date of the era.

The set accessor of year is undefined. You cannot change this property directly. Use the with() method to create a new Temporal.PlainDate object with the desired new value.

## Examples

### Using year

```
const date = Temporal.PlainDate.from("2021-07-01"); // ISO 8601 calendar
console.log(date.year); // 2021

const date2 = Temporal.PlainDate.from("-002021-07-01");
console.log(date2.year); // -2021

const date3 = Temporal.PlainDate.from("2021-07-01[u-ca=japanese]");
console.log(date3.year); // 2021; although the Japanese calendar uses eras,
// there's no obvious "default era", so the year is the same as the ISO year

const date4 = Temporal.PlainDate.from("2021-07-01[u-ca=hebrew]");
console.log(date4.year); // 5781; the Hebrew calendar uses the Anno Mundi epoch, which starts in 3761 BC
```

## Specifications

## Browser compatibility

## See also

- Temporal.PlainDate
- Temporal.PlainDate.prototype.with()
- Temporal.PlainDate.prototype.add()
- Temporal.PlainDate.prototype.subtract()
- Temporal.PlainDate.prototype.era
- Temporal.PlainDate.prototype.eraYear
- Temporal.PlainDate.prototype.yearOfWeek
- Temporal.PlainDate.prototype.month
- Temporal.PlainDate.prototype.day

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/year
