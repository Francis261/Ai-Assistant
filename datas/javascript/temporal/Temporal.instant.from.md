# Temporal.Instant.from()

Source: https://devdocs.io/javascript/global_objects/temporal/instant/from

The Temporal.Instant.from() static method creates a new Temporal.Instant object from another Temporal.Instant object, or an RFC 9557 string.

## Syntax

```
Temporal.Instant.from(info)
```

### Parameters

One of the following:

- A Temporal.Instant instance, which creates a copy of the instance.
- An RFC 9557 string containing a date, time, and time zone offset. The time zone name is ignored; only the offset is used.

### Return value

A new Temporal.Instant object representing the instant in time specified by info.

### Exceptions

Thrown if info is not a Temporal.Instant instance or a string.

Thrown in one of the following cases:

- The string is not a valid RFC 9557 string.
- The info is not in the representable range, which is ±108 days, or about ±273,972.6 years, from the Unix epoch.

## Examples

### Creating an instant from a string

```
const instant = Temporal.Instant.from("1970-01-01T00Z");
console.log(instant.toString()); // 1970-01-01T00:00:00Z

const instant2 = Temporal.Instant.from("1970-01-01T00+08:00");
console.log(instant2.toString()); // 1969-12-31T16:00:00Z

// America/New_York is UTC-5 in January 1970, not UTC+8
const instant3 = Temporal.Instant.from("1970-01-01T00+08:00[America/New_York]");
console.log(instant3.toString()); // 1969-12-31T16:00:00Z; the time zone name is ignored
```

### Creating an instant from another instant

```
const instant = Temporal.Instant.from("1970-01-01T00Z");
const instant2 = Temporal.Instant.from(instant);
console.log(instant2.toString()); // 1970-01-01T00:00:00Z
```

## Specifications

## Browser compatibility

## See also

- Temporal.Instant
- Temporal.Instant.fromEpochMilliseconds()
- Temporal.Instant.fromEpochNanoseconds()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant/from
