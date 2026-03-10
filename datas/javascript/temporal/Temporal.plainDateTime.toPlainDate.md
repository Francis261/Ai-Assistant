# Temporal.PlainDateTime.prototype.toPlainDate()

Source: https://devdocs.io/javascript/global_objects/temporal/plaindatetime/toplaindate

The toPlainDate() method of Temporal.PlainDateTime instances returns a new Temporal.PlainDate object representing the date part (year, month, day) of this date-time in the same calendar system.

## Syntax

```
toPlainDate()
```

### Parameters

None.

### Return value

A new Temporal.PlainDate object representing the date part (year, month, day) of this date-time in the same calendar system.

## Examples

### Using toPlainDate()

```
const dt = Temporal.PlainDateTime.from("2021-07-01T12:34:56");
const date = dt.toPlainDate();
console.log(date.toString()); // '2021-07-01'
```

## Specifications

## Browser compatibility

## See also

- Temporal.PlainDateTime
- Temporal.PlainDate
- Temporal.PlainDateTime.prototype.toPlainTime()
- Temporal.PlainDate.prototype.toZonedDateTime()
- Temporal.PlainDate.prototype.toPlainDateTime()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/toPlainDate
