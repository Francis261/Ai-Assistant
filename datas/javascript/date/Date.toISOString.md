# Date.prototype.toISOString()

Source: https://devdocs.io/javascript/global_objects/date/toisostring

The toISOString() method of Date instances returns a string representing this date in the date time string format, a simplified format based on ISO 8601, which is always 24 or 27 characters long (YYYY-MM-DDTHH:mm:ss.sssZ or ±YYYYYY-MM-DDTHH:mm:ss.sssZ, respectively). The timezone is always UTC, as denoted by the suffix Z.

## Try it

```
const event = new Date("05 October 2011 14:48 UTC");
console.log(event.toString());
// Expected output: "Wed Oct 05 2011 16:48:00 GMT+0200 (CEST)"
// Note: your timezone may vary

console.log(event.toISOString());
// Expected output: "2011-10-05T14:48:00.000Z"
```

## Syntax

```
toISOString()
```

### Parameters

None.

### Return value

A string representing the given date in the date time string format according to universal time. It's the same format as the one required to be recognized by Date.parse().

### Exceptions

Thrown if the date is invalid or if it corresponds to a year that cannot be represented in the date string format.

## Examples

### Using toISOString()

```
const d = new Date(0);

console.log(d.toISOString()); // "1970-01-01T00:00:00.000Z"
```

## Specifications

## Browser compatibility

## See also

- Date.prototype.toLocaleDateString()
- Date.prototype.toString()
- Date.prototype.toUTCString()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString
