# mcrypt_list_modes

Source: https://devdocs.io/php/function.mcrypt-list-modes

(PHP 4 >= 4.0.2, PHP 5, PHP 7 < 7.2.0, PECL mcrypt >= 1.0.0)

mcrypt_list_modes — Gets an array of all supported modes

This function has been DEPRECATED as of PHP 7.1.0 and REMOVED as of PHP 7.2.0. Relying on this function is highly discouraged.

### Description

```
mcrypt_list_modes(string $lib_dir = ini_get("mcrypt.modes_dir")): array
```

Gets the list of all supported modes in the lib_dir parameter.

### Parameters

Specifies the directory where all modes are located. If not specified, the value of the mcrypt.modes_dir php.ini directive is used.

### Return Values

Returns an array with all the supported modes.

### Examples

Example #1 mcrypt_list_modes() Example

```
<?php
    $modes = mcrypt_list_modes();

    foreach ($modes as $mode) {
        echo "$mode <br />\n";
    }
?>
```

The example above will produce a list with all supported algorithms in the default mode directory. If it is not set with the mcrypt.modes_dir php.ini directive, the default directory of mcrypt is used (which is /usr/local/lib/libmcrypt).

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.mcrypt-list-modes.php
