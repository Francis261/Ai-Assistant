# DateTimeZone::listAbbreviations

Source: https://devdocs.io/php/datetimezone.listabbreviations

# timezone_abbreviations_list

(PHP 5 >= 5.2.0, PHP 7, PHP 8)

DateTimeZone::listAbbreviations -- timezone_abbreviations_list — Returns associative array containing dst, offset and the timezone name

### Description

Object-oriented style

```
public static DateTimeZone::listAbbreviations(): array
```

Procedural style

```
timezone_abbreviations_list(): array
```

The returned list of abbreviations includes all historical use of abbreviations, which can lead to correct, but confusing entries. There are also conflicts, as PST is used both in the US and in the Philippines.

The list that this function returns is therefore not suitable for building an array with options to present a choice of timezone to users.

Note:

The data for this function are precompiled for performance reasons, and are not updated when using a newer » timezonedb.

### Parameters

This function has no parameters.

### Return Values

Returns the array of timezone abbreviations.

### Examples

Example #1 A timezone_abbreviations_list() example

```
<?php
$timezone_abbreviations = DateTimeZone::listAbbreviations();
print_r($timezone_abbreviations["acst"]);
```

The above example will output something similar to:

```
Array
(
    [0] => Array
        (
            [dst] =>
            [offset] => 34200
            [timezone_id] => Australia/Adelaide
        )

    [1] => Array
        (
            [dst] =>
            [offset] => 34200
            [timezone_id] => Australia/Broken_Hill
        )

    [2] => Array
        (
            [dst] =>
            [offset] => 34200
            [timezone_id] => Australia/Darwin
        )

    [3] => Array
        (
            [dst] =>
            [offset] => 34200
            [timezone_id] => Australia/North
        )

    [4] => Array
        (
            [dst] =>
            [offset] => 34200
            [timezone_id] => Australia/South
        )

    [5] => Array
        (
            [dst] =>
            [offset] => 34200
            [timezone_id] => Australia/Yancowinna
        )

)
```

### See Also

- timezone_identifiers_list() - Alias of DateTimeZone::listIdentifiers

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/datetimezone.listabbreviations.php
