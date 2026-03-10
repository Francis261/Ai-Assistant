# Temporal.ZonedDateTime.prototype.until()

Source: https://devdocs.io/javascript/global_objects/temporal/zoneddatetime/until

The until() method of Temporal.ZonedDateTime instances returns a new Temporal.Duration object representing the duration from this date-time to another date-time (in a form convertible by Temporal.ZonedDateTime.from()). The duration is positive if the other date-time is after this date-time, and negative if before.

This method does other - this. To do this - other, use the since() method.

## Syntax

```
until(other)
until(other, options)
```

### Parameters

A string, an object, or a Temporal.ZonedDateTime instance representing a date-time to subtract this date-time from. It is converted to a Temporal.ZonedDateTime object using the same algorithm as Temporal.ZonedDateTime.from(). It must have the same calendar as this.

The same options as since().

### Return value

A new Temporal.Duration object representing the duration from this date-time until other. The duration is positive if other is after this date-time, and negative if before.

### Exceptions

Thrown in one of the following cases:

- other has a different calendar than this.
- Any of the options is invalid.
- other has a different time zone than this, and largestUnit is "days" or above.

## Examples

### Using until()

```
const flight = Temporal.ZonedDateTime.from(
  "2024-12-21T13:31:00-05:00[America/New_York]",
);
const now = Temporal.Now.zonedDateTimeISO("America/New_York").round("second");
if (Temporal.ZonedDateTime.compare(flight, now) < 0) {
  console.error(
    "The flight is already in the past. The result may not make sense.",
  );
}
const duration = now.until(flight, { largestUnit: "days" });
console.log(`The flight is in ${duration.toLocaleString("en-US")}`);
```

For more examples, see since().

## Specifications

## Browser compatibility

## See also

- Temporal.ZonedDateTime
- Temporal.Duration
- Temporal.ZonedDateTime.prototype.add()
- Temporal.ZonedDateTime.prototype.subtract()
- Temporal.ZonedDateTime.prototype.since()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/until
