# apache_get_modules

Source: https://devdocs.io/php/function.apache-get-modules

(PHP 4 >= 4.3.2, PHP 5, PHP 7, PHP 8)

apache_get_modules — Get a list of loaded Apache modules

### Description

```
apache_get_modules(): array
```

Get a list of loaded Apache modules.

### Parameters

This function has no parameters.

### Return Values

An array of loaded Apache modules.

### Examples

Example #1 apache_get_modules() example

```
<?php
print_r(apache_get_modules());
?>
```

The above example will output something similar to:

```
Array
(
    [0] => core
    [1] => http_core
    [2] => mod_so
    [3] => sapi_apache2
    [4] => mod_mime
    [5] => mod_rewrite
)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.apache-get-modules.php
