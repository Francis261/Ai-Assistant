# Temporal.PlainTime.prototype.toString()

Source: https://devdocs.io/javascript/global_objects/temporal/plaintime/tostring

The toString() method of Temporal.PlainTime instances returns a string representing this time in the RFC 9557 format.

## Syntax

```
toString()
toString(options)
```

### Parameters

An object containing some or all of the following properties (in the order they are retrieved and validated):

Either an integer from 0 to 9, or the string "auto". The default is "auto". If "auto", then trailing zeros are removed from the fractional seconds. Otherwise, the fractional part of the second component contains this many digits, padded with zeros or rounded as necessary.

A string specifying how to round off fractional second digits beyond fractionalSecondDigits. See Intl.NumberFormat(). Defaults to "trunc".

A string specifying the smallest unit to include in the output. Possible values are "minute", "second", "millisecond", "microsecond", and "nanosecond", or their plural forms, which (except "minute") are equivalent to fractionalSecondDigits values of 0, 3, 6, 9, respectively. If specified, then fractionalSecondDigits is ignored.

### Return value

A string in the RFC 9557 format representing this time.

### Exceptions

Thrown if any of the options is invalid.

Thrown if options is not an object or undefined.

## Examples

### Using toString()

```
const time = Temporal.PlainTime.from("12:34:56");
console.log(time.toString()); // '12:34:56'
```

### Using options

```
const time1 = Temporal.PlainTime.from("12:00:00");
console.log(time1.toString()); // '12:00:00'
console.log(time1.toString({ fractionalSecondDigits: 1 })); // '12:00:00.0'
console.log(time1.toString({ smallestUnit: "minute" })); // '12:00'
console.log(time1.toString({ smallestUnit: "nanosecond" })); // '12:00:00.000000000'

const time2 = Temporal.PlainTime.from("12:34:56.123456789");
console.log(time2.toString({ fractionalSecondDigits: 4 })); // '12:34:56.1234'
console.log(
  time2.toString({ fractionalSecondDigits: 4, roundingMode: "halfExpand" }),
); // '12:34:56.1235'
```

## Specifications

## Browser compatibility

## See also

- Temporal.PlainTime
- Temporal.PlainTime.from()
- Temporal.PlainTime.prototype.toJSON()
- Temporal.PlainTime.prototype.toLocaleString()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/toString
