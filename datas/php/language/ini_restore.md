# ini_restore

Source: https://devdocs.io/php/function.ini-restore

(PHP 4, PHP 5, PHP 7, PHP 8)

ini_restore — Restores the value of a configuration option

### Description

```
ini_restore(string $option): void
```

Restores a given configuration option to its original value.

### Parameters

The configuration option name.

### Return Values

No value is returned.

### Examples

Example #1 ini_restore() example

```
<?php
$setting = 'html_errors';

echo 'Current value for \'' . $setting . '\': ' . ini_get($setting), PHP_EOL;

ini_set($setting, ini_get($setting) ? 0 : 1);
echo 'New value for \'' . $setting . '\': ' . ini_get($setting), PHP_EOL;

ini_restore($setting);
echo 'Original value for \'' . $setting . '\': ' . ini_get($setting), PHP_EOL;
?>
```

The above example will output:

```
Current value for 'html_errors': 1
New value for 'html_errors': 0
Original value for 'html_errors': 1
```

### See Also

- ini_get() - Gets the value of a configuration option
- ini_get_all() - Gets all configuration options
- ini_set() - Sets the value of a configuration option

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ini-restore.php
