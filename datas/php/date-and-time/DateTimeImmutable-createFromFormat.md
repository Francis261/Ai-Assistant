# DateTimeImmutable::createFromFormat

Source: https://devdocs.io/php/datetimeimmutable.createfromformat

# date_create_immutable_from_format

(PHP 5 >= 5.5.0, PHP 7, PHP 8)

DateTimeImmutable::createFromFormat -- date_create_immutable_from_format — Parses a time string according to a specified format

### Description

Object-oriented style

```
public static DateTimeImmutable::createFromFormat(string $format, string $datetime, ?DateTimeZone $timezone = null): DateTimeImmutable|false
```

Procedural style

```
date_create_immutable_from_format(string $format, string $datetime, ?DateTimeZone $timezone = null): DateTimeImmutable|false
```

Returns a new DateTimeImmutable object representing the date and time specified by the datetime string, which was formatted in the given format.

### Parameters

The format that the passed in string should be in. See the formatting options below. In most cases, the same letters as for the date() can be used.

All fields are initialised with the current date/time. In most cases you would want to reset these to "zero" (the Unix epoch, 1970-01-01
 00:00:00 UTC). You do that by including the ! character as first character in your format, or | as your last. Please see the documentation for each character below for more information.

The format is parsed from left to right, which means that in some situations the order in which the format characters are present affects the result. In the case of z (the day of the year), it is required that a year has already been parsed, for example through the Y or y characters.

Letters that are used for parsing numbers allow a wide range of values, outside of what the logical range would be. For example, the d (day of the month) accepts values in the range from 00 to 99. The only constraint is on the amount of digits. The date/time parser's overflow mechanism is used when out-of-range values are given. The examples below show some of this behaviour.

This also means that the data parsed for a format letter is greedy, and will read up to the amount of digits its format allows for. That can then also mean that there are no longer enough characters in the datetime string for following format characters. An example on this page also illustrates this issue.

Unrecognized characters in the format string will cause the parsing to fail and an error message is appended to the returned structure. You can query error messages with DateTimeImmutable::getLastErrors().

To include literal characters in format, you have to escape them with a backslash (\).

If format does not contain the character ! then portions of the generated date/time which are not specified in format will be set to the current system time.

If format contains the character !, then portions of the generated date/time not provided in format, as well as values to the left-hand side of the !, will be set to corresponding values from the Unix epoch.

If any time character is parsed, then all other time-related fields are set to "0", unless also parsed.

The Unix epoch is 1970-01-01 00:00:00 UTC.

String representing the time.

A DateTimeZone object representing the desired time zone.

If timezone is omitted or null and datetime contains no timezone, the current timezone will be used.

Note:

The timezone parameter and the current timezone are ignored when the datetime parameter either contains a UNIX timestamp (e.g. 946684800) or specifies a timezone (e.g. 2010-01-28T15:00:00+02:00).

### Return Values

Returns a new DateTimeImmutable instance or false on failure.

### Errors/Exceptions

This method throws ValueError when the datetime contains NULL-bytes.

### Changelog

### Examples

Example #1 DateTimeImmutable::createFromFormat() example

Object-oriented style

```
<?php
$date = DateTimeImmutable::createFromFormat('j-M-Y', '15-Feb-2009');
echo $date->format('Y-m-d');
```

Example #2 Using predefined format constants with DateTimeImmutable::createFromFormat()

Object-oriented style

```
<?php
$date = DateTimeImmutable::createFromFormat(
    DateTimeInterface::ISO8601,
    '2004-02-12T15:19:21+00:00'
);
echo $date->format('c e') . "\n";

$date = DateTimeImmutable::createFromFormat(
    DateTimeInterface::RFC3339_EXTENDED,
    '2013-10-14T09:00:00.000+02:00'
);
echo $date->format('c e') . "\n";
```

The formatting constants as used in this example consist of a string of characters for formatting a DateTimeImmutable object. In most cases, these letters match with the same elements of date/time information as the ones defined in the parameters section above, but they tend to be more lenient.

Example #3 Intricacies of DateTimeImmutable::createFromFormat()

```
<?php
echo 'Current time: ' . date('Y-m-d H:i:s') . "\n";

$format = 'Y-m-d';
$date = DateTimeImmutable::createFromFormat($format, '2009-02-15');
echo "Format: $format; " . $date->format('Y-m-d H:i:s') . "\n";

$format = 'Y-m-d H:i:s';
$date = DateTimeImmutable::createFromFormat($format, '2009-02-15 15:16:17');
echo "Format: $format; " . $date->format('Y-m-d H:i:s') . "\n";

$format = 'Y-m-!d H:i:s';
$date = DateTimeImmutable::createFromFormat($format, '2009-02-15 15:16:17');
echo "Format: $format; " . $date->format('Y-m-d H:i:s') . "\n";

$format = '!d';
$date = DateTimeImmutable::createFromFormat($format, '15');
echo "Format: $format; " . $date->format('Y-m-d H:i:s') . "\n";

$format = 'i';
$date = DateTimeImmutable::createFromFormat($format, '15');
echo "Format: $format; " . $date->format('Y-m-d H:i:s') . "\n";
```

