# Temporal.Duration.prototype.sign

Source: https://devdocs.io/javascript/global_objects/temporal/duration/sign

The sign accessor property of Temporal.Duration instances returns 1 if this duration is positive, -1 if negative, and 0 if zero. Because a duration never has mixed signs, the sign of a duration is determined by the sign of any of its non-zero fields.

## Examples

### Using sign

```
const d1 = Temporal.Duration.from({ hours: 1, minutes: 30 });
const d2 = Temporal.Duration.from({ hours: -1, minutes: -30 });
const d3 = Temporal.Duration.from({ hours: 0 });

console.log(d1.sign); // 1
console.log(d2.sign); // -1
console.log(d3.sign); // 0

console.log(d1.abs().sign); // 1
console.log(d2.abs().sign); // 1
console.log(d3.abs().sign); // 0

console.log(d1.negated().sign); // -1
console.log(d2.negated().sign); // 1
console.log(d3.negated().sign); // 0
```

## Specifications

## Browser compatibility

## See also

- Temporal.Duration
- Temporal.Duration.prototype.abs()
- Temporal.Duration.prototype.negated()
- Temporal.Duration.prototype.blank

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/sign
