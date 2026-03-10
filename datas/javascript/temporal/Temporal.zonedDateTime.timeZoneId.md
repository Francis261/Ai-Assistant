# Temporal.ZonedDateTime.prototype.timeZoneId

Source: https://devdocs.io/javascript/global_objects/temporal/zoneddatetime/timezoneid

The timeZoneId accessor property of Temporal.ZonedDateTime instances returns a string representing the time zone identifier used to interpret the internal instant. The string is either a named identifier in the preferred case (such as "America/New_York"), or an offset in the form "±hh:mm". If the time zone has aliases, the timeZoneId is the identifier used to create the ZonedDateTime, without canonicalization to the primary identifier.

The set accessor of timeZoneId is undefined. You cannot change this property directly. Use the withTimeZone() method to create a new Temporal.ZonedDateTime object with the desired new value.

Note: This string is not intended for display to users. Use toLocaleString() with the appropriate options to get a localized string.

## Examples

### Using timeZoneId

```
const dt = Temporal.ZonedDateTime.from(
  "2021-07-01T12:00:00-07:00[America/Los_Angeles]",
);
console.log(dt.timeZoneId); // "America/Los_Angeles"

const dt2 = Temporal.ZonedDateTime.from("2021-07-01T12:00:00-07:00[-07:00]");
console.log(dt2.timeZoneId); // "-07:00"

const dt3 = dt2.withTimeZone("Asia/Shanghai");
console.log(dt3.timeZoneId); // "Asia/Shanghai"
```

The timeZoneId is never canonicalized to the primary identifier; it is the same as the one used to create the ZonedDateTime.

```
const dt = Temporal.ZonedDateTime.from(
  "2021-07-01T12:00:00+07:00[Asia/Ho_Chi_Minh]",
);
const dt2 = Temporal.ZonedDateTime.from(
  "2021-07-01T12:00:00+07:00[Asia/Saigon]",
);
console.log(dt.timeZoneId); // "Asia/Ho_Chi_Minh"
console.log(dt2.timeZoneId); // "Asia/Saigon"
```

However, presentational differences will get canonicalized.

```
const dt = Temporal.ZonedDateTime.from(
  "2021-07-01T12:00:00+07:00[asia/ho_chi_minh]",
);
console.log(dt.timeZoneId); // "Asia/Ho_Chi_Minh"

const dt2 = Temporal.ZonedDateTime.from("2021-07-01T12:00:00+07:00[+07]");
console.log(dt2.timeZoneId); // "+07:00"
```

## Specifications

## Browser compatibility

## See also

- Temporal.ZonedDateTime
- Temporal.ZonedDateTime.prototype.withTimeZone()
- Temporal.ZonedDateTime.prototype.offset
- Temporal.ZonedDateTime.prototype.offsetNanoseconds

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/timeZoneId
