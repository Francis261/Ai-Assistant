# Date.prototype.getUTCDate()

Source: https://devdocs.io/javascript/global_objects/date/getutcdate

The getUTCDate() method of Date instances returns the day of the month for this date according to universal time.

## Try it

```
const date1 = new Date("August 19, 1975 23:15:30 GMT+11:00");
const date2 = new Date("August 19, 1975 23:15:30 GMT-11:00");

console.log(date1.getUTCDate());
// Expected output: 19

console.log(date2.getUTCDate());
// Expected output: 20
```

## Syntax

```
getUTCDate()
```

### Parameters

None.

### Return value

An integer, between 1 and 31, representing day of month for the given date according to universal time. Returns NaN if the date is invalid.

## Examples

### Using getUTCDate()

The following example assigns the day of month of the current date to the variable dayOfMonth.

```
const today = new Date();
const dayOfMonth = today.getUTCDate();
```

## Specifications

## Browser compatibility

## See also

- Date.prototype.getUTCDay()
- Date.prototype.getDay()
- Date.prototype.setUTCDate()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCDate
