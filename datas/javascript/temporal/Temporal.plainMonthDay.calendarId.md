# Temporal.PlainMonthDay.prototype.calendarId

Source: https://devdocs.io/javascript/global_objects/temporal/plainmonthday/calendarid

The calendarId accessor property of Temporal.PlainMonthDay instances returns a string representing the calendar used to interpret the internal ISO 8601 date.

See Intl.supportedValuesOf() for a list of commonly supported calendar types.

The set accessor of calendarId is undefined. You cannot change this property directly. There's no obvious way to create a new Temporal.PlainMonthDay object with a different calendar that represents the same month-day, so you need to convert it to a Temporal.PlainDate object first using toPlainDate(), change the calendar, and then convert it back.

## Examples

### Using calendarId

```
const md = Temporal.PlainMonthDay.from("07-01");
console.log(md.calendarId); // "iso8601"; default

const md2 = Temporal.PlainMonthDay.from("2021-07-01[u-ca=chinese]");
console.log(md2.calendarId); // "chinese"
```

### Changing calendarId

```
const md = Temporal.PlainMonthDay.from("07-01");
const newMD = md
  .toPlainDate({ year: 2021 })
  .withCalendar("chinese")
  .toPlainMonthDay();
console.log(newMD.monthCode, newMD.day); // "M05" 22

const newMD2 = md
  .toPlainDate({ year: 2022 })
  .withCalendar("chinese")
  .toPlainMonthDay();
console.log(newMD2.monthCode, newMD2.day); // "M06" 3
```

## Specifications

## Browser compatibility

## See also

- Temporal.PlainMonthDay

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay/calendarId
