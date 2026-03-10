# Date.prototype.getUTCFullYear()

Source: https://devdocs.io/javascript/global_objects/date/getutcfullyear

The getUTCFullYear() method of Date instances returns the year for this date according to universal time.

## Try it

```
const date1 = new Date("December 31, 1975, 23:15:30 GMT+11:00");
const date2 = new Date("December 31, 1975, 23:15:30 GMT-11:00");

console.log(date1.getUTCFullYear());
// Expected output: 1975

console.log(date2.getUTCFullYear());
// Expected output: 1976
```

## Syntax

```
getUTCFullYear()
```

### Parameters

None.

### Return value

An integer representing the year for the given date according to universal time. Returns NaN if the date is invalid.

## Description

Unlike getYear(), the value returned by getUTCFullYear() is an absolute number. For dates between the years 1000 and 9999, getFullYear() returns a four-digit number, for example, 1995. Use this function to make sure a year is compliant with years after 2000.

## Examples

### Using getUTCFullYear()

The following example assigns the four-digit value of the current year to the variable year.

```
const today = new Date();
const year = today.getUTCFullYear();
```

## Specifications

## Browser compatibility

## See also

- Date.prototype.getFullYear()
- Date.prototype.setFullYear()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCFullYear
