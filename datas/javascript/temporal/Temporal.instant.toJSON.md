# Temporal.Instant.prototype.toJSON()

Source: https://devdocs.io/javascript/global_objects/temporal/instant/tojson

The toJSON() method of Temporal.Instant instances returns a string representing this instant in the same RFC 9557 format as calling toString(). It is intended to be implicitly called by JSON.stringify().

## Syntax

```
toJSON()
```

### Parameters

None.

### Return value

A string representing the given instant in the RFC 9557 format, with as much subsecond precision as necessary to represent the duration accurately, and with the UTC time zone designator Z.

## Description

The toJSON() method is automatically called by JSON.stringify() when a Temporal.Instant object is stringified. This method is generally intended to, by default, usefully serialize Temporal.Instant objects during JSON serialization, which can then be deserialized using the Temporal.Instant.from() function as the reviver of JSON.parse().

## Examples

### Using toJSON()

```
const instant = Temporal.Instant.fromEpochMilliseconds(1627821296000);
const instantStr = instant.toJSON(); // '2021-08-01T12:34:56Z'
const i2 = Temporal.Instant.from(instantStr);
```

### JSON serialization and parsing

This example shows how Temporal.Instant can be serialized as JSON without extra effort, and how to parse it back.

```
const instant = Temporal.Instant.fromEpochMilliseconds(1627821296000);
const jsonStr = JSON.stringify({ time: instant }); // '{"time":"2021-08-01T12:34:56Z"}'
const obj = JSON.parse(jsonStr, (key, value) => {
  if (key === "time") {
    return Temporal.Instant.from(value);
  }
  return value;
});
```

## Specifications

## Browser compatibility

## See also

- Temporal.Instant
- Temporal.Instant.from()
- Temporal.Instant.prototype.toString()
- Temporal.Instant.prototype.toLocaleString()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant/toJSON
