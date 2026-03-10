# Temporal.PlainTime.prototype.with()

Source: https://devdocs.io/javascript/global_objects/temporal/plaintime/with

The with() method of Temporal.PlainTime instances returns a new Temporal.PlainTime object representing this time with some fields replaced by new values. Because all Temporal objects are designed to be immutable, this method essentially functions as the setter for the time's fields.

## Syntax

```
with(info)
with(info, options)
```

### Parameters

An object containing at least one of the properties recognized by Temporal.PlainTime.from(): hour, microsecond, millisecond, minute, nanosecond, second. Unspecified properties use the values from the original time.

An object containing the following property:

A string specifying the behavior when a time component is out of range. Possible values are:

The time component is clamped to the valid range.

A RangeError is thrown if the time component is out of range.

### Return value

A new Temporal.PlainTime object, where the fields specified in info that are not undefined are replaced by the corresponding values, and the rest of the fields are copied from the original time.

### Exceptions

Thrown in one of the following cases:

- info is not an object with at least one recognized property or a string.
- options is not an object or undefined.

Thrown if the provided numerical properties are out of range, and options.overflow is set to "reject".

## Examples

### Using with()

```
const time = Temporal.PlainTime.from("12:34:56.123456789");
const newTime = time.with({ hour: 23 });
console.log(newTime.toString()); // '23:34:56.123456789'
```

For more examples, see the documentation for the individual properties that can be set using with().

## Specifications

## Browser compatibility

## See also

- Temporal.PlainTime
- Temporal.PlainTime.from()
- Temporal.PlainTime.prototype.add()
- Temporal.PlainTime.prototype.subtract()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/with
