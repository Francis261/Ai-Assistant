# Temporal.Instant.prototype.equals()

Source: https://devdocs.io/javascript/global_objects/temporal/instant/equals

The equals() method of Temporal.Instant instances returns true if this instant is equivalent in value to another instant (in a form convertible by Temporal.Instant.from()), and false otherwise. They are compared by their epochNanoseconds. It is equivalent to Temporal.Instant.compare(this, other) === 0.

## Syntax

```
equals(other)
```

### Parameters

A string or a Temporal.Instant instance representing the other instant to compare. It is converted to a Temporal.Instant object using the same algorithm as Temporal.Instant.from().

### Return value

true if this instant is equal to other by nanoseconds, false otherwise.

## Examples

### Using equals()

```
const instant1 = Temporal.Instant.from("2021-08-01T12:34:56Z");
const instant2 = Temporal.Instant.fromEpochMilliseconds(1627821296000);
console.log(instant1.equals(instant2)); // true
```

## Specifications

## Browser compatibility

## See also

- Temporal.Instant
- Temporal.Instant.compare()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant/equals
