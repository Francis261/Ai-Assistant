# idate

Source: https://devdocs.io/php/function.idate

(PHP 5, PHP 7, PHP 8)

idate — Format a local time/date part as integer

### Description

```
idate(string $format, ?int $timestamp = null): int|false
```

Returns a number formatted according to the given format string using the given integer timestamp or the current local time if no timestamp is given. In other words, timestamp is optional and defaults to the value of time().

Unlike the function date(), idate() accepts just one char in the format parameter.

### Parameters

The optional timestamp parameter is an int Unix timestamp that defaults to the current local time if timestamp is omitted or null. In other words, it defaults to the value of time().

### Return Values

Returns an int on success, or false on failure.

As idate() always returns an int and as they can't start with a "0", idate() may return fewer digits than you would expect. See the example below.

### Errors/Exceptions

Every call to a date/time function will generate a E_WARNING if the time zone is not valid. See also date_default_timezone_set()

### Changelog

### Examples

Example #1 idate() example

```
<?php
$timestamp = strtotime('1st January 2004'); // 1072915200

// this prints the year in a two digit format
// however, as this would start with a "0", it
// only prints "4"
echo idate('y', $timestamp) . "\n";

$timestamp = strtotime('1st January 2024'); // 1704067200
echo idate('y', $timestamp);
```

The above example will output:

```
4
24
```

### See Also

- DateTimeInterface::format() - Returns date formatted according to given format
- date() - Format a Unix timestamp
- getdate() - Get date/time information
- time() - Return current Unix timestamp

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.idate.php
