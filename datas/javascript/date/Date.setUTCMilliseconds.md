# Date.prototype.setUTCMilliseconds()

Source: https://devdocs.io/javascript/global_objects/date/setutcmilliseconds

The setUTCMilliseconds() method of Date instances changes the milliseconds for this date according to universal time.

## Try it

```
const date = new Date("2018-01-24T12:38:29.069Z");

console.log(date.getUTCMilliseconds());
// Expected output: 69

date.setUTCMilliseconds(420);

console.log(date.getUTCMilliseconds());
// Expected output: 420
```

## Syntax

```
setUTCMilliseconds(millisecondsValue)
```

### Parameters

An integer between 0 and 999 representing the milliseconds.

### Return value

Changes the Date object in place, and returns its new timestamp. If millisecondsValue is NaN (or other values that get coerced to NaN, such as undefined), the date is set to Invalid Date and NaN is returned.

## Description

If a parameter you specify is outside of the expected range, setUTCMilliseconds() attempts to update the date information in the Date object accordingly. For example, if you use 1100 for millisecondsValue, the seconds stored in the Date object will be incremented by 1, and 100 will be used for milliseconds.

## Examples

### Using setUTCMilliseconds()

```
const theBigDay = new Date();
theBigDay.setUTCMilliseconds(500);
```

## Specifications

## Browser compatibility

## See also

- Date.prototype.getUTCMilliseconds()
- Date.prototype.setMilliseconds()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCMilliseconds
