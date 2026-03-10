# Temporal.ZonedDateTime.prototype.epochNanoseconds

Source: https://devdocs.io/javascript/global_objects/temporal/zoneddatetime/epochnanoseconds

The epochNanoseconds accessor property of Temporal.ZonedDateTime instances returns a BigInt representing the number of nanoseconds elapsed since the Unix epoch (midnight at the beginning of January 1, 1970, UTC) to this instant.

The set accessor of epochNanoseconds is undefined. You cannot change this property directly. To create a new Temporal.ZonedDateTime object with the desired new epochNanoseconds value, use the new Temporal.ZonedDateTime() constructor instead.

An instant can only represent ±108 days (about ±273,972.6 years) around the epoch, which is ±8.64e21 nanoseconds. Attempting to set epochNanoseconds beyond this boundary throws a RangeError.

## Examples

### Using epochNanoseconds

```
const zdt = Temporal.ZonedDateTime.from("2021-08-01T12:34:56.789Z[UTC]");
console.log(zdt.epochNanoseconds); // 1627821296789000000n

const zdt2 = Temporal.ZonedDateTime.from("1969-08-01T12:34:56.789Z[UTC]");
console.log(zdt2.epochNanoseconds); // -13173903211000000n
```

### Creating a ZonedDateTime object from an epochNanoseconds value

You can create a Temporal.ZonedDateTime object from an epochNanoseconds value using the Temporal.ZonedDateTime() constructor.

```
const epochNanoseconds = 1627821296789000000n;
const zdt = new Temporal.ZonedDateTime(epochNanoseconds, "UTC");
console.log(zdt.toString()); // 2021-08-01T12:34:56.789+00:00[UTC]
```

## Specifications

## Browser compatibility

## See also

- Temporal.ZonedDateTime
- Temporal.ZonedDateTime.prototype.epochMilliseconds

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/epochNanoseconds
