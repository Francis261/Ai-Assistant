# Date.prototype.getSeconds()

Source: https://devdocs.io/javascript/global_objects/date/getseconds

The getSeconds() method of Date instances returns the seconds for this date according to local time.

## Try it

```
const moonLanding = new Date("July 20, 69 00:20:18");

console.log(moonLanding.getSeconds());
// Expected output: 18
```

## Syntax

```
getSeconds()
```

### Parameters

None.

### Return value

An integer, between 0 and 59, representing the seconds for the given date according to local time. Returns NaN if the date is invalid.

## Examples

### Using getSeconds()

The seconds variable has value 30, based on the value of the Date object xmas95.

```
const xmas95 = new Date("1995-12-25T23:15:30");
const seconds = xmas95.getSeconds();

console.log(seconds); // 30
```

## Specifications

## Browser compatibility

## See also

- Date.prototype.getUTCSeconds()
- Date.prototype.setSeconds()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getSeconds
