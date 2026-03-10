# SQLite3::version

Source: https://devdocs.io/php/sqlite3.version

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

SQLite3::version — Returns the SQLite3 library version as a string constant and as a number

### Description

```
public static SQLite3::version(): array
```

Returns the SQLite3 library version as a string constant and as a number.

### Parameters

This function has no parameters.

### Return Values

Returns an associative array with the keys "versionString" and "versionNumber".

### Examples

Example #1 SQLite3::version() example

```
<?php
print_r(SQLite3::version());
?>
```

The above example will output something similar to:

```
Array
(
    [versionString] => 3.5.9
    [versionNumber] => 3005009
)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/sqlite3.version.php
