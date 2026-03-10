# ini_set

Source: https://devdocs.io/php/function.ini-set

(PHP 4, PHP 5, PHP 7, PHP 8)

ini_set — Sets the value of a configuration option

### Description

```
ini_set(string $option, string|int|float|bool|null $value): string|false
```

Sets the value of the given configuration option. The configuration option will keep this new value during the script's execution, and will be restored at the script's ending.

### Parameters

Not all the available options can be changed using ini_set(). There is a list of all available options in the appendix.

The new value for the option.

### Return Values

Returns the old value on success, false on failure.

### Changelog

### Examples

Example #1 Setting an ini option

```
<?php
echo ini_get('display_errors');

if (!ini_get('display_errors')) {
    ini_set('display_errors', '1');
}

echo ini_get('display_errors');
?>
```

### See Also

- get_cfg_var() - Gets the value of a PHP configuration option
- ini_get() - Gets the value of a configuration option
- ini_get_all() - Gets all configuration options
- ini_restore() - Restores the value of a configuration option
- How to change configuration settings

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ini-set.php
