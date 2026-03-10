# Temporal.Duration.prototype.abs()

Source: https://devdocs.io/javascript/global_objects/temporal/duration/abs

The abs() method of Temporal.Duration instances returns a new Temporal.Duration object with the absolute value of this duration (all fields have the same magnitude, but sign becomes positive).

## Syntax

```
abs()
```

### Parameters

None.

### Return value

A new Temporal.Duration object with the absolute value of this duration, which is either the same as this duration if it is already positive, or its negation if it is negative.

## Examples

### Using abs()

```
const d1 = Temporal.Duration.from({ hours: 1, minutes: 30 });
const d2 = Temporal.Duration.from({ hours: -1, minutes: -30 });

console.log(d1.abs().toString()); // "PT1H30M"
console.log(d2.abs().toString()); // "PT1H30M"
```

## Specifications

## Browser compatibility

## See also

- Temporal.Duration
- Temporal.Duration.prototype.negated()
- Temporal.Duration.prototype.sign

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/abs
