# Date

Source: https://devdocs.io/http/headers/date

# Date

The Date general HTTP header contains the date and time at which the message originated.

Warning: Date is listed in the forbidden header names in the fetch spec, so this code will not send the Date header:

```
fetch('https://httpbin.org/get', {
  'headers': {
    'Date': (new Date()).toUTCString()
  }
})
```

## Syntax

```
Date: <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT
```

## Directives

One of "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", or "Sun" (case-sensitive).

2 digit day number, e.g. "04" or "23".

One of "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" (case sensitive).

4 digit year number, e.g. "1990" or "2016".

2 digit hour number, e.g. "09" or "23".

2 digit minute number, e.g. "04" or "59".

2 digit second number, e.g. "04" or "59".

Greenwich Mean Time. HTTP dates are always expressed in GMT, never in local time.

## Examples

```
Date: Wed, 21 Oct 2015 07:28:00 GMT
```

```
new Date().toUTCString()
// "Mon, 09 Mar 2020 08:13:24 GMT"
```

## Specifications

## Browser compatibility

## See also

- Age

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Date
