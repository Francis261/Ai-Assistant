# Date.prototype.setUTCMinutes()

Source: https://devdocs.io/javascript/global_objects/date/setutcminutes

The setUTCMinutes() method of Date instances changes the minutes for this date according to universal time.

## Try it

```
const date = new Date("December 31, 1975, 23:15:30 GMT+11:00");

console.log(date.getUTCMinutes());
// Expected output: 15

date.setUTCMinutes(25);

console.log(date.getUTCMinutes());
// Expected output: 25
```

## Syntax

```
setUTCMinutes(minutesValue)
setUTCMinutes(minutesValue, secondsValue)
setUTCMinutes(minutesValue, secondsValue, msValue)
```

### Parameters

An integer between 0 and 59 representing the minutes.

An integer between 0 and 59 representing the seconds. If you specify secondsValue, you must also specify minutesValue.

An integer between 0 and 999 representing the milliseconds. If you specify msValue, you must also specify minutesValue and secondsValue.

### Return value

Changes the Date object in place, and returns its new timestamp. If a parameter is NaN (or other values that get coerced to NaN, such as undefined), the date is set to Invalid Date and NaN is returned.

## Description

If you do not specify the secondsValue and msValue parameters, the values returned from getUTCSeconds() and getUTCMilliseconds() methods are used.

If a parameter you specify is outside of the expected range, setUTCMinutes() attempts to update the date information in the Date object accordingly. For example, if you use 100 for secondsValue, the minutes will be incremented by 1 (minutesValue + 1), and 40 will be used for seconds.

## Examples

### Using setUTCMinutes()

```
const theBigDay = new Date();
theBigDay.setUTCMinutes(43);
```

## Specifications

## Browser compatibility

## See also

- Date.prototype.getUTCMinutes()
- Date.prototype.setMinutes()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCMinutes
