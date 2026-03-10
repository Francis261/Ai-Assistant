# Temporal.PlainDate.prototype.valueOf()

Source: https://devdocs.io/javascript/global_objects/temporal/plaindate/valueof

The valueOf() method of Temporal.PlainDate instances throws a TypeError, which prevents Temporal.PlainDate instances from being implicitly converted to primitives when used in arithmetic or comparison operations.

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

Because both primitive conversion and number conversion call valueOf() before toString(), if valueOf() is absent, then an expression like date1 > date2 would implicitly compare them as strings, which may have unexpected results. By throwing a TypeError, Temporal.PlainDate instances prevent such implicit conversions. You need to explicitly convert them to strings using Temporal.PlainDate.prototype.toString(), or use the Temporal.PlainDate.compare() static method to compare them.

## Examples

### Arithmetic and comparison operations on Temporal.PlainDate

All arithmetic and comparison operations on Temporal.PlainDate instances should use the dedicated methods or convert them to primitives explicitly.

```
const date1 = Temporal.PlainDate.from("2022-01-01");
const date2 = Temporal.PlainDate.from("2022-07-01");
date1 > date2; // TypeError: can't convert PlainDate to primitive type
Temporal.PlainDate.compare(date1, date2); // -1

date2 - date1; // TypeError: can't convert PlainDate to primitive type
date2.since(date1).toString(); // "P181D"
```

## Specifications

## Browser compatibility

## See also

- Temporal.PlainDate
- Temporal.PlainDate.prototype.toString()
- Temporal.PlainDate.prototype.toJSON()
- Temporal.PlainDate.prototype.toLocaleString()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/valueOf
