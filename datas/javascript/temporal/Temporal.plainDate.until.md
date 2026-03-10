# Temporal.PlainDate.prototype.until()

Source: https://devdocs.io/javascript/global_objects/temporal/plaindate/until

The until() method of Temporal.PlainDate instances returns a new Temporal.Duration object representing the duration from this date to another date (in a form convertible by Temporal.PlainDate.from()). The duration is positive if the other date is after this date, and negative if before.

This method does other - this. To do this - other, use the since() method.

## Syntax

```
until(other)
until(other, options)
```

### Parameters

A string, an object, or a Temporal.PlainDate instance representing a date to subtract this date from. It is converted to a Temporal.PlainDate object using the same algorithm as Temporal.PlainDate.from(). It must have the same calendar as this.

The same options as since().

### Return value

A new Temporal.Duration object representing the duration from this date until other. The duration is positive if other is after this date, and negative if before.

### Exceptions

Thrown in one of the following cases:

- other has a different calendar than this.
- Any of the options is invalid.

## Examples

### Using until()

```
const launch = Temporal.PlainDate.from("2035-01-01");
const now = Temporal.Now.plainDateISO();
const duration = now.until(launch);
console.log(`It will be ${duration.toLocaleString("en-US")} until the launch`);
```

For more examples, see since().

## Specifications

## Browser compatibility

## See also

- Temporal.PlainDate
- Temporal.Duration
- Temporal.PlainDate.prototype.add()
- Temporal.PlainDate.prototype.subtract()
- Temporal.PlainDate.prototype.since()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/until
