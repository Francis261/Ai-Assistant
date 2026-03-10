# Temporal.Duration.prototype.toString()

Source: https://devdocs.io/javascript/global_objects/temporal/duration/tostring

The toString() method of Temporal.Duration instances returns a string representing this duration in the ISO 8601 format.

## Syntax

```
toString()
toString(options)
```

### Parameters

An object containing some or all of the following properties (in the order they are retrieved and validated):

Either an integer from 0 to 9, or the string "auto". The default is "auto". If "auto", then trailing zeros are removed from the fractional seconds. Otherwise, the fractional part of the second component contains this many digits, padded with zeros or rounded as necessary.

A string specifying how to round off fractional second digits beyond fractionalSecondDigits. See Intl.NumberFormat(). Defaults to "trunc".

A string specifying the smallest unit to include in the output. Possible values are "second", "millisecond", "microsecond", and "nanosecond", or their plural forms, which are equivalent to fractionalSecondDigits values of 0, 3, 6, 9, respectively. If specified, then fractionalSecondDigits is ignored.

### Return value

A string representing the given duration in the ISO 8601 format, with subsecond components formatted according to the options. The zero duration is represented as "PT0S".

### Exceptions

Thrown if any of the options is invalid.

## Examples

### Using toString()

```
const duration = Temporal.Duration.from({ hours: 1, minutes: 30, seconds: 15 });
console.log(duration.toString()); // 'PT1H30M15S'

// Stringification implicitly calls toString()
console.log(`${duration}`); // 'PT1H30M15S'
```

### Using options

```
const worldRecord = Temporal.Duration.from({ seconds: 9, milliseconds: 580 });
console.log(worldRecord.toString()); // 'PT9.58S'
console.log(worldRecord.toString({ fractionalSecondDigits: 1 })); // 'PT9.5S'
console.log(worldRecord.toString({ fractionalSecondDigits: 0 })); // 'PT9S'
console.log(worldRecord.toString({ smallestUnit: "millisecond" })); // 'PT9.580S'
console.log(
  worldRecord.toString({
    fractionalSecondDigits: 1,
    roundingMode: "halfExpand",
  }),
); // 'PT9.6S'
```

## Specifications

## Browser compatibility

## See also

- Temporal.Duration
- Temporal.Duration.prototype.toJSON()
- Temporal.Duration.prototype.toLocaleString()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/toString
