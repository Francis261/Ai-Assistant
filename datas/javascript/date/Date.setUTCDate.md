# Date.prototype.setUTCDate()

Source: https://devdocs.io/javascript/global_objects/date/setutcdate

The setUTCDate() method of Date instances changes the day of the month for this date according to universal time.

## Try it

```
const event = new Date("August 19, 1975 23:15:30 GMT-3:00");

console.log(event.getUTCDate());
// Expected output: 20

event.setUTCDate(19);

console.log(event.getUTCDate());
// Expected output: 19
```

## Syntax

```
setUTCDate(dateValue)
```

### Parameters

An integer from 1 to 31 representing the day of the month.

### Return value

Changes the Date object in place, and returns its new timestamp. If dateValue is NaN (or other values that get coerced to NaN, such as undefined), the date is set to Invalid Date and NaN is returned.

## Description

If the dateValue is outside of the range of date values for the month, setDate() will update the Date object accordingly.

For example, if 0 is provided for dateValue, the date will be set to the last day of the previous month. If you use 40 for dateValue, and the month stored in the Date object is June, the day will be changed to 10 and the month will be incremented to July.

If a negative number is provided for dateValue, the date will be set counting backwards from the last day of the previous month. -1 would result in the date being set to 1 day before the last day of the previous month.

## Examples

### Using setUTCDate()

```
const theBigDay = new Date();
theBigDay.setUTCDate(20);
```

## Specifications

## Browser compatibility

## See also

- Date.prototype.getUTCDate()
- Date.prototype.setDate()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setUTCDate
