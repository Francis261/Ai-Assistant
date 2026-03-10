# Temporal.Duration.prototype.blank

Source: https://devdocs.io/javascript/global_objects/temporal/duration/blank

The blank accessor property of Temporal.Duration instances returns a boolean that is true if this duration represents a zero duration, and false otherwise. It is equivalent to duration.sign === 0.

## Examples

### Using blank

```
const d1 = Temporal.Duration.from({ hours: 1, minutes: 30 });
const d2 = Temporal.Duration.from({ hours: -1, minutes: -30 });
const d3 = Temporal.Duration.from({ hours: 0 });

console.log(d1.blank); // false
console.log(d2.blank); // false
console.log(d3.blank); // true
```

## Specifications

## Browser compatibility

## See also

- Temporal.Duration
- Temporal.Duration.prototype.sign

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/blank
