# Temporal.Instant.prototype.valueOf()

Source: https://devdocs.io/javascript/global_objects/temporal/instant/valueof

The valueOf() method of Temporal.Instant instances throws a TypeError, which prevents Temporal.Instant instances from being implicitly converted to primitives when used in arithmetic or comparison operations.

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

Because both primitive conversion and number conversion call valueOf() before toString(), if valueOf() is absent, then an expression like instant1 > instant2 would implicitly compare them as strings, which may have unexpected results. By throwing a TypeError, Temporal.Instant instances prevent such implicit conversions. You need to explicitly convert them to numbers using Temporal.Instant.prototype.epochNanoseconds, or use the Temporal.Instant.compare() static method to compare them.

## Examples

### Arithmetic and comparison operations on Temporal.Instant

All arithmetic and comparison operations on Temporal.Instant instances should use the dedicated methods or convert them to primitives explicitly.

```
const instant1 = Temporal.Instant.fromEpochMilliseconds(0);
const instant2 = Temporal.Instant.fromEpochMilliseconds(1000);
instant1 > instant2; // TypeError: can't convert Instant to primitive type
instant1.epochNanoseconds > instant2.epochNanoseconds; // false
Temporal.Instant.compare(instant1, instant2); // -1

instant2 - instant1; // TypeError: can't convert Instant to primitive type
instant2.since(instant1).toString(); // "PT1S"
```

## Specifications

## Browser compatibility

## See also

- Temporal.Instant
- Temporal.Instant.prototype.toString()
- Temporal.Instant.prototype.toJSON()
- Temporal.Instant.prototype.toLocaleString()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant/valueOf
