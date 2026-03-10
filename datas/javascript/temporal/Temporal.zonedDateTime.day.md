# Temporal.ZonedDateTime.prototype.day

Source: https://devdocs.io/javascript/global_objects/temporal/zoneddatetime/day

The day accessor property of Temporal.ZonedDateTime instances returns a positive integer representing the 1-based day index in the month of this date, which is the same day number you would see on a calendar. It is calendar-dependent.

The set accessor of day is undefined. You cannot change this property directly. Use the with() method to create a new Temporal.ZonedDateTime object with the desired new value.

For general information and more examples, see Temporal.PlainDate.prototype.day.

For PlainDate, day can only be non-continuous if the calendar skips days. For ZonedDateTime, day can also be non-continuous if the time zone changes its offset by 24 hours; this actually happened. See the example below.

## Examples

### Using day

```
const dt = Temporal.ZonedDateTime.from("2021-07-01[America/New_York]"); // ISO 8601 calendar
console.log(dt.day); // 1
```

### Non-continuous day

To better align times with its trading partners in Asia, the country of Samoa changed its time zone to the other side of the International Date Line, shifting its offset from -10:00 to +14:00 (daylight saving time). This resulted in a 24-hour abrupt change in the local time, therefore skipping the day December 30, 2011 entirely. 2011-12-29T23:59:59-10:00[Pacific/Apia] is immediately followed by 2011-12-31T00:00:00+14:00[Pacific/Apia].

```
const dt = Temporal.ZonedDateTime.from(
  "2011-12-29T23:59:59-10:00[Pacific/Apia]",
);
console.log(dt.day); // 29
const nextDay = dt.add({ seconds: 1 });
console.log(nextDay.day); // 31
```

For this reason, you should always prefer add() and subtract() to manipulate dates and times, rather than directly changing the day property.

## Specifications

## Browser compatibility

## See also

- Temporal.ZonedDateTime
- Temporal.ZonedDateTime.prototype.with()
- Temporal.ZonedDateTime.prototype.add()
- Temporal.ZonedDateTime.prototype.subtract()
- Temporal.ZonedDateTime.prototype.year
- Temporal.ZonedDateTime.prototype.month
- Temporal.ZonedDateTime.prototype.daysInMonth
- Temporal.ZonedDateTime.prototype.dayOfWeek
- Temporal.ZonedDateTime.prototype.dayOfYear
- Temporal.PlainDate.prototype.day

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/day