The above example will output something similar to:

```
Current time: 2022-06-02 15:50:46
Format: Y-m-d; 2009-02-15 15:50:46
Format: Y-m-d H:i:s; 2009-02-15 15:16:17
Format: Y-m-!d H:i:s; 1970-01-15 15:16:17
Format: !d; 1970-01-15 00:00:00
Format: i; 2022-06-02 00:15:00
```

Example #4 Format string with literal characters

```
<?php
echo DateTimeImmutable::createFromFormat('H\h i\m s\s','23h 15m 03s')->format('H:i:s');
```

The above example will output something similar to:

```
23:15:03
```

Example #5 Overflow behaviour

```
<?php
echo DateTimeImmutable::createFromFormat('Y-m-d H:i:s', '2021-17-35 16:60:97')->format(DateTimeImmutable::RFC2822);
```

The above example will output something similar to:

```
Sat, 04 Jun 2022 17:01:37 +0000
```

Although the result looks odd, it is correct, as the following overflows happen:

1. 97 seconds overflows to 1 minute, leaving 37 seconds.
2. 61 minutes overflows to 1 hour, leaving 1 minutes.
3. 35 days overflows to 1 month, leaving 4 days. The amount of days that are left over depends on the month, as not every month has the same amount of days.
4. 18 months overflows to 1 year, leaving 6 months.

Example #6 Overflowing day name behaviour

```
<?php
$d = DateTime::createFromFormat(DateTimeInterface::RFC1123, 'Mon, 3 Aug 2020 25:00:00 +0000');
echo $d->format(DateTime::RFC1123), "\n";
```

The above example will output something similar to:

```
Mon, 10 Aug 2020 01:00:00 +0000
```

Although the result looks odd, it is correct, as the following overflows happen:

1. 3 Aug 2020 25:00:00 overflows to (Tue) 4 Aug
 2020 01:00.
2. Mon gets applied, which advances the date to Mon, 10 Aug 2020 01:00:00. The explanation of relative keywords such as Mon is explained in the section on relative formats.

In order to detect overflows in dates, you can use DateTimeImmutable::getLastErrors(), which will include a warning if an overflow occured.

Example #7 Detecting overflown dates

```
<?php
$d = DateTimeImmutable::createFromFormat('Y-m-d H:i:s', '2021-17-35 16:60:97');
echo $d->format(DateTimeImmutable::RFC2822), "\n\n";

var_dump(DateTimeImmutable::getLastErrors());
```

The above example will output something similar to:

```
Sat, 04 Jun 2022 17:01:37 +0000

array(4) {
  'warning_count' =>
  int(2)
  'warnings' =>
  array(1) {
    [19] =>
    string(27) "The parsed date was invalid"
  }
  'error_count' =>
  int(0)
  'errors' =>
  array(0) {
  }
}
```

Example #8 Greedy parsing behaviour

```
<?php
print_r(date_parse_from_format('Gis', '60101'));
```

The above example will output something similar to:

```
Array
(
    [year] =>
    [month] =>
    [day] =>
    [hour] => 60
    [minute] => 10
    [second] => 0
    [fraction] => 0
    [warning_count] => 1
    [warnings] => Array
        (
            [5] => The parsed time was invalid
        )

    [error_count] => 1
    [errors] => Array
        (
            [4] => A two digit second could not be found
        )

    [is_localtime] =>
)
```

The G format is to parse 24 hour clock hours, with or without leading zero. This requires to parse 1 or 2 digits. Because there are two following digits, it greedily reads this as 60.

The following i and s format characters both require two digits. This means that 10 is passed as minute (i), and that there are then not enough digits left to parse for as second (s).

The errors array indicates this problem.

Additionally, an hour of 60 is outside the range 0-24, which causes the warnings array to include a warning that the time is invalid.

### See Also

- DateTimeImmutable::__construct() - Returns new DateTimeImmutable object
- DateTimeImmutable::getLastErrors() - Returns the warnings and errors
- checkdate() - Validate a Gregorian date
- strptime() - Parse a time/date generated with strftime

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/datetimeimmutable.createfromformat.php
