# Date.prototype.toString()

Source: https://devdocs.io/javascript/global_objects/date/tostring

The toString() method of Date instances returns a string representing this date interpreted in the local timezone.

## Try it

```
const event = new Date("August 19, 1975 23:15:30");

console.log(event.toString());
// Expected output: "Tue Aug 19 1975 23:15:30 GMT+0200 (CEST)"
// Note: your timezone may vary
```

## Syntax

```
toString()
```

### Parameters

None.

### Return value

A string representing the given date (see description for the format). Returns "Invalid Date" if the date is invalid.

## Description

The toString() method is part of the type coercion protocol. Because Date has a [Symbol.toPrimitive]() method, that method always takes priority over toString() when a Date object is implicitly coerced to a string. However, Date.prototype[Symbol.toPrimitive]() still calls this.toString() internally.

The Date object overrides the toString() method of Object. Date.prototype.toString() returns a string representation of the Date as interpreted in the local timezone, containing both the date and the time — it joins the string representation specified in toDateString() and toTimeString() together, adding a space in between. For example: "Thu Jan 01 1970 00:00:00 GMT+0000 (Coordinated Universal Time)".

Date.prototype.toString() must be called on Date instances. If the this value does not inherit from Date.prototype, a TypeError is thrown.

- If you only want to get the date part, use toDateString().
- If you only want to get the time part, use toTimeString().
- If you want to make the date interpreted as UTC instead of local timezone, use toUTCString().
- If you want to format the date in a more user-friendly format (e.g., localization), use toLocaleString().

## Examples

### Using toString()

```
const d = new Date(0);
console.log(d.toString()); // "Thu Jan 01 1970 00:00:00 GMT+0000 (Coordinated Universal Time)"
```

## Specifications

## Browser compatibility

## See also

- Object.prototype.toString()
- Date.prototype.toDateString()
- Date.prototype.toLocaleString()
- Date.prototype.toTimeString()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toString
