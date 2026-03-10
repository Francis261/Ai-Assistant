# Temporal.ZonedDateTime()

Source: https://devdocs.io/javascript/global_objects/temporal/zoneddatetime/zoneddatetime

Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.

The Temporal.ZonedDateTime() constructor creates Temporal.ZonedDateTime objects.

This constructor allows you to create instances by directly supplying the underlying data. Like all other Temporal classes, you should usually construct Temporal.ZonedDateTime objects using the Temporal.ZonedDateTime.from() static method, which can handle a variety of input types.

## Syntax

```
new Temporal.ZonedDateTime(epochNanoseconds, timeZone)
new Temporal.ZonedDateTime(epochNanoseconds, timeZone, calendar)
```

Note: Temporal.ZonedDateTime() can only be constructed with new. Attempting to call it without new throws a TypeError.

### Parameters

A BigInt that corresponds to the epochNanoseconds property.

A string that corresponds to the timeZoneId property. Unlike all other Temporal APIs, it must be a valid time zone identifier (either named or offset) as-is, and cannot be a Temporal.ZonedDateTime instance or a date-time string.

A string that corresponds to the calendarId property. See Intl.supportedValuesOf() for a list of commonly supported calendar types. Defaults to "iso8601".

### Return value

A new Temporal.ZonedDateTime object, representing the specific instant specified by the parameters.

### Exceptions

Thrown if timeZone or calendar is not a string.

Thrown in one of the following cases:

- epochNanoseconds is not in the representable range, which is ±108 days, or about ±273,972.6 years, from the Unix epoch.
- timeZone is not a valid time zone identifier.
- calendar is not a valid calendar identifier.

## Examples

### Using Temporal.ZonedDateTime()

```
const zdt = new Temporal.ZonedDateTime(0n, "America/New_York");
console.log(zdt.toString()); // '1969-12-31T19:00:00-05:00[America/New_York]'
```

## Specifications

## Browser compatibility

## See also

- Temporal.ZonedDateTime
- Temporal.ZonedDateTime.from()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/ZonedDateTime
