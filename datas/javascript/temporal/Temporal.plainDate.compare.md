# Temporal.PlainDate.compare()

Source: https://devdocs.io/javascript/global_objects/temporal/plaindate/compare

The Temporal.PlainDate.compare() static method returns a number (-1, 0, or 1) indicating whether the first date comes before, is the same as, or comes after the second date. Equivalent to comparing the year, month, and day fields of the underlying ISO 8601 dates.

## Syntax

```
Temporal.PlainDate.compare(date1, date2)
```

### Parameters

A string, an object, or a Temporal.PlainDate instance representing the first date to compare. It is converted to a Temporal.PlainDate object using the same algorithm as Temporal.PlainDate.from().

The second date to compare, converted to a Temporal.PlainDate object using the same algorithm as date1.

### Return value

Returns -1 if date1 comes before date2, 0 if they are the same, and 1 if date1 comes after date2. They are compared by their underlying date values, ignoring their calendars.

## Examples

### Using Temporal.PlainDate.compare()

```
const date1 = Temporal.PlainDate.from("2021-08-01");
const date2 = Temporal.PlainDate.from("2021-08-02");
console.log(Temporal.PlainDate.compare(date1, date2)); // -1

const date3 = Temporal.PlainDate.from("2021-07-31");
console.log(Temporal.PlainDate.compare(date1, date3)); // 1
```

### Comparing dates in different calendars

```
const date1 = Temporal.PlainDate.from({ year: 2021, month: 8, day: 1 });
const date2 = Temporal.PlainDate.from({
  year: 2021,
  month: 8,
  day: 1,
  calendar: "islamic-umalqura",
});
const date3 = Temporal.PlainDate.from({
  year: 2021,
  month: 8,
  day: 1,
  calendar: "hebrew",
});
console.log(date1.toString()); // "2021-08-01"
console.log(date2.toString()); // "2582-12-17[u-ca=islamic-umalqura]"
console.log(date3.toString()); // "-001739-04-06[u-ca=hebrew]"
console.log(Temporal.PlainDate.compare(date1, date2)); // -1
console.log(Temporal.PlainDate.compare(date1, date3)); // 1
```

### Sorting an array of dates

The purpose of this compare() function is to act as a comparator to be passed to Array.prototype.sort() and related functions.

```
const dates = [
  Temporal.PlainDate.from({ year: 2021, month: 8, day: 1 }),
  Temporal.PlainDate.from({
    year: 2021,
    month: 8,
    day: 1,
    calendar: "islamic-umalqura",
  }),
  Temporal.PlainDate.from({ year: 2021, month: 8, day: 1, calendar: "hebrew" }),
];

dates.sort(Temporal.PlainDate.compare);
console.log(dates.map((d) => d.toString()));
// [ "-001739-04-06[u-ca=hebrew]", "2021-08-01", "2582-12-17[u-ca=islamic-umalqura]" ]
```

## Specifications

## Browser compatibility

## See also

- Temporal.PlainDate
- Temporal.PlainDate.prototype.equals()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/compare
