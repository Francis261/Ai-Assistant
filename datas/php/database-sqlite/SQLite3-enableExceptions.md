# SQLite3::enableExceptions

Source: https://devdocs.io/php/sqlite3.enableexceptions

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

SQLite3::enableExceptions — Enable throwing exceptions

### Description

```
public SQLite3::enableExceptions(bool $enable = false): bool
```

Controls whether the SQLite3 instance will throw exceptions or warnings on error.

### Parameters

When true, the SQLite3 instance, and SQLite3Stmt and SQLite3Result instances derived from it, will throw exceptions on error.

When false, the SQLite3 instance, and SQLite3Stmt and SQLite3Result instances derived from it, will raise warnings on error.

For either mode, the error code and message, if any, will be available via SQLite3::lastErrorCode() and SQLite3::lastErrorMsg() respectively.

### Return Values

Returns the old value; true if exceptions were enabled, false otherwise.

### Changelog

### Examples

Example #1 SQLite3::enableExceptions() example

```
<?php
$sqlite = new SQLite3(':memory:');
try {
    $sqlite->exec('create table foo');
    $sqlite->enableExceptions(true);
    $sqlite->exec('create table bar');
} catch (Exception $e) {
    echo 'Caught exception: ' . $e->getMessage();
}
?>
```

The above example will output something similar to:

```
Warning: SQLite3::exec(): near "foo": syntax error in example.php on line 4
Caught exception: near "bar": syntax error
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/sqlite3.enableexceptions.php
