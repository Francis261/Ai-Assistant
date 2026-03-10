# Temporal.Instant.fromEpochNanoseconds()

Source: https://devdocs.io/javascript/global_objects/temporal/instant/fromepochnanoseconds

The Temporal.Instant.fromEpochNanoseconds() static method creates a new Temporal.Instant object from the number of nanoseconds since the Unix epoch (midnight at the beginning of January 1, 1970, UTC).

To convert a Date object to a Temporal.Instant object, use Date.prototype.toTemporalInstant() instead.

## Syntax

```
Temporal.Instant.fromEpochNanoseconds(epochNanoseconds)
```

### Parameters

A BigInt representing the number of nanoseconds since the Unix epoch.

### Return value

A new Temporal.Instant object representing the instant in time specified by epochNanoseconds.

### Exceptions

Thrown if epochNanoseconds is not in the representable range, which is ±108 days, or about ±273,972.6 years, from the Unix epoch.

## Examples

### Using Temporal.Instant.fromEpochNanoseconds()

```
const instant = Temporal.Instant.fromEpochNanoseconds(0n);
console.log(instant.toString()); // 1970-01-01T00:00:00Z
const vostok1Liftoff =
  Temporal.Instant.fromEpochNanoseconds(-275248380000000000n);
console.log(vostok1Liftoff.toString()); // 1961-04-12T06:07:00Z
const sts1Liftoff = Temporal.Instant.fromEpochNanoseconds(355924804000000000n);
console.log(sts1Liftoff.toString()); // 1981-04-12T12:00:04Z
```

## Specifications

## Browser compatibility

## See also

- Temporal.Instant
- Temporal.Instant.prototype.epochNanoseconds
- Temporal.Instant.from()
- Temporal.Instant.fromEpochMilliseconds()
- Date.prototype.toTemporalInstant()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant/fromEpochNanoseconds
