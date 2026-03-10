# date_default_timezone_set

Source: https://devdocs.io/php/function.date-default-timezone-set

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

date_default_timezone_set — Sets the default timezone used by all date/time functions in a script

### Description

```
date_default_timezone_set(string $timezoneId): bool
```

date_default_timezone_set() sets the default timezone used by all date/time functions.

Instead of using this function to set the default timezone in your script, you can also use the INI setting date.timezone to set the default timezone.

### Parameters

The timezone identifier, like UTC, Africa/Lagos, Asia/Hong_Kong, or Europe/Lisbon. The list of valid identifiers is available in the List of Supported Timezones.

### Return Values

This function returns false if the timezoneId isn't valid, or true otherwise.

### Examples

Example #1 Getting the default timezone

```
<?php
date_default_timezone_set('America/Los_Angeles');

$script_tz = date_default_timezone_get();
$ini_tz = ini_get('date.timezone');

if (strcmp($script_tz, $ini_tz)){
    echo 'Script timezone differs from ini-set timezone.';
} else {
    echo 'Script timezone and ini-set timezone match.';
}
```

### See Also

- date_default_timezone_get() - Gets the default timezone used by all date/time functions in a script
- List of Supported Timezones

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.date-default-timezone-set.php
