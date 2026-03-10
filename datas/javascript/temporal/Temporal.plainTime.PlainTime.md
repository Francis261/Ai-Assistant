# Temporal.PlainTime()

Source: https://devdocs.io/javascript/global_objects/temporal/plaintime/plaintime

The Temporal.PlainTime() constructor creates Temporal.PlainTime objects.

This constructor allows you to create instances by directly supplying the underlying data. Like all other Temporal classes, you should usually construct Temporal.PlainTime objects using the Temporal.PlainTime.from() static method, which can handle a variety of input types.

## Syntax

```
new Temporal.PlainTime()
new Temporal.PlainTime(hour)
new Temporal.PlainTime(hour, minute)
new Temporal.PlainTime(hour, minute, second)
new Temporal.PlainTime(hour, minute, second, millisecond)
new Temporal.PlainTime(hour, minute, second, millisecond, microsecond)
new Temporal.PlainTime(hour, minute, second, millisecond, microsecond, nanosecond)
```

Note: Temporal.PlainTime() can only be constructed with new. Attempting to call it without new throws a TypeError.

### Parameters

A number, truncated to an integer, representing the hour component.

A number, truncated to an integer, representing the minute component.

A number, truncated to an integer, representing the second component.

A number, truncated to an integer, representing the millisecond component.

A number, truncated to an integer, representing the microsecond component.

A number, truncated to an integer, representing the nanosecond component.

### Return value

A new Temporal.PlainTime object, representing the time specified by the parameters.

### Exceptions

Thrown if any of the components is not a finite number, or they don't represent a valid time.

## Examples

### Using Temporal.PlainTime()

```
const time = new Temporal.PlainTime(12, 34, 56, 123, 456, 789);
console.log(time.toString()); // 12:34:56.123456789
```

## Specifications

## Browser compatibility

## See also

- Temporal.PlainTime
- Temporal.PlainTime.from()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/PlainTime
