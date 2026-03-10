# Date.prototype.getUTCSeconds()

Source: https://devdocs.io/javascript/global_objects/date/getutcseconds

The getUTCSeconds() method of Date instances returns the seconds in the specified date according to universal time.

## Try it

```
const moonLanding = new Date("July 20, 1969, 20:18:04 UTC");

console.log(moonLanding.getUTCSeconds());
// Expected output: 4
```

## Syntax

```
getUTCSeconds()
```

### Parameters

None.

### Return value

An integer, between 0 and 59, representing the seconds for the given date according to universal time. Returns NaN if the date is invalid.

## Examples

### Using getUTCSeconds()

The following example assigns the seconds portion of the current time to the variable seconds.

```
const today = new Date();
const seconds = today.getUTCSeconds();
```

## Specifications

## Browser compatibility

## See also

- Date.prototype.getSeconds()
- Date.prototype.setUTCSeconds()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCSeconds
