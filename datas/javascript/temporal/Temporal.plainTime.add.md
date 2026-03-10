# Temporal.PlainTime.prototype.add()

Source: https://devdocs.io/javascript/global_objects/temporal/plaintime/add

The add() method of Temporal.PlainTime instances returns a new Temporal.PlainTime object representing this time moved forward by a given duration (in a form convertible by Temporal.Duration.from()), wrapping around the clock if necessary.

## Syntax

```
add(duration)
```

### Parameters

A string, an object, or a Temporal.Duration instance representing a duration to add to this time. It is converted to a Temporal.Duration object using the same algorithm as Temporal.Duration.from().

### Return value

A new Temporal.PlainTime object representing the time specified by the original PlainTime, plus the duration. Any units above hours are ignored, and if the time goes past midnight, it wraps around to the next day.

Adding a duration is equivalent to subtracting its negation.

## Examples

### Adding a duration

```
const start = Temporal.PlainTime.from("12:34:56");
const end = start.add({ hours: 1, minutes: 30 });
console.log(end.toString()); // 14:04:56

const end2 = start.add({ hours: -1, minutes: -30 });
console.log(end2.toString()); // 11:04:56

const distance = Temporal.PlainTime.from("00:00:00").until("01:23:45"); // 1h 23m 45s
const end3 = start.add(distance);
console.log(end3.toString()); // 13:58:41
```

### Time wrapping

If the time goes past midnight, it wraps around to the next day:

```
const start = Temporal.PlainTime.from("12:34:56");
const end = start.add({ hours: 12 });
console.log(end.toString()); // 00:34:56
```

## Specifications

## Browser compatibility

## See also

- Temporal.PlainTime
- Temporal.Duration
- Temporal.PlainTime.prototype.subtract()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/add
