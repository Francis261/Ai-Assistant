# Date.prototype.setTime()

Source: https://devdocs.io/javascript/global_objects/date/settime

The setTime() method of Date instances changes the timestamp for this date, which is the number of milliseconds since the epoch, defined as the midnight at the beginning of January 1, 1970, UTC.

## Try it

```
const launchDate = new Date("July 1, 1999, 12:00:00");
const futureDate = new Date();
futureDate.setTime(launchDate.getTime());

console.log(futureDate);
// Expected output: "Thu Jul 01 1999 12:00:00 GMT+0200 (CEST)"

const fiveMinutesInMs = 5 * 60 * 1000;
futureDate.setTime(futureDate.getTime() + fiveMinutesInMs);

console.log(futureDate);
// Expected output: "Thu Jul 01 1999 12:05:00 GMT+0200 (CEST)"
// Note: your timezone may vary
```

## Syntax

```
setTime(timeValue)
```

### Parameters

An integer representing the new timestamp — the number of milliseconds since the midnight at the beginning of January 1, 1970, UTC.

### Return value

Changes the Date object in place, and returns its new timestamp. If timeValue is NaN (or other values that get coerced to NaN, such as undefined), the date is set to Invalid Date and NaN is returned.

## Examples

### Using setTime()

```
const theBigDay = new Date("1999-07-01");
const sameAsBigDay = new Date();
sameAsBigDay.setTime(theBigDay.getTime());
```

## Specifications

## Browser compatibility

## See also

- Date.prototype.getTime()
- Date.prototype.setUTCHours()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setTime
