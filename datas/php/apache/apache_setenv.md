# apache_setenv

Source: https://devdocs.io/php/function.apache-setenv

(PHP 4 >= 4.2.0, PHP 5, PHP 7, PHP 8)

apache_setenv — Set an Apache subprocess_env variable

### Description

```
apache_setenv(string $variable, string $value, bool $walk_to_top = false): bool
```

apache_setenv() sets the value of the Apache environment variable specified by variable.

Note:

When setting an Apache environment variable, the corresponding $_SERVER variable is not changed.

### Parameters

The environment variable that's being set.

The new variable value.

Whether to set the top-level variable available to all Apache layers.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 Setting an Apache environment variable using apache_setenv()

```
<?php
apache_setenv("EXAMPLE_VAR", "Example Value");
?>
```

### Notes

Note:

apache_setenv() can be paired up with apache_getenv() across separate pages or for setting variables to pass to Server Side Includes (.shtml) that have been included in PHP scripts.

### See Also

- apache_getenv() - Get an Apache subprocess_env variable

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.apache-setenv.php
