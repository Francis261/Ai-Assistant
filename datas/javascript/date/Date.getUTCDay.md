# Date.prototype.getUTCDay()

Source: https://devdocs.io/javascript/global_objects/date/getutcday

The getUTCDay() method of Date instances returns the day of the week for this date according to universal time, where 0 represents Sunday.

## Try it

```
const date1 = new Date("August 19, 1975 23:15:30 GMT+11:00");
const date2 = new Date("August 19, 1975 23:15:30 GMT-11:00");

// Tuesday
console.log(date1.getUTCDay());
// Expected output: 2

// Wednesday
console.log(date2.getUTCDay());
// Expected output: 3
```

## Syntax

```
getUTCDay()
```

### Parameters

None.

### Return value

An integer corresponding to the day of the week for the given date according to universal time: 0 for Sunday, 1 for Monday, 2 for Tuesday, and so on. Returns NaN if the date is invalid.

## Examples

### Using getUTCDay()

The following example assigns the weekday portion of the current date to the variable weekday.

```
const today = new Date();
const weekday = today.getUTCDay();
```

## Specifications

## Browser compatibility

## See also

- Date.prototype.getUTCDate()
- Date.prototype.getDay()
- Date.prototype.setUTCDate()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCDay
