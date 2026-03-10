# Temporal.PlainDateTime.prototype.toJSON()

Source: https://devdocs.io/javascript/global_objects/temporal/plaindatetime/tojson

The toJSON() method of Temporal.PlainDateTime instances returns a string representing this date-time in the same RFC 9557 format as calling toString(). It is intended to be implicitly called by JSON.stringify().

## Syntax

```
toJSON()
```

### Parameters

None.

### Return value

A string representing the given date-time in the RFC 9557 format, with the calendar annotation included if it is not "iso8601".

## Description

The toJSON() method is automatically called by JSON.stringify() when a Temporal.PlainDateTime object is stringified. This method is generally intended to, by default, usefully serialize Temporal.PlainDateTime objects during JSON serialization, which can then be deserialized using the Temporal.PlainDateTime.from() function as the reviver of JSON.parse().

## Examples

### Using toJSON()

```
const dt = Temporal.PlainDateTime.from({ year: 2021, month: 8, day: 1 });
const dtStr = dt.toJSON(); // '2021-08-01T00:00:00'
const dt2 = Temporal.PlainDateTime.from(dtStr);
```

### JSON serialization and parsing

This example shows how Temporal.PlainDateTime can be serialized as JSON without extra effort, and how to parse it back.

```
const dt = Temporal.PlainDateTime.from({ year: 2021, month: 8, day: 1 });
const jsonStr = JSON.stringify({ nextBilling: dt }); // '{"nextBilling":"2021-08-01T00:00:00"}'
const obj = JSON.parse(jsonStr, (key, value) => {
  if (key === "nextBilling") {
    return Temporal.PlainDateTime.from(value);
  }
  return value;
});
```

## Specifications

## Browser compatibility

## See also

- Temporal.PlainDateTime
- Temporal.PlainDateTime.from()
- Temporal.PlainDateTime.prototype.toString()
- Temporal.PlainDateTime.prototype.toLocaleString()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/toJSON
