# Temporal.PlainYearMonth.prototype.calendarId

Source: https://devdocs.io/javascript/global_objects/temporal/plainyearmonth/calendarid

The calendarId accessor property of Temporal.PlainYearMonth instances returns a string representing the calendar used to interpret the internal ISO 8601 date.

See Intl.supportedValuesOf() for a list of commonly supported calendar types.

The set accessor of calendarId is undefined. You cannot change this property directly. There's no obvious way to create a new Temporal.PlainYearMonth object with a different calendar that represents the same year-month, so you need to convert it to a Temporal.PlainDate object first using toPlainDate(), change the calendar, and then convert it back.

## Examples

### Using calendarId

```
const ym = Temporal.PlainYearMonth.from("2021-07");
console.log(ym.calendarId); // "iso8601"; default

const ym2 = Temporal.PlainYearMonth.from("2021-07-01[u-ca=chinese]");
console.log(ym2.calendarId); // "chinese"
```

### Changing calendarId

```
const ym = Temporal.PlainYearMonth.from("2021-07");
const newYM = ym
  .toPlainDate({ day: 1 })
  .withCalendar("chinese")
  .toPlainYearMonth();
console.log(newYM.year, newYM.monthCode); // 2021 "M05"

const newYM2 = ym
  .toPlainDate({ day: 31 })
  .withCalendar("chinese")
  .toPlainYearMonth();
console.log(newYM2.year, newYM2.monthCode); // 2021 "M06"
```

## Specifications

## Browser compatibility

## See also

- Temporal.PlainYearMonth

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/calendarId
