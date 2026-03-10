# Temporal.ZonedDateTime.prototype.offsetNanoseconds

Source: https://devdocs.io/javascript/global_objects/temporal/zoneddatetime/offsetnanoseconds

The offsetNanoseconds accessor property of Temporal.ZonedDateTime instances returns an integer representing the offset used to interpret the internal instant, as a number of nanoseconds (positive or negative). The value is a safe integer because it's less than a day, which is 8.64e15 nanoseconds.

The set accessor of offsetNanoseconds is undefined. You cannot change this property directly. Change offset to change this property too.

## Examples

### Using offsetNanoseconds

```
const dt = Temporal.ZonedDateTime.from(
  "2021-07-01T12:00:00-07:00[America/Los_Angeles]",
);
console.log(dt.offsetNanoseconds); // -25200000000000

const dt2 = Temporal.ZonedDateTime.from(
  "2021-07-01T12:00:00+08:00[Asia/Shanghai]",
);
console.log(dt2.offsetNanoseconds); // 28800000000000

const dt3 = Temporal.ZonedDateTime.from(
  "1900-01-01T00:00:00+00:09:21[Europe/Paris]",
);
console.log(dt3.offsetNanoseconds); // 561000000000
```

Here's one way to get a ZonedDateTime representing the same wall-clock time in UTC:

```
const dt = Temporal.ZonedDateTime.from(
  "2021-07-01T12:00:00-07:00[America/Los_Angeles]",
);
const dtInUTC = dt.add({ nanoseconds: dt.offsetNanoseconds });
console.log(dtInUTC.withTimeZone("UTC").toString()); // "2021-07-01T12:00:00+00:00[UTC]"
```

Here's a better way to get the same result:

```
const dt = Temporal.ZonedDateTime.from(
  "2021-07-01T12:00:00-07:00[America/Los_Angeles]",
);
const dtInUTC = dt.toPlainDateTime().toZonedDateTime("UTC");
console.log(dtInUTC.toString()); // "2021-07-01T12:00:00+00:00[UTC]"
```

## Specifications

## Browser compatibility

## See also

- Temporal.ZonedDateTime
- Temporal.ZonedDateTime.prototype.with()
- Temporal.ZonedDateTime.prototype.withTimeZone()
- Temporal.ZonedDateTime.prototype.offset
- Temporal.ZonedDateTime.prototype.timeZoneId

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/offsetNanoseconds
