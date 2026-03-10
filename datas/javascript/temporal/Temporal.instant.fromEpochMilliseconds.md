# Temporal.Instant.fromEpochMilliseconds()

Source: https://devdocs.io/javascript/global_objects/temporal/instant/fromepochmilliseconds

The Temporal.Instant.fromEpochMilliseconds() static method creates a new Temporal.Instant object from the number of milliseconds since the Unix epoch (midnight at the beginning of January 1, 1970, UTC).

To convert a Date object to a Temporal.Instant object, use Date.prototype.toTemporalInstant() instead.

## Syntax

```
Temporal.Instant.fromEpochMilliseconds(epochMilliseconds)
```

### Parameters

A number representing the number of milliseconds since the Unix epoch. Internally, it is converted to a BigInt and multiplied by 1e6 to get the number of nanoseconds.

### Return value

A new Temporal.Instant object representing the instant in time specified by epochMilliseconds.

### Exceptions

Thrown in one of the following cases:

- epochMilliseconds cannot be converted to a BigInt (e.g., not an integer).
- epochMilliseconds is not in the representable range, which is ±108 days, or about ±273,972.6 years, from the Unix epoch.

## Examples

### Using Temporal.Instant.fromEpochMilliseconds()

```
const instant = Temporal.Instant.fromEpochMilliseconds(0);
console.log(instant.toString()); // 1970-01-01T00:00:00Z
const vostok1Liftoff = Temporal.Instant.fromEpochMilliseconds(-275248380000);
console.log(vostok1Liftoff.toString()); // 1961-04-12T06:07:00Z
const sts1Liftoff = Temporal.Instant.fromEpochMilliseconds(355924804000);
console.log(sts1Liftoff.toString()); // 1981-04-12T12:00:04Z
```

## Specifications

## Browser compatibility

## See also

- Temporal.Instant
- Temporal.Instant.prototype.epochMilliseconds
- Temporal.Instant.from()
- Temporal.Instant.fromEpochNanoseconds()
- Date.prototype.toTemporalInstant()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant/fromEpochMilliseconds
