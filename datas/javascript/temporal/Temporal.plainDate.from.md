# Temporal.PlainDate.from()

Source: https://devdocs.io/javascript/global_objects/temporal/plaindate/from

The Temporal.PlainDate.from() static method creates a new Temporal.PlainDate object from another Temporal.PlainDate object, an object with date properties, or an RFC 9557 string.

## Syntax

```
Temporal.PlainDate.from(info)
Temporal.PlainDate.from(info, options)
```

### Parameters

One of the following:

- A Temporal.PlainDate instance, which creates a copy of the instance.
- A Temporal.PlainDateTime instance, which provides the calendar date in the same fashion as Temporal.PlainDateTime.prototype.toPlainDate().
- A Temporal.ZonedDateTime instance, which provides the calendar date in the same fashion as Temporal.ZonedDateTime.prototype.toPlainDate().
- An RFC 9557 string containing a date and optionally a calendar.
- An object containing the following properties (in the order they are retrieved and validated): calendar Optional A string that corresponds to the calendarId property. See Intl.supportedValuesOf() for a list of commonly supported calendar types. Defaults to "iso8601". All other properties are interpreted in this calendar system (unlike the Temporal.PlainDate() constructor, which interprets the values in the ISO calendar system). day An integer that corresponds to the day property. Must be positive regardless of the overflow option. era and eraYear A string and an integer that correspond to the era and eraYear properties. Are only used if the calendar system has eras. era and eraYear must be provided simultaneously. At least one of eraYear (together with era) or year must be provided. If all of era, eraYear, and year are provided, they must be consistent. month Corresponds to the month property. Must be positive regardless of the overflow option. At least one of month or monthCode must be provided. If both month and monthCode are provided, they must be consistent. monthCode Corresponds to the monthCode property. At least one of month or monthCode must be provided. If both month and monthCode are provided, they must be consistent. year Corresponds to the year property. At least one of eraYear (together with era) or year must be provided. If all of era, eraYear, and year are provided, they must be consistent. The info should explicitly specify a year (as year or era and eraYear), a month (as month or monthCode), and a day.

A Temporal.PlainDate instance, which creates a copy of the instance.

A Temporal.PlainDateTime instance, which provides the calendar date in the same fashion as Temporal.PlainDateTime.prototype.toPlainDate().

A Temporal.ZonedDateTime instance, which provides the calendar date in the same fashion as Temporal.ZonedDateTime.prototype.toPlainDate().

An RFC 9557 string containing a date and optionally a calendar.

An object containing the following properties (in the order they are retrieved and validated):

A string that corresponds to the calendarId property. See Intl.supportedValuesOf() for a list of commonly supported calendar types. Defaults to "iso8601". All other properties are interpreted in this calendar system (unlike the Temporal.PlainDate() constructor, which interprets the values in the ISO calendar system).

An integer that corresponds to the day property. Must be positive regardless of the overflow option.

A string and an integer that correspond to the era and eraYear properties. Are only used if the calendar system has eras. era and eraYear must be provided simultaneously. At least one of eraYear (together with era) or year must be provided. If all of era, eraYear, and year are provided, they must be consistent.

Corresponds to the month property. Must be positive regardless of the overflow option. At least one of month or monthCode must be provided. If both month and monthCode are provided, they must be consistent.

Corresponds to the monthCode property. At least one of month or monthCode must be provided. If both month and monthCode are provided, they must be consistent.

Corresponds to the year property. At least one of eraYear (together with era) or year must be provided. If all of era, eraYear, and year are provided, they must be consistent.

The info should explicitly specify a year (as year or era and eraYear), a month (as month or monthCode), and a day.

An object containing the following property:

A string specifying the behavior when a date component is out of range (when using the object info). Possible values are:

The date component is clamped to the valid range.

A RangeError is thrown if the date component is out of range.

### Return value

A new Temporal.PlainDate object, representing the date specified by info in the specified calendar.

### Exceptions

