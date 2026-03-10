# DateTimeInterface::format

Source: https://devdocs.io/php/datetime.format

# DateTimeImmutable::format

# DateTime::format

# date_format

(PHP 5 >= 5.2.0, PHP 7, PHP 8)

DateTimeInterface::format -- DateTimeImmutable::format -- DateTime::format -- date_format — Returns date formatted according to given format

### Description

Object-oriented style

```
public DateTimeInterface::format(string $format): string
```

```
public DateTimeImmutable::format(string $format): string
```

```
public DateTime::format(string $format): string
```

Procedural style

```
date_format(DateTimeInterface $object, string $format): string
```

Returns date formatted according to given format.

### Parameters

Procedural style only: A DateTime object returned by date_create()

The format of the outputted date string. See the formatting options below. There are also several predefined date constants that may be used instead, so for example DATE_RSS contains the format string 'D, d M Y H:i:s'.

Unrecognized characters in the format string will be printed as-is. The Z format will always return 0 when using gmdate().

Note:

Since this function only accepts int timestamps the u format character is only useful when using the date_format() function with user based timestamps created with date_create().

### Return Values

Returns the formatted date string on success.

### Changelog

### Examples

Example #1 DateTimeInterface::format() example

Object-oriented style

```
<?php
$date = new DateTimeImmutable('2000-01-01');
echo $date->format('Y-m-d H:i:s');
?>
```

The above example will output:

```
2000-01-01 00:00:00
```

Procedural style

```
<?php
$date = date_create('2000-01-01');
echo date_format($date, 'Y-m-d H:i:s');
?>
```

The above example will output:

```
2000-01-01 00:00:00
```

Example #2 More examples

```
<?php
// set the default timezone to use.
date_default_timezone_set('UTC');

// now
$date = new DateTimeImmutable();

// Prints something like: Wednesday
echo $date->format('l'), "\n";

// Prints something like: Wednesday 19th of October 2022 08:40:48 AM
echo $date->format('l jS \o\f F Y h:i:s A'), "\n";

/* use the constants in the format parameter */
// prints something like: Wed, 19 Oct 2022 08:40:48 +0000
echo $date->format(DateTimeInterface::RFC2822), "\n";
?>
```

You can prevent a recognized character in the format string from being expanded by escaping it with a preceding backslash. If the character with a backslash is already a special sequence, you may need to also escape the backslash.

Example #3 Escaping characters while formatting

```
<?php
$date = new DateTimeImmutable();

// prints something like: Wednesday the 19th
echo $date->format('l \t\h\e jS');
?>
```

To format dates in other languages, IntlDateFormatter::format() can be used instead of DateTimeInterface::format().

### Notes

This method does not use locales. All output is in English.

### See Also

- IntlDateFormatter::format() - Format the date/time value as a string

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/datetime.format.php
