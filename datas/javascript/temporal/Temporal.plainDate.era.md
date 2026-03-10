# Temporal.PlainDate.prototype.era

Source: https://devdocs.io/javascript/global_objects/temporal/plaindate/era

The era accessor property of Temporal.PlainDate instances returns a calendar-specific lowercase string representing the era of this date, or undefined if the calendar does not use eras (e.g., ISO 8601). era and eraYear together uniquely identify a year in a calendar, in the same way that year does. It is calendar-dependent. For Gregorian, it is either "gregory" or "gregory-inverse".

The set accessor of era is undefined. You cannot change this property directly. Use the with() method to create a new Temporal.PlainDate object with the desired new value. When setting eras, each code may have some aliases; for example, "ce" and "ad" are equivalent to "gregory", and "bce" and "bc" are equivalent to "gregory-inverse".

Note: This string is not intended for display to users. Use toLocaleString() with the appropriate options to get a localized string.

## Examples

### Using era

```
const date = Temporal.PlainDate.from("2021-07-01"); // ISO 8601 calendar
console.log(date.era); // undefined

const date2 = Temporal.PlainDate.from("2021-07-01[u-ca=gregory]");
console.log(date2.era); // gregory

const date3 = Temporal.PlainDate.from("-002021-07-01[u-ca=gregory]");
console.log(date3.era); // gregory-inverse

const date4 = Temporal.PlainDate.from("2021-07-01[u-ca=japanese]");
console.log(date4.era); // reiwa
```

### Changing era

You can only set era for calendars that support them. For example, the ISO 8601 calendar does not have eras. Note that you must provide era and eraYear together.

```
const date = Temporal.PlainDate.from("2021-07-01[u-ca=gregory]");
const newDate = date.with({ era: "bc", eraYear: 100 });
console.log(newDate.toString()); // -000099-07-01[u-ca=gregory]

const date2 = Temporal.PlainDate.from("2021-07-01[u-ca=japanese]");
const newDate2 = date2.with({ era: "meiji", eraYear: 1 });
console.log(newDate2.toString()); // 1868-07-01[u-ca=japanese]
```

## Specifications

## Browser compatibility

## See also

- Temporal.PlainDate
- Temporal.PlainDate.prototype.with()
- Temporal.PlainDate.prototype.add()
- Temporal.PlainDate.prototype.subtract()
- Temporal.PlainDate.prototype.year
- Temporal.PlainDate.prototype.eraYear

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/era