Thrown in one of the following cases:

- info is not an object or a string.
- options is not an object or undefined.
- The provided properties are insufficient to unambiguously determine a date. You usually need to provide a year (or era and eraYear), a month (or monthCode), and a day.

Thrown in one of the following cases:

- The provided properties that specify the same component are inconsistent.
- The provided non-numerical properties are not valid; for example, if monthCode is never a valid month code in this calendar.
- The provided numerical properties are out of range, and options.overflow is set to "reject".
- The info is not in the representable range, which is ±(108 + 1) days, or about ±273,972.6 years, from the Unix epoch.

## Examples

### Creating a PlainDate from an object

```
// Year, month, and day
const d1 = Temporal.PlainDate.from({ year: 2021, month: 7, day: 1 });
console.log(d1.toString()); // "2021-07-01"

// Year, month code, and day
const d2 = Temporal.PlainDate.from({ year: 2021, monthCode: "M07", day: 1 });
console.log(d2.toString()); // "2021-07-01"

// Year, month, day in a different calendar
const d3 = Temporal.PlainDate.from({
  year: 2021,
  month: 7,
  day: 1,
  calendar: "chinese",
});
// Note: when you construct a date with an object, the date components
// are in *that* calendar, not the ISO calendar. However, toString() always
// outputs the date in the ISO calendar. For example, the year "2021" in
// the Chinese calendar is actually 616 BC in the ISO calendar.
console.log(d3.toString()); // "-000616-08-12[u-ca=chinese]"

// Era, eraYear, month, and day
const d4 = Temporal.PlainDate.from({
  era: "meiji",
  eraYear: 4,
  month: 7,
  day: 1,
  calendar: "japanese",
});
console.log(d4.toString()); // "1871-07-01[u-ca=japanese]"
```

### Controlling overflow behavior

By default, out-of-range values are clamped to the valid range:

```
const d1 = Temporal.PlainDate.from({ year: 2021, month: 13, day: 1 });
console.log(d1.toString()); // "2021-12-01"

const d2 = Temporal.PlainDate.from({ year: 2021, month: 2, day: 29 });
console.log(d2.toString()); // "2021-02-28"

const d3 = Temporal.PlainDate.from("2021-02-29");
console.log(d3.toString()); // "2021-02-28"
```

You can change this behavior to throw an error instead:

```
const d3 = Temporal.PlainDate.from(
  { year: 2021, month: 13, day: 1 },
  { overflow: "reject" },
);
// RangeError: date value "month" not in 1..12: 13
```

### Creating a PlainDate from a string

```
const d = Temporal.PlainDate.from("2021-07-01");
console.log(d.toLocaleString("en-US", { dateStyle: "full" }));
// Thursday, July 1, 2021

// Providing a calendar
const d2 = Temporal.PlainDate.from("2021-07-01[u-ca=japanese]");
console.log(
  d2.toLocaleString("ja-JP", { calendar: "japanese", dateStyle: "full" }),
);
// 令和3年7月1日木曜日

// Providing a time and an offset (ignored)
const d3 = Temporal.PlainDate.from("2021-07-01T00:00+08:00");
console.log(d3.toString()); // "2021-07-01"
```

### Creating a PlainDate from another Temporal instance

```
const dt = Temporal.PlainDateTime.from("2021-07-01T12:00");
const d = Temporal.PlainDate.from(dt);
console.log(d.toString()); // "2021-07-01"

const zdt = Temporal.ZonedDateTime.from(
  "2021-07-01T00:00+08:00[Asia/Shanghai]",
);
const d2 = Temporal.PlainDate.from(zdt);
console.log(d2.toString()); // "2021-07-01"

const d3 = Temporal.PlainDate.from(d);
console.log(d3.toString()); // "2021-07-01"
```

## Specifications

## Browser compatibility

## See also

- Temporal.PlainDate
- Temporal.PlainDate()
- Temporal.PlainDate.prototype.with()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/from
