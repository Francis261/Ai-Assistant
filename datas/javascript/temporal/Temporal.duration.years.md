# Temporal.Duration.prototype.years

Source: https://devdocs.io/javascript/global_objects/temporal/duration/years

The years accessor property of Temporal.Duration instances returns an integer representing the number of years in the duration.

You can know the sign of years by checking the duration's sign property.

The set accessor of years is undefined. You cannot change this property directly. Use the with() method to create a new Temporal.Duration object with the desired new value.

## Examples

### Using years

```
const d1 = Temporal.Duration.from({ years: 1, months: 1 });
const d2 = Temporal.Duration.from({ years: -1, months: -1 });
const d3 = Temporal.Duration.from({ years: 1 });
const d4 = Temporal.Duration.from({ months: 12 });

console.log(d1.years); // 1
console.log(d2.years); // -1
console.log(d3.years); // 1
console.log(d4.years); // 0

// Balance d4
const d4Balanced = d4.round({
  largestUnit: "years",
  relativeTo: Temporal.PlainDate.from("2021-01-01"), // ISO 8601 calendar
});
console.log(d4Balanced.years); // 1
console.log(d4Balanced.months); // 0
```

## Specifications

## Browser compatibility

## See also

- Temporal.Duration
- Temporal.Duration.prototype.months
- Temporal.Duration.prototype.weeks
- Temporal.Duration.prototype.days
- Temporal.Duration.prototype.hours
- Temporal.Duration.prototype.minutes
- Temporal.Duration.prototype.seconds
- Temporal.Duration.prototype.milliseconds
- Temporal.Duration.prototype.microseconds
- Temporal.Duration.prototype.nanoseconds

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/years
