# RangeError: invalid date

Source: https://devdocs.io/javascript/errors/invalid_date

The JavaScript exception "invalid date" occurs when an invalid date is attempted to be converted to an ISO date string.

## Message

```
RangeError: Invalid time value (V8-based)
RangeError: invalid date (Firefox)
RangeError: Invalid Date (Safari)
```

## Error type

## What went wrong?

You are converting an invalid date value to an ISO date string. This usually happens in one of three ways:

- Calling the toISOString() method
- Calling the toJSON() method, which implicitly calls toISOString
- Using JSON.stringify() to stringify the date, which implicitly calls toJSON

An invalid date is produced when you attempt to parse an invalid date string, or set the timestamp to an out-of-bounds value. Invalid dates usually cause all date methods to return NaN or other special values. However, such dates do not have valid ISO string representations, so an error is thrown when you attempt to do so.

## Examples

### Invalid cases

```
const invalid = new Date("nothing");
invalid.toISOString(); // RangeError: invalid date
invalid.toJSON(); // RangeError: invalid date
JSON.stringify({ date: invalid }); // RangeError: invalid date
```

However, most other methods return special values:

```
invalid.toString(); // "Invalid Date"
invalid.getDate(); // NaN
```

For more details, see the Date.parse() documentation.

### Valid cases

```
new Date("05 October 2011 14:48 UTC").toISOString(); // "2011-10-05T14:48:00.000Z"
new Date(1317826080).toISOString(); // "2011-10-05T14:48:00.000Z"
```

## See also

- Date
- Date.prototype.parse()
- Date.prototype.toISOString()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Invalid_date
