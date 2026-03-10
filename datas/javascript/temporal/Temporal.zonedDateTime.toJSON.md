# Temporal.ZonedDateTime.prototype.toJSON()

Source: https://devdocs.io/javascript/global_objects/temporal/zoneddatetime/tojson

The toJSON() method of Temporal.ZonedDateTime instances returns a string representing this date-time in the same RFC 9557 format as calling toString(). It is intended to be implicitly called by JSON.stringify().

## Syntax

```
toJSON()
```

### Parameters

None.

### Return value

A string representing the given date-time in the RFC 9557 format, with the calendar annotation included if it is not "iso8601", and the offset and time zone annotation always included.

## Description

The toJSON() method is automatically called by JSON.stringify() when a Temporal.ZonedDateTime object is stringified. This method is generally intended to, by default, usefully serialize Temporal.ZonedDateTime objects during JSON serialization, which can then be deserialized using the Temporal.ZonedDateTime.from() function as the reviver of JSON.parse().

## Examples

### Using toJSON()

```
const zdt = Temporal.ZonedDateTime.from({
  year: 2021,
  month: 8,
  day: 1,
  timeZone: "America/New_York",
});
const zdtStr = zdt.toJSON(); // '2021-08-01T00:00:00-04:00[America/New_York]'
const zdt2 = Temporal.ZonedDateTime.from(zdtStr);
```

### JSON serialization and parsing

This example shows how Temporal.ZonedDateTime can be serialized as JSON without extra effort, and how to parse it back.

```
const zdt = Temporal.ZonedDateTime.from({
  year: 2021,
  month: 8,
  day: 1,
  timeZone: "America/New_York",
});
const jsonStr = JSON.stringify({ meeting: zdt }); // '{"meeting":"2021-08-01T00:00:00-04:00[America/New_York]"}'
const obj = JSON.parse(jsonStr, (key, value) => {
  if (key === "meeting") {
    return Temporal.ZonedDateTime.from(value);
  }
  return value;
});
```

## Specifications

## Browser compatibility

## See also

- Temporal.ZonedDateTime
- Temporal.ZonedDateTime.from()
- Temporal.ZonedDateTime.prototype.toString()
- Temporal.ZonedDateTime.prototype.toLocaleString()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/toJSON
