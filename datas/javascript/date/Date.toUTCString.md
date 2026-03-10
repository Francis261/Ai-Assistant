# Date.prototype.toUTCString()

Source: https://devdocs.io/javascript/global_objects/date/toutcstring

The toUTCString() method of Date instances returns a string representing this date in the RFC 7231 format, with negative years allowed. The timezone is always UTC. toGMTString() is an alias of this method.

## Try it

```
const event = new Date("14 Jun 2017 00:00:00 PDT");

console.log(event.toUTCString());
// Expected output: "Wed, 14 Jun 2017 07:00:00 GMT"
```

## Syntax

```
toUTCString()
```

### Parameters

None.

### Return value

A string representing the given date using the UTC time zone (see description for the format). Returns "Invalid Date" if the date is invalid.

## Description

The value returned by toUTCString() is a string in the form Www, dd Mmm yyyy HH:mm:ss GMT, where:

### Aliasing

JavaScript's Date API was inspired by Java's java.util.Date library (while the latter had become de facto legacy since Java 1.1 in 1997). In particular, the Java Date class had a method called toGMTString — which was poorly named, because the Greenwich Mean Time is not equivalent to the Coordinated Universal Time, while JavaScript dates always operate by UTC time. For web compatibility reasons, toGMTString remains as an alias to toUTCString, and they refer to the exact same function object. This means:

```
Date.prototype.toGMTString.name === "toUTCString";
```

## Examples

### Using toUTCString()

```
const d = new Date(0);
console.log(d.toUTCString()); // 'Thu, 01 Jan 1970 00:00:00 GMT'
```

## Specifications

## Browser compatibility

## See also

- Date.prototype.toLocaleString()
- Date.prototype.toString()
- Date.prototype.toISOString()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toUTCString
