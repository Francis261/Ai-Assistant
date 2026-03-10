# Temporal.PlainYearMonth.prototype.toJSON()

Source: https://devdocs.io/javascript/global_objects/temporal/plainyearmonth/tojson

The toJSON() method of Temporal.PlainYearMonth instances returns a string representing this year-month in the same RFC 9557 format as calling toString(). It is intended to be implicitly called by JSON.stringify().

## Syntax

```
toJSON()
```

### Parameters

None.

### Return value

A string representing the given date in the RFC 9557 format, with the calendar annotation included if it is not "iso8601".

## Description

The toJSON() method is automatically called by JSON.stringify() when a Temporal.PlainYearMonth object is stringified. This method is generally intended to, by default, usefully serialize Temporal.PlainYearMonth objects during JSON serialization, which can then be deserialized using the Temporal.PlainYearMonth.from() function as the reviver of JSON.parse().

## Examples

### Using toJSON()

```
const ym = Temporal.PlainYearMonth.from({ year: 2021, month: 8 });
const ymStr = ym.toJSON(); // '2021-08'
const ym2 = Temporal.PlainYearMonth.from(ymStr);
```

### JSON serialization and parsing

This example shows how Temporal.PlainYearMonth can be serialized as JSON without extra effort, and how to parse it back.

```
const ym = Temporal.PlainYearMonth.from({ year: 2021, month: 8 });
const ymStr = JSON.stringify({ event: ym }); // '{"event":"2021-08"}'
const obj = JSON.parse(ymStr, (key, value) => {
  if (key === "event") {
    return Temporal.PlainYearMonth.from(value);
  }
  return value;
});
```

## Specifications

## Browser compatibility

## See also

- Temporal.PlainYearMonth
- Temporal.PlainYearMonth.from()
- Temporal.PlainYearMonth.prototype.toString()
- Temporal.PlainYearMonth.prototype.toLocaleString()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/toJSON
