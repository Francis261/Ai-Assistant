# Date.prototype.setSeconds()

Source: https://devdocs.io/javascript/global_objects/date/setseconds

The setSeconds() method of Date instances changes the seconds and/or milliseconds for this date according to local time.

## Try it

```
const event = new Date("August 19, 1975 23:15:30");

event.setSeconds(42);

console.log(event.getSeconds());
// Expected output: 42

console.log(event);
// Expected output: "Sat Apr 19 1975 23:15:42 GMT+0100 (CET)"
// Note: your timezone may vary
```

## Syntax

```
setSeconds(secondsValue)
setSeconds(secondsValue, msValue)
```

### Parameters

An integer between 0 and 59 representing the seconds.

An integer between 0 and 999 representing the milliseconds.

### Return value

Changes the Date object in place, and returns its new timestamp. If a parameter is NaN (or other values that get coerced to NaN, such as undefined), the date is set to Invalid Date and NaN is returned.

## Description

If you do not specify the msValue parameter, the value returned from the getMilliseconds() method is used.

If a parameter you specify is outside of the expected range, setSeconds() attempts to update the date information in the Date object accordingly. For example, if you use 100 for secondsValue, the minutes stored in the Date object will be incremented by 1, and 40 will be used for seconds.

Because setSeconds() operates on the local time, crossing a Daylight Saving Time (DST) boundary may result in a different elapsed time than expected. For example, if setting the seconds crosses a spring-forward transition (losing an hour), the difference in timestamps between the new and old date is one hour less than the nominal time difference. Conversely, crossing a fall-back transition (gaining an hour) result in an extra hour. If you need to adjust the date by a fixed amount of time, consider using setUTCSeconds() or setTime().

If the new local time falls within an offset transition, the exact time is derived using the same behavior as Temporal's disambiguation: "compatible" option. That is, if the local time corresponds to two instants, the earlier one is chosen; if the local time does not exist (there is a gap), we go forward by the gap duration.

## Examples

### Using setSeconds()

```
const theBigDay = new Date();
theBigDay.setSeconds(30);
```

## Specifications

## Browser compatibility

## See also

- Date.prototype.getSeconds()
- Date.prototype.setUTCSeconds()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setSeconds
