# apache_getenv

Source: https://devdocs.io/php/function.apache-getenv

(PHP 4 >= 4.3.0, PHP 5, PHP 7, PHP 8)

apache_getenv — Get an Apache subprocess_env variable

### Description

```
apache_getenv(string $variable, bool $walk_to_top = false): string|false
```

Retrieve an Apache environment variable specified by variable.

### Parameters

The Apache environment variable

Whether to get the top-level variable available to all Apache layers.

### Return Values

The value of the Apache environment variable on success, or false on failure

### Examples

Example #1 apache_getenv() example

The example above shows how to retrieve the value of the Apache environment variable SERVER_ADDR.

```
<?php
$ret = apache_getenv("SERVER_ADDR");
echo $ret;
?>
```

The above example will output something similar to:

```
42.24.42.240
```

### See Also

- apache_setenv() - Set an Apache subprocess_env variable
- getenv() - Gets the value of a single or all environment variables
- Superglobals

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.apache-getenv.php
