# ini_get

Source: https://devdocs.io/php/function.ini-get

(PHP 4, PHP 5, PHP 7, PHP 8)

ini_get — Gets the value of a configuration option

### Description

```
ini_get(string $option): string|false
```

Returns the value of the configuration option on success.

### Parameters

The configuration option name.

### Return Values

Returns the value of the configuration option as a string on success, or an empty string for null values. Returns false if the configuration option doesn't exist.

### Examples

Example #1 A few ini_get() examples

```
<?php

/*
Our php.ini contains the following settings:

display_errors = On
opcache.enable_cli = Off
post_max_size = 8M
*/

echo 'display_errors = ' . ini_get('display_errors') . "\n";
echo 'opcache.enable_cli = ' . (int) ini_get('opcache.enable_cli') . "\n";
echo 'post_max_size = ' . ini_get('post_max_size') . "\n";
echo 'post_max_size + 1 = ' . (rtrim(ini_get('post_max_size'), 'KMG') + 1) . "\n";
echo 'post_max_size in bytes = ' . ini_parse_quantity(ini_get('post_max_size'));

?>
```

The above example will output something similar to:

```
display_errors = 1
opcache.enable_cli = 0
post_max_size = 8M
post_max_size+1 = 9
post_max_size in bytes = 8388608
```

### Notes

Note: When querying boolean values

A boolean ini value of off will be returned as an empty string or "0" while a boolean ini value of on will be returned as "1". The function can also return the literal string of INI value.

Note: When querying memory size values

Many ini memory size values, such as upload_max_filesize, are stored in the php.ini file in shorthand notation. ini_get() will return the exact string stored in the php.ini file and NOT its int equivalent. Attempting normal arithmetic functions on these values will not have otherwise expected results. The ini_parse_quantity() function can be used to convert the shorthand notation into bytes.

Note:

ini_get() can't read "array" ini options such as pdo.dsn.*, and returns false in this case.

### See Also

- get_cfg_var() - Gets the value of a PHP configuration option
- ini_get_all() - Gets all configuration options
- ini_parse_quantity() - Get interpreted size from ini shorthand syntax
- ini_restore() - Restores the value of a configuration option
- ini_set() - Sets the value of a configuration option

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ini-get.php
