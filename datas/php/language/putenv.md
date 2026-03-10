# putenv

Source: https://devdocs.io/php/function.putenv

(PHP 4, PHP 5, PHP 7, PHP 8)

putenv — Sets the value of an environment variable

### Description

```
putenv(string $assignment): bool
```

Adds assignment to the server environment. The environment variable will only exist for the duration of the current request. At the end of the request the environment is restored to its original state.

### Parameters

The setting, like "FOO=BAR"

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 Setting an environment variable

```
<?php
putenv("UNIQID=$uniqid");
?>
```

### See Also

- getenv() - Gets the value of a single or all environment variables
- apache_setenv() - Set an Apache subprocess_env variable

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.putenv.php
