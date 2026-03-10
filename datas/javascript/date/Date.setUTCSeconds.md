# Date.prototype.setUTCSeconds()

Source: https://devdocs.io/javascript/global_objects/date/setutcseconds

The setUTCSeconds() method of Date instances changes the seconds and/or milliseconds for this date according to universal time.

## Try it

```
const date = new Date("December 31, 1975, 23:15:30 GMT+11:00");

console.log(date.getUTCSeconds());
// Expected output: 30

date.setUTCSeconds(39);

console.log(date.getUTCSeconds());
// Expected output: 39
```

## Syntax

```
setUTCSeconds(secondsValue)
setUTCSeconds(secondsValue, msValue)
```

### Parameters

An integer between 0 and 59 representing the seconds.

An integer between 0 and 999 representing the milliseconds.

### Return value

Changes the Date object in place, and returns its new timestamp. If a parameter is NaN (or other values that get coerced to NaN, such as undefined), the date is set to Invalid Date and NaN is returned.

## Description

If you do not specify the msValue parameter, the value returned from the getUTCMilliseconds() method is used.

If a parameter you specify is outside of the expected range, setUTCSeconds() attempts to update the date information in the Date object accordingly. For example, if you use 100 for secondsValue, the minutes stored in the Date object will be incremented by 1, and 40 will be used for seconds.

## Examples

### Using setUTCSeconds()

```
const theBigDay = new Date();
theBigDay.setUTCSeconds(20);
```

## Specifications

## Browser compatibility

## See also

- Date.prototype.getUTCSeconds()
- Date.prototype.setSeconds()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCSeconds
