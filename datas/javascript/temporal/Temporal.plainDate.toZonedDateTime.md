# Temporal.PlainDate.prototype.toZonedDateTime()

Source: https://devdocs.io/javascript/global_objects/temporal/plaindate/tozoneddatetime

The toZonedDateTime() method of Temporal.PlainDate instances returns a new Temporal.ZonedDateTime object representing this date, a supplied time, and a supplied time zone, in the same calendar system.

## Syntax

```
toZonedDateTime(timeZone)
toZonedDateTime(info)
```

### Parameters

Either a string or a Temporal.ZonedDateTime instance representing the timeZone option. This is a convenience overload, so toZonedDateTime(timeZone) is equivalent to toZonedDateTime({ timeZone }), where timeZone is a string or Temporal.ZonedDateTime. This overload is chosen when the first argument is not an object, or the object's timeZone property is undefined (because ZonedDateTime instances have a timeZoneId property instead).

An object containing some or all of the following properties (in the order they are retrieved and validated):

A string, an object, or a Temporal.PlainTime instance representing the time component of the resulting ZonedDateTime. It is converted to a Temporal.PlainTime object using the same algorithm as Temporal.PlainTime.from(). Defaults to the first valid time in this time zone on this calendar date, which is usually "00:00:00", but may be different if, for example, daylight saving time skips midnight.

Either a string or a Temporal.ZonedDateTime instance representing the time zone to use. If a Temporal.ZonedDateTime instance, its time zone is used. If a string, it can be a named time zone identifier, an offset time zone identifier, or a date-time string containing a time zone identifier or an offset (see time zones and offsets for more information).

### Return value

A new Temporal.ZonedDateTime object representing the date and time specified by this date, plainTime, and timeZone, interpreted in the calendar system of this date.

In the case of ambiguities, the compatible behavior is always used: if the time falls into a gap, we move forward by the gap length; if the time falls into an ambiguity, we choose the earlier of the two possibilities. This means the resulting ZonedDateTime may have a potentially different date or time than the input.

### Exceptions

Thrown if timeZone is not a string or a Temporal.ZonedDateTime instance.

Thrown if timeZone is a string that is not a valid time zone identifier.

## Examples

### Using toZonedDateTime()

```
const summer = Temporal.PlainDate.from("2021-07-01");
// Just time zone
const summerTime = summer.toZonedDateTime("America/New_York");
console.log(summerTime.toString()); // 2021-07-01T00:00:00-04:00[America/New_York]

const winter = Temporal.PlainDate.from("2021-01-01");
// Time zone and time
const winterTime = winter.toZonedDateTime({
  plainTime: "12:34:56",
  timeZone: "America/New_York",
});
console.log(winterTime.toString()); // 2021-01-01T12:34:56-05:00[America/New_York]

const spring = Temporal.PlainDate.from("2021-03-01");
// Time zone as object and time as object
const springTime = spring.toZonedDateTime({
  plainTime: summerTime.toPlainTime(),
  timeZone: winterTime,
});
console.log(springTime.toString()); // 2021-03-01T00:00:00-05:00[America/New_York]
```

## Specifications

## Browser compatibility

## See also

- Temporal.PlainDate
- Temporal.ZonedDateTime
- Temporal.PlainTime
- Temporal.PlainDate.prototype.toPlainDateTime()
- Temporal.PlainDate.prototype.toPlainMonthDay()
- Temporal.PlainDate.prototype.toPlainYearMonth()
- Temporal.ZonedDateTime.prototype.toPlainDate()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/toZonedDateTime
