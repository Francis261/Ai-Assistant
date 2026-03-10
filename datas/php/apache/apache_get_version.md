# apache_get_version

Source: https://devdocs.io/php/function.apache-get-version

(PHP 4 >= 4.3.2, PHP 5, PHP 7, PHP 8)

apache_get_version — Fetch Apache version

### Description

```
apache_get_version(): string|false
```

Fetch the Apache version.

### Parameters

This function has no parameters.

### Return Values

Returns the Apache version on success or false on failure.

### Examples

Example #1 apache_get_version() example

```
<?php
$version = apache_get_version();
echo "$version\n";
?>
```

The above example will output something similar to:

```
Apache/1.3.29 (Unix) PHP/4.3.4
```

### See Also

- phpinfo() - Outputs information about PHP's configuration

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.apache-get-version.php
