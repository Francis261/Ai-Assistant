# Date.prototype.setFullYear()

Source: https://devdocs.io/javascript/global_objects/date/setfullyear

The setFullYear() method of Date instances changes the year, month, and/or day of month for this date according to local time.

## Try it

```
const event = new Date("August 19, 1975 23:15:30");

event.setFullYear(1969);

console.log(event.getFullYear());
// Expected output: 1969

event.setFullYear(0);

console.log(event.getFullYear());
// Expected output: 0
```

## Syntax

```
setFullYear(yearValue)
setFullYear(yearValue, monthValue)
setFullYear(yearValue, monthValue, dateValue)
```

### Parameters

An integer representing the year. For example, 1995.

An integer representing the month: 0 for January, 1 for February, and so on.

An integer between 1 and 31 representing the day of the month. If you specify dateValue, you must also specify monthValue.

### Return value

Changes the Date object in place, and returns its new timestamp. If a parameter is NaN (or other values that get coerced to NaN, such as undefined), the date is set to Invalid Date and NaN is returned.

## Description

If you do not specify the monthValue and dateValue parameters, the same values as what are returned by getMonth() and getDate() are used.

If a parameter you specify is outside of the expected range, other parameters and the date information in the Date object are updated accordingly. For example, if you specify 15 for monthValue, the year is incremented by 1 (yearValue + 1), and 3 is used for the month.

Because setFullYear() operates on the local time, crossing a Daylight Saving Time (DST) boundary may result in a different elapsed time than expected. For example, if setting the date crosses a spring-forward transition (losing an hour), the difference in timestamps between the new and old date is one hour less than the nominal day difference multiplied by 24 hours. Conversely, crossing a fall-back transition (gaining an hour) result in an extra hour. If you need to adjust the date by a fixed amount of time, consider using setUTCFullYear() or setTime().

If the new local time falls within an offset transition, the exact time is derived using the same behavior as Temporal's disambiguation: "compatible" option. That is, if the local time corresponds to two instants, the earlier one is chosen; if the local time does not exist (there is a gap), we go forward by the gap duration.

## Examples

### Using setFullYear()

```
const theBigDay = new Date();
theBigDay.setFullYear(1997);
```

## Specifications

## Browser compatibility

## See also

- Date.prototype.getUTCFullYear()
- Date.prototype.setUTCFullYear()
- Date.prototype.setYear()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setFullYear
