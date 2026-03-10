# Temporal.PlainTime

Source: https://devdocs.io/javascript/global_objects/temporal/plaintime

The Temporal.PlainTime object represents a time without a date or time zone; for example, a recurring event that happens at the same time every day. It is fundamentally represented as a combination of hour, minute, second, millisecond, microsecond, and nanosecond values.

## Description

A PlainTime is essentially the time part of a Temporal.PlainDateTime object, with the date information removed. Because the date and time information don't have much interaction, all general information about time properties is documented here.

### RFC 9557 format

PlainTime objects can be serialized and parsed using the RFC 9557 format, an extension to the ISO 8601 / RFC 3339 format. The string has the following form:

```
HH:mm:ss.sssssssss
```

A two-digit number from 00 to 23. It may be prefixed by the time designator T or t.

A two-digit number from 00 to 59. Defaults to 00.

A two-digit number from 00 to 59. May optionally be followed by a . or , and one to nine digits. Defaults to 00. The HH, mm, and ss components can be separated by : or nothing. You can omit either just ss or both ss and mm, so the time can be one of three forms: HH, HH:mm, or HH:mm:ss.sssssssss.

As an input, you may optionally include the date, offset, time zone identifier, and calendar, in the same format as PlainDateTime, but they will be ignored. A date-only string will be rejected. Other annotations in the [key=value] format are also ignored, and they must not have the critical flag.

When serializing, you can configure the fractional second digits.

## Constructor

Creates a new Temporal.PlainTime object by directly supplying the underlying data.

## Static methods

Returns a number (-1, 0, or 1) indicating whether the first time comes before, is the same as, or comes after the second time. Equivalent to comparing the hour, minute, second, millisecond, microsecond, and nanosecond fields one by one.

Creates a new Temporal.PlainTime object from another Temporal.PlainTime object, an object with time properties, or an RFC 9557 string.

## Instance properties

These properties are defined on Temporal.PlainTime.prototype and shared by all Temporal.PlainTime instances.

The constructor function that created the instance object. For Temporal.PlainTime instances, the initial value is the Temporal.PlainTime() constructor.

Returns an integer from 0 to 23 representing the hour component of this time.

Returns an integer from 0 to 999 representing the microsecond (10-6 second) component of this time.

Returns an integer from 0 to 999 representing the millisecond (10-3 second) component of this time.

Returns an integer from 0 to 59 representing the minute component of this time.

Returns an integer from 0 to 999 representing the nanosecond (10-9 second) component of this time.

Returns an integer from 0 to 59 representing the second component of this time.

The initial value of the [Symbol.toStringTag] property is the string "Temporal.PlainTime". This property is used in Object.prototype.toString().

## Instance methods

Returns a new Temporal.PlainTime object representing this time moved forward by a given duration (in a form convertible by Temporal.Duration.from()), wrapping around the clock if necessary.

Returns true if this time is equivalent in value to another time (in a form convertible by Temporal.PlainTime.from()), and false otherwise. They are compared by their time values. Equivalent to Temporal.PlainTime.compare(this, other) === 0.

Returns a new Temporal.PlainTime object representing this time rounded to the given unit.

Returns a new Temporal.Duration object representing the duration from another time (in a form convertible by Temporal.PlainTime.from()) to this time. The duration is positive if the other time is before this time, and negative if after.

Returns a new Temporal.PlainTime object representing this time moved backward by a given duration (in a form convertible by Temporal.Duration.from()), wrapping around the clock if necessary.

Returns a string representing this time in the same RFC 9557 format as calling toString(). Intended to be implicitly called by JSON.stringify().

Returns a string with a language-sensitive representation of this time.

Returns a string representing this time in the RFC 9557 format.

Returns a new Temporal.Duration object representing the duration from this time to another time (in a form convertible by Temporal.PlainTime.from()). The duration is positive if the other time is after this time, and negative if before.

Throws a TypeError, which prevents Temporal.PlainTime instances from being implicitly converted to primitives when used in arithmetic or comparison operations.

Returns a new Temporal.PlainTime object representing this time with some fields replaced by new values.

## Specifications

## Browser compatibility

## See also

- Temporal
- Temporal.Duration
- Temporal.PlainDateTime

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime
