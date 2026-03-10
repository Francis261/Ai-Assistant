# DateTime::__construct

Source: https://devdocs.io/php/datetime.construct

(PHP 5 >= 5.2.0, PHP 7, PHP 8)

DateTime::__construct — Returns new DateTime object

### Description

Like DateTimeImmutable::__construct() but works with DateTime. Consider using the DateTimeImmutable and features instead.

Returns a new DateTime object.

### Parameters

A date/time string. Valid formats are explained in Date and Time Formats.

Enter "now" here to obtain the current time when using the $timezone parameter.

A DateTimeZone object representing the timezone of $datetime.

If $timezone is omitted or null, the current timezone will be used.

Note:

The $timezone parameter and the current timezone are ignored when the $datetime parameter either is a UNIX timestamp (e.g. @946684800) or specifies a timezone (e.g. 2010-01-28T15:00:00+02:00).

### Return Values

Returns a new DateTime instance.

### Errors/Exceptions

If an invalid Date/Time string is passed, DateMalformedStringException is thrown. Previous to PHP 8.3, this was Exception.

### Changelog

### See Also

- DateTimeImmutable::__construct() - Returns new DateTimeImmutable object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/datetime.construct.php
