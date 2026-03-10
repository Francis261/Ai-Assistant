# Temporal.Instant.prototype.epochNanoseconds

Source: https://devdocs.io/javascript/global_objects/temporal/instant/epochnanoseconds

The epochNanoseconds accessor property of Temporal.Instant instances returns a BigInt representing the number of nanoseconds elapsed since the Unix epoch (midnight at the beginning of January 1, 1970, UTC) to this instant.

The set accessor of epochNanoseconds is undefined. You cannot change this property directly. To create a new Temporal.Instant object with the desired new epochNanoseconds value, use the Temporal.Instant.fromEpochNanoseconds() static method instead.

An instant can only represent ±108 days (about ±273,972.6 years) around the epoch, which is ±8.64e21 nanoseconds. Attempting to set epochNanoseconds beyond this boundary throws a RangeError.

## Examples

### Using epochNanoseconds

```
const instant = Temporal.Instant.from("2021-08-01T12:34:56.789Z");
console.log(instant.epochNanoseconds); // 1627821296789000000n

const instant2 = Temporal.Instant.from("1969-08-01T12:34:56.789Z");
console.log(instant2.epochNanoseconds); // -13173903211000000n
```

### Changing epochNanoseconds

This is the method that allows you to move by any amount of time:

```
const instant = Temporal.Instant.from("2021-08-01T12:34:56.789Z");
const instant1hourLater = instant.add({ hours: 1 });
console.log(instant1hourLater.epochNanoseconds); // 1627824896789000000n
```

If you already know the change in nanoseconds, you can also directly construct a new Temporal.Instant object:

```
const instant = Temporal.Instant.from("2021-08-01T12:34:56.789Z");
const instant1hourLater = Temporal.Instant.fromEpochNanoseconds(
  instant.epochNanoseconds + 3600000000000n,
);
console.log(instant1hourLater.epochNanoseconds); // 1627824896789000000n
```

## Specifications

## Browser compatibility

## See also

- Temporal.Instant
- Temporal.Instant.prototype.epochMilliseconds
- Temporal.Instant.fromEpochNanoseconds()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant/epochNanoseconds
