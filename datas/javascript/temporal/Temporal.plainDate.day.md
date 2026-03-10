# Temporal.PlainDate.prototype.day

Source: https://devdocs.io/javascript/global_objects/temporal/plaindate/day

The day accessor property of Temporal.PlainDate instances returns a positive integer representing the 1-based day index in the month of this date, which is the same day number you would see on a calendar. It is calendar-dependent.

It generally starts at 1 and is continuous, but not always. If you want to loop through all the days in a month, first use with() with { day: 1 } (which sets to the beginning of the month, even if the actual number is not 1), then repeatedly use add() with { days: 1 }, until the month changes.

Note: Usually, the day index only changes when transitioning from one calendar system into another, such as from the Julian to the Gregorian calendar. In practice, all currently built-in calendars are proleptic, meaning the calendar system is extended indefinitely into the past and future. Assuming day is non-continuous guards against future introductions of non-proleptic calendars.

The set accessor of day is undefined. You cannot change this property directly. Use the with() method to create a new Temporal.PlainDate object with the desired new value.

## Examples

### Using day

```
const date = Temporal.PlainDate.from("2021-07-01"); // ISO 8601 calendar
console.log(date.day); // 1

const date2 = Temporal.PlainDate.from("2021-07-01[u-ca=chinese]");
console.log(date2.day); // 22; it is May 22 in the Chinese calendar
```

### Looping through all days in a month

```
const month = Temporal.PlainDate.from("2021-07-14"); // An arbitrary date in the month
for (
  let day = month.with({ day: 1 });
  day.month === month.month;
  day = day.add({ days: 1 })
) {
  console.log(day.day);
}
```

### Changing day

```
const date = Temporal.PlainDate.from("2021-07-01");
const newDate = date.with({ day: 15 });
console.log(newDate.toString()); // 2021-07-15
```

You can also use add() or subtract() to move a certain number of days from the current date.

```
const date = Temporal.PlainDate.from("2021-07-01");
const newDate = date.add({ days: 14 });
console.log(newDate.toString()); // 2021-07-15
```

By default, with() constrains the day to the range of valid values. So you can use { day: 1 } to set the day to the first day of the month, even if the first day does not have the number 1. Similarly, the following will set the day to the last day of the month:

```
const date = Temporal.PlainDate.from("2021-07-01");
const lastDay = date.with({ day: Number.MAX_VALUE }); // 2021-07-31
```

Note: Avoid using daysInMonth to set the day to the last day of the month. The last day of the month is not always the same as the number of days in the month, in the rare case where a month may have a few days skipped.

## Specifications

## Browser compatibility

## See also

- Temporal.PlainDate
- Temporal.PlainDate.prototype.with()
- Temporal.PlainDate.prototype.add()
- Temporal.PlainDate.prototype.subtract()
- Temporal.PlainDate.prototype.year
- Temporal.PlainDate.prototype.month
- Temporal.PlainDate.prototype.daysInMonth
- Temporal.PlainDate.prototype.dayOfWeek
- Temporal.PlainDate.prototype.dayOfYear

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/day
