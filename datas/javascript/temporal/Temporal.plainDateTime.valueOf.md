# Temporal.PlainDateTime.prototype.valueOf()

Source: https://devdocs.io/javascript/global_objects/temporal/plaindatetime/valueof

The valueOf() method of Temporal.PlainDateTime instances throws a TypeError, which prevents Temporal.PlainDateTime instances from being implicitly converted to primitives when used in arithmetic or comparison operations.

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

Because both primitive conversion and number conversion call valueOf() before toString(), if valueOf() is absent, then an expression like dateTime1 > dateTime2 would implicitly compare them as strings, which may have unexpected results. By throwing a TypeError, Temporal.PlainDateTime instances prevent such implicit conversions. You need to explicitly convert them to strings using Temporal.PlainDateTime.prototype.toString(), or use the Temporal.PlainDateTime.compare() static method to compare them.

## Examples

### Arithmetic and comparison operations on Temporal.PlainDateTime

All arithmetic and comparison operations on Temporal.PlainDateTime instances should use the dedicated methods or convert them to primitives explicitly.

```
const dt1 = Temporal.PlainDateTime.from("2022-01-01T00:00:00");
const dt2 = Temporal.PlainDateTime.from("2022-07-01T00:00:00");
dt1 > dt2; // TypeError: can't convert PlainDateTime to primitive type
Temporal.PlainDateTime.compare(dt1, dt2); // -1

dt2 - dt1; // TypeError: can't convert PlainDateTime to primitive type
dt2.since(dt1).toString(); // "P181D"
```

## Specifications

## Browser compatibility

## See also

- Temporal.PlainDateTime
- Temporal.PlainDateTime.prototype.toString()
- Temporal.PlainDateTime.prototype.toJSON()
- Temporal.PlainDateTime.prototype.toLocaleString()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/valueOf
