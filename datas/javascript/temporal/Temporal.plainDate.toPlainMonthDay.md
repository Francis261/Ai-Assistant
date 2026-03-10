# Temporal.PlainDate.prototype.toPlainMonthDay()

Source: https://devdocs.io/javascript/global_objects/temporal/plaindate/toplainmonthday

The toPlainMonthDay() method of Temporal.PlainDate instances returns a new Temporal.PlainMonthDay object representing the monthCode and day of this date in the same calendar system.

Note that PlainMonthDay objects do not have a month component, because months with the same name can have different month indexes in different years due to leap months.

## Syntax

```
toPlainMonthDay()
```

### Parameters

None.

### Return value

A new Temporal.PlainMonthDay object representing the monthCode and day of this date in the same calendar system.

## Examples

### Using toPlainMonthDay()

```
const date = Temporal.PlainDate.from("2021-07-01");
const monthDay = date.toPlainMonthDay();
console.log(monthDay.toString()); // 07-01
```

## Specifications

## Browser compatibility

## See also

- Temporal.PlainDate
- Temporal.PlainMonthDay
- Temporal.PlainDate.prototype.toPlainDateTime()
- Temporal.PlainDate.prototype.toPlainYearMonth()
- Temporal.PlainDate.prototype.toZonedDateTime()
- Temporal.PlainMonthDay.prototype.toPlainDate()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/toPlainMonthDay
