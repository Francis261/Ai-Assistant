# Date.prototype.toDateString()

Source: https://devdocs.io/javascript/global_objects/date/todatestring

The toDateString() method of Date instances returns a string representing the date portion of this date interpreted in the local timezone.

## Try it

```
const event = new Date(1993, 6, 28, 14, 39, 7);

console.log(event.toString());
// Expected output: "Wed Jul 28 1993 14:39:07 GMT+0200 (CEST)"
// Note: your timezone may vary

console.log(event.toDateString());
// Expected output: "Wed Jul 28 1993"
```

## Syntax

```
toDateString()
```

### Parameters

None.

### Return value

A string representing the date portion of the given date (see description for the format). Returns "Invalid Date" if the date is invalid.

## Description

Date instances refer to a specific point in time. toDateString() interprets the date in the local timezone and formats the date part in English. It always uses the following format, separated by spaces:

1. First three letters of the week day name
2. First three letters of the month name
3. Two-digit day of the month, padded on the left a zero if necessary
4. Four-digit year (at least), padded on the left with zeros if necessary. May have a negative sign

For example: "Thu Jan 01 1970".

- If you only want to get the time part, use toTimeString().
- If you want to get both the date and time, use toString().
- If you want to make the date interpreted as UTC instead of local timezone, use toUTCString().
- If you want to format the date in a more user-friendly format (e.g., localization), use toLocaleDateString().

## Examples

### Using toDateString()

```
const d = new Date(0);

console.log(d.toString()); // "Thu Jan 01 1970 00:00:00 GMT+0000 (Coordinated Universal Time)"
console.log(d.toDateString()); // "Thu Jan 01 1970"
```

## Specifications

## Browser compatibility

## See also

- Date.prototype.toLocaleDateString()
- Date.prototype.toTimeString()
- Date.prototype.toString()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toDateString
