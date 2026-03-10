# Temporal.PlainDate.prototype.equals()

Source: https://devdocs.io/javascript/global_objects/temporal/plaindate/equals

The equals() method of Temporal.PlainDate instances returns true if this date is equivalent in value to another date (in a form convertible by Temporal.PlainDate.from()), and false otherwise. They are compared both by their date values and their calendars, so two dates from different calendars may be considered equal by Temporal.PlainDate.compare() but not by equals().

## Syntax

```
equals(other)
```

### Parameters

A string, an object, or a Temporal.PlainDate instance representing the other date to compare. It is converted to a Temporal.PlainDate object using the same algorithm as Temporal.PlainDate.from().

### Return value

true if this date is equal to other both in their date value and their calendar, false otherwise.

## Examples

### Using equals()

```
const date1 = Temporal.PlainDate.from("2021-08-01");
const date2 = Temporal.PlainDate.from({ year: 2021, month: 8, day: 1 });
console.log(date1.equals(date2)); // true

const date3 = Temporal.PlainDate.from("2021-08-01[u-ca=japanese]");
console.log(date1.equals(date3)); // false

const date4 = Temporal.PlainDate.from("2021-08-02");
console.log(date1.equals(date4)); // false
```

## Specifications

## Browser compatibility

## See also

- Temporal.PlainDate
- Temporal.PlainDate.compare()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/equals
