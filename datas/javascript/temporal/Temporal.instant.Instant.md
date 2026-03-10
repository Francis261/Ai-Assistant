# Temporal.Instant()

Source: https://devdocs.io/javascript/global_objects/temporal/instant/instant

Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.

The Temporal.Instant() constructor creates Temporal.Instant objects.

This constructor is exactly equivalent to calling Temporal.Instant.fromEpochNanoseconds().

## Syntax

```
new Temporal.Instant(epochNanoseconds)
```

Note: Temporal.Instant() can only be constructed with new. Attempting to call it without new throws a TypeError.

### Parameters

A BigInt representing the number of nanoseconds since the Unix epoch.

### Return value

A new Temporal.Instant object representing the instant in time specified by epochNanoseconds.

### Exceptions

Thrown if epochNanoseconds represents an instant outside the range of representable instants, which is ±108 days, or about ±273,972.6 years, from the Unix epoch.

## Examples

### Using Temporal.Instant()

```
const instant = new Temporal.Instant(0n);
console.log(instant.toString()); // 1970-01-01T00:00:00Z
const vostok1Liftoff = new Temporal.Instant(-275248380000000000n);
console.log(vostok1Liftoff.toString()); // 1961-04-12T06:07:00Z
const sts1Liftoff = new Temporal.Instant(355924804000000000n);
console.log(sts1Liftoff.toString()); // 1981-04-12T12:00:04Z
```

## Specifications

## Browser compatibility

## See also

- Temporal.Instant
- Temporal.Instant.prototype.epochNanoseconds
- Temporal.Instant.from()
- Temporal.Instant.fromEpochMilliseconds()
- Temporal.Instant.fromEpochNanoseconds()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant/Instant
