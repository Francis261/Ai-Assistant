# Date.prototype.getUTCHours()

Source: https://devdocs.io/javascript/global_objects/date/getutchours

The getUTCHours() method of Date instances returns the hours for this date according to universal time.

## Try it

```
const date1 = new Date("December 31, 1975, 23:15:30 GMT+11:00");
const date2 = new Date("December 31, 1975, 23:15:30 GMT-11:00");

console.log(date1.getUTCHours());
// Expected output: 12

console.log(date2.getUTCHours());
// Expected output: 10
```

## Syntax

```
getUTCHours()
```

### Parameters

None.

### Return value

An integer, between 0 and 23, representing the hours for the given date according to universal time. Returns NaN if the date is invalid.

## Examples

### Using getUTCHours()

The following example assigns the hours portion of the current time to the variable hours.

```
const today = new Date();
const hours = today.getUTCHours();
```

## Specifications

## Browser compatibility

## See also

- Date.prototype.getHours()
- Date.prototype.setUTCHours()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCHours
