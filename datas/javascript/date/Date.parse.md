# Date.parse()

Source: https://devdocs.io/javascript/global_objects/date/parse

The Date.parse() static method parses a string representation of a date, and returns the date's timestamp.

## Try it

```
// Standard date-time string format
const unixTimeZero = Date.parse("1970-01-01T00:00:00Z");
// Non-standard format resembling toUTCString()
const javaScriptRelease = Date.parse("04 Dec 1995 00:12:00 GMT");

console.log(unixTimeZero);
// Expected output: 0

console.log(javaScriptRelease);
// Expected output: 818035920000
```

## Syntax

```
Date.parse(dateString)
```

### Parameters

A string in the date time string format. See the linked reference for caveats on using different formats.

### Return value

A number representing the timestamp of the given date. If dateString fails to be parsed as a valid date, NaN is returned.

## Description

This function is useful for setting date values based on string values, for example in conjunction with the setTime() method.

The formats that parse() can handle are not explicitly specified, but there are a few invariants:

- The date time string format (produced by toISOString()) must be supported.
- If x is any Date whose milliseconds amount is zero, then x.valueOf() should be equal to any of the following: Date.parse(x.toString()), Date.parse(x.toUTCString()), Date.parse(x.toISOString()). This means the formats produced by toString() and toUTCString() should be supported too.
- The spec does not require support for the format produced by toLocaleString(). However, major engines all try to support toLocaleString("en-US") format.

Other formats are implementation-defined and may not work across all browsers. A library can help if many different formats are to be accommodated. In fact, the unreliability of Date.parse() is one of the motivations for the Temporal API to be introduced.

Because parse() is a static method of Date, you always use it as Date.parse(), rather than as a method of a Date object you created.

## Examples

### Using Date.parse()

The following calls all return 1546300800000. The first will imply UTC time because it's date-only, and the others explicitly specify the UTC timezone.

```
Date.parse("2019-01-01");
Date.parse("2019-01-01T00:00:00.000Z");
Date.parse("2019-01-01T00:00:00.000+00:00");
```

The following call, which does not specify a time zone will be set to 2019-01-01 at 00:00:00 in the local timezone of the system, because it has both date and time.

```
Date.parse("2019-01-01T00:00:00");
```

### toString() and toUTCString() formats

Apart from the standard date time string format, the toString() and toUTCString() formats are supported:

```
// toString() format
Date.parse("Thu Jan 01 1970 00:00:00 GMT-0500 (Eastern Standard Time)");
// 18000000 in all implementations in all timezones

// toUTCString() format
Date.parse("Thu, 01 Jan 1970 00:00:00 GMT");
// 0 in all implementations in all timezones
```

### Non-standard date strings

Note: This section contains implementation-specific behavior that may be inconsistent across browsers or different versions of browsers. It is not meant to be a comprehensive browser compatibility table and you should always conduct your own tests before using any format in your code.

Implementations usually default to the local time zone when the date string is non-standard. For consistency, we will assume that the runtime uses the UTC timezone, and unless specified otherwise, the output will vary with the device's time zone. Daylight Saving Time (DST), of the local time zone, can also have an effect on this.

Here are some more examples of non-standard date strings. Browsers are very lenient when parsing date strings and may discard any part of a string that they cannot parse. For compatibility reasons, browsers often copy each other's behavior, so these handling patterns tend to propagate cross-browser. As previously stated, the following examples are for illustration only, and are not exhaustive by any means:

## Specifications

## Browser compatibility

## See also

- Date.UTC()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse
