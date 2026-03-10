# Date.prototype.getDate()

Source: https://devdocs.io/javascript/global_objects/date/getdate

The getDate() method of Date instances returns the day of the month for this date according to local time.

## Try it

```
const birthday = new Date("August 19, 1975 23:15:30");
const date = birthday.getDate();

console.log(date);
// Expected output: 19
```

## Syntax

```
getDate()
```

### Parameters

None.

### Return value

An integer, between 1 and 31, representing the day of the month for the given date according to local time. Returns NaN if the date is invalid.

## Examples

### Using getDate()

The day variable has value 25, based on the value of the Date object xmas95.

```
const xmas95 = new Date("1995-12-25T23:15:30");
const day = xmas95.getDate();

console.log(day); // 25
```

## Specifications

## Browser compatibility

## See also

- Date.prototype.getUTCDate()
- Date.prototype.getUTCDay()
- Date.prototype.setDate()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDate
