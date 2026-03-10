# Temporal.Now.instant()

Source: https://devdocs.io/javascript/global_objects/temporal/now/instant

The Temporal.Now.instant() static method returns the current time as a Temporal.Instant object.

## Syntax

```
Temporal.Now.instant()
```

### Parameters

None.

### Return value

A Temporal.Instant object representing the current time, with potentially reduced precision.

## Examples

### Measuring time elapsed

The following example measures two instants in time and calculates the duration between them, and gets the total duration in milliseconds:

```
const start = Temporal.Now.instant();
// Do something that takes time
const end = Temporal.Now.instant();
const duration = end.since(start);
console.log(duration.total("milliseconds"));
```

## Specifications

## Browser compatibility

## See also

- Temporal.Now
- Temporal.Instant

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Now/instant
