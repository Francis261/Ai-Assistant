# Temporal.ZonedDateTime.prototype.valueOf()

Source: https://devdocs.io/javascript/global_objects/temporal/zoneddatetime/valueof

The valueOf() method of Temporal.ZonedDateTime instances throws a TypeError, which prevents Temporal.ZonedDateTime instances from being implicitly converted to primitives when used in arithmetic or comparison operations.

## Syntax

```
valueOf()
```

### Parameters

None.

### Return value

None.

### Exceptions

Always thrown.

## Description

Because both primitive conversion and number conversion call valueOf() before toString(), if valueOf() is absent, then an expression like yearMonth1 > yearMonth2 would implicitly compare them as strings, which may have unexpected results. By throwing a TypeError, Temporal.ZonedDateTime instances prevent such implicit conversions. You need to explicitly convert them to numbers using Temporal.ZonedDateTime.prototype.epochNanoseconds, or use the Temporal.ZonedDateTime.compare() static method to compare them.

## Examples

### Arithmetic and comparison operations on Temporal.ZonedDateTime

All arithmetic and comparison operations on Temporal.ZonedDateTime instances should use the dedicated methods or convert them to primitives explicitly.

```
const zdt1 = Temporal.ZonedDateTime.from(
  "2022-01-01T00:00:00[America/New_York]",
);
const zdt2 = Temporal.ZonedDateTime.from(
  "2022-07-01T00:00:00[America/New_York]",
);
zdt1 > zdt2; // TypeError: can't convert ZonedDateTime to primitive type
Temporal.ZonedDateTime.compare(zdt1, zdt2); // -1

zdt2 - zdt1; // TypeError: can't convert ZonedDateTime to primitive type
zdt2.since(zdt1).toString(); // "PT4343H"
```

## Specifications

## Browser compatibility

## See also

- Temporal.ZonedDateTime
- Temporal.ZonedDateTime.prototype.toString()
- Temporal.ZonedDateTime.prototype.toJSON()
- Temporal.ZonedDateTime.prototype.toLocaleString()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/valueOf
