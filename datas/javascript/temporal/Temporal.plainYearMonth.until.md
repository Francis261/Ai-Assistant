# Temporal.PlainYearMonth.prototype.until()

Source: https://devdocs.io/javascript/global_objects/temporal/plainyearmonth/until

The until() method of Temporal.PlainYearMonth instances returns a new Temporal.Duration object representing the duration from this year-month to another year-month (in a form convertible by Temporal.PlainYearMonth.from()). The duration is positive if the other month is after this month, and negative if before.

This method does other - this. To do this - other, use the since() method.

## Syntax

```
until(other)
until(other, options)
```

### Parameters

A string, an object, or a Temporal.PlainYearMonth instance representing a year-month to subtract this year-month from. It is converted to a Temporal.PlainYearMonth object using the same algorithm as Temporal.PlainYearMonth.from(). It must have the same calendar as this.

The same options as since().

### Return value

A new Temporal.Duration object representing the duration from this year-month until other. The duration is positive if other is after this year-month, and negative if before.

### Exceptions

Thrown in one of the following cases:

- other has a different calendar than this.
- Any of the options is invalid.

## Examples

### Using until()

```
const launch = Temporal.PlainYearMonth.from("2035-01");
const now = Temporal.Now.plainDateISO().toPlainYearMonth();
const duration = now.until(launch);
console.log(`It will be ${duration.toLocaleString("en-US")} until the launch`);
```

For more examples, see since().

## Specifications

## Browser compatibility

## See also

- Temporal.PlainYearMonth
- Temporal.Duration
- Temporal.PlainYearMonth.prototype.add()
- Temporal.PlainYearMonth.prototype.subtract()
- Temporal.PlainYearMonth.prototype.since()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/until
