# SQLite3::createFunction

Source: https://devdocs.io/php/sqlite3.createfunction

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

SQLite3::createFunction — Registers a PHP function for use as an SQL scalar function

### Description

```
public SQLite3::createFunction(
 string $name,
 callable $callback,
 int $argCount = -1,
 int $flags = 0
): bool
```

Registers a PHP function or user-defined function for use as an SQL scalar function for use within SQL statements.

### Parameters

Name of the SQL function to be created or redefined.

The name of a PHP function or user-defined function to apply as a callback, defining the behavior of the SQL function.

This function need to be defined as:

```
callback(mixed $value, mixed ...$values): mixed
```

The first argument passed to the SQL function.

Further arguments passed to the SQL function.

The number of arguments that the SQL function takes. If this parameter is -1, then the SQL function may take any number of arguments.

A bitwise conjunction of flags. Currently, only SQLITE3_DETERMINISTIC is supported, which specifies that the function always returns the same result given the same inputs within a single SQL statement.

### Return Values

Returns true upon successful creation of the function, false on failure.

### Changelog

### Examples

Example #1 SQLite3::createFunction() example

```
<?php
function my_udf_md5($string) {
    return hash('md5', $string);
}

$db = new SQLite3('mysqlitedb.db');
$db->createFunction('my_udf_md5', 'my_udf_md5');

var_dump($db->querySingle('SELECT my_udf_md5("test")'));
?>
```

The above example will output something similar to:

```
string(32) "098f6bcd4621d373cade4e832627b4f6"
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/sqlite3.createfunction.php
