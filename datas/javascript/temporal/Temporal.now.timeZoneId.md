# Temporal.Now.timeZoneId()

Source: https://devdocs.io/javascript/global_objects/temporal/now/timezoneid

The Temporal.Now.timeZoneId() static method returns a time zone identifier representing the system's current time zone. Most systems will return a primary time zone identifier such as "America/New_York", though offset time zone identifier such as "-04:00" is possible too. The time zone identifier returned is the default time zone used by the other Temporal.Now methods.

## Syntax

```
Temporal.Now.timeZoneId()
```

### Parameters

None.

### Return value

A valid time zone identifier representing the system's current time zone. The returned time zone identifier is never a non-primary time zone identifier (alias). For example, it would always return "Asia/Kolkata" (new name) instead of "Asia/Calcutta" (old name). For more information, see time zones and offsets.

If the implementation does not support time zones, the method always returns "UTC".

## Examples

### Getting the system's current time zone

```
console.log(Temporal.Now.timeZoneId()); // e.g.: "America/New_York"
```

## Specifications

## Browser compatibility

## See also

- Temporal.Now

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Now/timeZoneId
