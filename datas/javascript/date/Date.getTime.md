# Date.prototype.getTime()

Source: https://devdocs.io/javascript/global_objects/date/gettime

The getTime() method of Date instances returns the number of milliseconds for this date since the epoch, which is defined as the midnight at the beginning of January 1, 1970, UTC.

## Try it

```
const moonLanding = new Date("July 20, 69 20:17:40 GMT+00:00");

// Milliseconds since Jan 1, 1970, 00:00:00.000 GMT
console.log(moonLanding.getTime());
// Expected output: -14182940000
```

## Syntax

```
getTime()
```

### Parameters

None.

### Return value

A number representing the timestamp, in milliseconds, of this date. Returns NaN if the date is invalid.

## Description

Date objects are fundamentally represented by a timestamp, and this method allows you to retrieve the timestamp. You can use this method to help assign a date and time to another Date object. This method is functionally equivalent to the valueOf() method.

## Examples

### Using getTime() for copying dates

Constructing a date object with the identical time value.

```
// Since month is zero based, birthday will be January 10, 1995
const birthday = new Date(1994, 12, 10);
const copy = new Date();
copy.setTime(birthday.getTime());
```

### Measuring execution time

Subtracting two subsequent getTime() calls on newly generated Date objects, give the time span between these two calls. This can be used to calculate the executing time of some operations. See also Date.now() to prevent instantiating unnecessary Date objects.

```
let end, start;

start = new Date();
for (let i = 0; i < 1000; i++) {
  Math.sqrt(i);
}
end = new Date();

console.log(`Operation took ${end.getTime() - start.getTime()} msec`);
```

Note: In browsers that support the Performance API's high-resolution time feature, Performance.now() can provide more reliable and precise measurements of elapsed time than Date.now().

## Specifications

## Browser compatibility

## See also

- Date.prototype.setTime()
- Date.prototype.valueOf()
- Date.now()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime
