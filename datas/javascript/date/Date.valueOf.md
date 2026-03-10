# Date.prototype.valueOf()

Source: https://devdocs.io/javascript/global_objects/date/valueof

The valueOf() method of Date instances returns the number of milliseconds for this date since the epoch, which is defined as the midnight at the beginning of January 1, 1970, UTC.

## Try it

```
const date1 = new Date(Date.UTC(96, 1, 2, 3, 4, 5));

console.log(date1.valueOf());
// Expected output: 823230245000

const date2 = new Date("02 Feb 1996 03:04:05 GMT");

console.log(date2.valueOf());
// Expected output: 823230245000
```

## Syntax

```
valueOf()
```

### Parameters

None.

### Return value

A number representing the timestamp, in milliseconds, of this date. Returns NaN if the date is invalid.

## Description

The valueOf() method is part of the type coercion protocol. Because Date has a [Symbol.toPrimitive]() method, that method always takes priority over valueOf() when a Date object is implicitly coerced to a number. However, Date.prototype[Symbol.toPrimitive]() still calls this.valueOf() internally.

The Date object overrides the valueOf() method of Object. Date.prototype.valueOf() returns the timestamp of the date, which is functionally equivalent to the Date.prototype.getTime() method.

## Examples

### Using valueOf()

```
const d = new Date(0); // 1970-01-01T00:00:00.000Z
console.log(d.valueOf()); // 0
```

## Specifications

## Browser compatibility

## See also

- Object.prototype.valueOf()
- Date.prototype.getTime()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/valueOf
