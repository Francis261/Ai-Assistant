# Date.prototype.getMinutes()

Source: https://devdocs.io/javascript/global_objects/date/getminutes

The getMinutes() method of Date instances returns the minutes for this date according to local time.

## Try it

```
const birthday = new Date("March 13, 08 04:20");

console.log(birthday.getMinutes());
// Expected output: 20
```

## Syntax

```
getMinutes()
```

### Parameters

None.

### Return value

An integer, between 0 and 59, representing the minutes for the given date according to local time. Returns NaN if the date is invalid.

## Examples

### Using getMinutes()

The minutes variable has value 15, based on the value of the Date object xmas95.

```
const xmas95 = new Date("1995-12-25T23:15:30");
const minutes = xmas95.getMinutes();

console.log(minutes); // 15
```

## Specifications

## Browser compatibility

## See also

- Date.prototype.getUTCMinutes()
- Date.prototype.setMinutes()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMinutes
