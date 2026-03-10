# Temporal.ZonedDateTime.prototype.hoursInDay

Source: https://devdocs.io/javascript/global_objects/temporal/zoneddatetime/hoursinday

The hoursInDay accessor property of Temporal.ZonedDateTime instances returns a positive integer representing the number of hours in the day of this date in the time zone. It may be more or less than 24 in the case of offset changes such as daylight saving time.

Because ZonedDateTime is the only class that's time zone-aware, and hours in a day can only change by offset changes, all other classes assume 24-hour days.

The set accessor of hoursInDay is undefined. You cannot change this property directly.

## Examples

### Using hoursInDay

```
const dt = Temporal.ZonedDateTime.from(
  "2024-03-10T01:58:00-05:00[America/New_York]",
);
console.log(dt.hoursInDay); // 23; this is the day of transition into DST

const dt2 = Temporal.ZonedDateTime.from(
  "2024-11-03T01:58:00-04:00[America/New_York]",
);
console.log(dt2.hoursInDay); // 25; this is the day of transition out of DST

const dt3 = Temporal.ZonedDateTime.from(
  "2024-11-04T01:58:00-05:00[America/New_York]",
);
console.log(dt3.hoursInDay); // 24
```

## Specifications

## Browser compatibility

## See also

- Temporal.ZonedDateTime
- Temporal.ZonedDateTime.prototype.with()
- Temporal.ZonedDateTime.prototype.add()
- Temporal.ZonedDateTime.prototype.subtract()
- Temporal.ZonedDateTime.prototype.hour
- Temporal.ZonedDateTime.prototype.dayOfYear
- Temporal.ZonedDateTime.prototype.daysInMonth
- Temporal.ZonedDateTime.prototype.daysInWeek

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/hoursInDay
