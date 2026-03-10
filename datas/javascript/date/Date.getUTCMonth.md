# Date.prototype.getUTCMonth()

Source: https://devdocs.io/javascript/global_objects/date/getutcmonth

The getUTCMonth() method of Date instances returns the month for this date according to universal time, as a zero-based value (where zero indicates the first month of the year).

## Try it

```
const date1 = new Date("December 31, 1975, 23:15:30 GMT+11:00");
const date2 = new Date("December 31, 1975, 23:15:30 GMT-11:00");

// December
console.log(date1.getUTCMonth());
// Expected output: 11

// January
console.log(date2.getUTCMonth());
// Expected output: 0
```

## Syntax

```
getUTCMonth()
```

### Parameters

None.

### Return value

An integer, between 0 and 11, representing the month for the given date according to universal time: 0 for January, 1 for February, and so on. Returns NaN if the date is invalid.

## Examples

### Using getUTCMonth()

The following example assigns the month portion of the current date to the variable month.

```
const today = new Date();
const month = today.getUTCMonth();
```

## Specifications

## Browser compatibility

## See also

- Date.prototype.getMonth()
- Date.prototype.setUTCMonth()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCMonth
