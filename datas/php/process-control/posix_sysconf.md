# posix_sysconf

Source: https://devdocs.io/php/function.posix-sysconf

(PHP 8 >= 8.3.0)

posix_sysconf — Returns system runtime information

### Description

```
posix_sysconf(int $conf_id): int
```

Returns system runtime information.

### Parameters

Identifier of the variable with the following constants POSIX_SC_ARG_MAX, POSIX_SC_PAGESIZE, POSIX_SC_NPROCESSORS_CONF, POSIX_SC_NPROCESSORS_ONLN, POSIX_SC_CHILD_MAX, POSIX_SC_CLK_TCK

### Return Values

Returns the numeric value related to conf_id

### Examples

Example #1 posix_sysconf() example

Returns the number of active cpus.

```
<?php
echo posix_sysconf(POSIX_SC_NPROCESSORS_ONLN);
?>
```

The above example will output:

```
2
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.posix-sysconf.php
