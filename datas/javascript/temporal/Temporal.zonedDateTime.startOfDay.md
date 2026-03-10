# Temporal.ZonedDateTime.prototype.startOfDay()

Source: https://devdocs.io/javascript/global_objects/temporal/zoneddatetime/startofday

The startOfDay() method of Temporal.ZonedDateTime instances returns a Temporal.ZonedDateTime object representing the first instant of this date in the time zone. It usually has a time of 00:00:00, but may be different if the midnight doesn't exist due to offset changes, in which case the first time that exists is returned.

It is equivalent to calling withPlainTime() with no arguments.

## Syntax

```
startOfDay()
```

### Parameters

None.

### Return value

A Temporal.ZonedDateTime object with instant t, such that:

- The date at t is different from the date one nanosecond before t.
- The date at t is the same as the date of this.

## Examples

### Using startOfDay()

```
// In the US, DST transitions happen at 2am, so the midnight exists
const dt = Temporal.ZonedDateTime.from(
  "2024-03-10T12:00:00-04:00[America/New_York]",
);
console.log(dt.startOfDay().toString()); // "2024-03-10T00:00:00-05:00[America/New_York]"

// In Brazil, DST transitions happened at midnight, so the midnight didn't exist
const dt2 = Temporal.ZonedDateTime.from(
  "2015-10-18T12:00-02:00[America/Sao_Paulo]",
);
console.log(dt2.startOfDay().toString()); // "2015-10-18T01:00:00-02:00[America/Sao_Paulo]"
```

## Specifications

## Browser compatibility

## See also

- Temporal.ZonedDateTime
- Temporal.ZonedDateTime.prototype.with()
- Temporal.ZonedDateTime.prototype.add()
- Temporal.ZonedDateTime.prototype.subtract()
- Temporal.ZonedDateTime.prototype.hour
- Temporal.ZonedDateTime.prototype.hoursInDay
- Temporal.ZonedDateTime.prototype.timeZoneId
- Temporal.ZonedDateTime.prototype.getTimeZoneTransition()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/startOfDay
