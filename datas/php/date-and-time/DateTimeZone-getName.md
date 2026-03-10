# DateTimeZone::getName

Source: https://devdocs.io/php/datetimezone.getname

# timezone_name_get

(PHP 5 >= 5.2.0, PHP 7, PHP 8)

DateTimeZone::getName -- timezone_name_get — Returns the name of the timezone

### Description

Object-oriented style

```
public DateTimeZone::getName(): string
```

Procedural style

```
timezone_name_get(DateTimeZone $object): string
```

Returns the name of the timezone.

### Parameters

The DateTimeZone for which to get a name.

### Return Values

Depending on zone type, UTC offset (type 1), timezone abbreviation (type 2), and timezone identifiers as published in the IANA timezone database (type 3), the descriptor string to create a new DateTimeZone object with the same offset and/or rules. For example 02:00, CEST, or one of the timezone names in the list of timezones.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/datetimezone.getname.php
