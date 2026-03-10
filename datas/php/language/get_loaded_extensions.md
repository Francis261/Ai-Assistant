# get_loaded_extensions

Source: https://devdocs.io/php/function.get-loaded-extensions

(PHP 4, PHP 5, PHP 7, PHP 8)

get_loaded_extensions — Returns an array with the names of all modules compiled and loaded

### Description

```
get_loaded_extensions(bool $zend_extensions = false): array
```

This function returns the names of all the modules compiled and loaded in the PHP interpreter.

### Parameters

Only return Zend extensions, if not then regular extensions, like mysqli are listed. Defaults to false (return regular extensions).

### Return Values

Returns an indexed array of all the modules names.

### Examples

Example #1 get_loaded_extensions() Example

```
<?php
print_r(get_loaded_extensions());
?>
```

The above example will output something similar to:

```
Array
(
    [0] => Core
    [1] => date
    [2] => libxml
    [3] => pcre
    [4] => sqlite3
    [5] => zlib
    [6] => ctype
    [7] => dom
    [8] => fileinfo
    [9] => filter
    [10] => hash
    [11] => json
    [12] => mbstring
    [13] => SPL
    [14] => PDO
    [15] => session
    [16] => posix
    [17] => Reflection
    [18] => standard
    [19] => SimpleXML
    [20] => pdo_sqlite
    [21] => Phar
    [22] => tokenizer
    [23] => xml
    [24] => xmlreader
    [25] => xmlwriter
    [26] => gmp
    [27] => iconv
    [28] => intl
    [29] => bcmath
    [30] => sodium
    [31] => Zend OPcache
)
```

### See Also

- get_extension_funcs() - Returns an array with the names of the functions of a module
- extension_loaded() - Find out whether an extension is loaded
- dl() - Loads a PHP extension at runtime
- phpinfo() - Outputs information about PHP's configuration

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.get-loaded-extensions.php
