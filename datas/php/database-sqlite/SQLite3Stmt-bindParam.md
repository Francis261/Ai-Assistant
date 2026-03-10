# SQLite3Stmt::bindParam

Source: https://devdocs.io/php/sqlite3stmt.bindparam

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

SQLite3Stmt::bindParam — Binds a parameter to a statement variable

### Description

```
public SQLite3Stmt::bindParam(string|int $param, mixed &$var, int $type = SQLITE3_TEXT): bool
```

Binds a parameter to a statement variable.

Before PHP 7.2.14 and 7.3.0, respectively, SQLite3Stmt::reset() must be called after the first call to SQLite3Stmt::execute() if the bound value should be properly updated on following calls to SQLite3Stmt::execute(). If SQLite3Stmt::reset() is not called, the bound value will not change, even if the value assigned to the variable passed to SQLite3Stmt::bindParam() has changed, or SQLite3Stmt::bindParam() has been called again.

### Parameters

Either a string (for named parameters) or an int (for positional parameters) identifying the statement variable to which the value should be bound. If a named parameter does not start with a colon (:) or an at sign (@), a colon (:) is automatically preprended. Positional parameters start with 1.

The parameter to bind to a statement variable.

The data type of the parameter to bind.

- SQLITE3_INTEGER: The value is a signed integer, stored in 1, 2, 3, 4, 6, or 8 bytes depending on the magnitude of the value.
- SQLITE3_FLOAT: The value is a floating point value, stored as an 8-byte IEEE floating point number.
- SQLITE3_TEXT: The value is a text string, stored using the database encoding (UTF-8, UTF-16BE or UTF-16-LE).
- SQLITE3_BLOB: The value is a blob of data, stored exactly as it was input.
- SQLITE3_NULL: The value is a NULL value.

SQLITE3_INTEGER: The value is a signed integer, stored in 1, 2, 3, 4, 6, or 8 bytes depending on the magnitude of the value.

SQLITE3_FLOAT: The value is a floating point value, stored as an 8-byte IEEE floating point number.

SQLITE3_TEXT: The value is a text string, stored using the database encoding (UTF-8, UTF-16BE or UTF-16-LE).

SQLITE3_BLOB: The value is a blob of data, stored exactly as it was input.

SQLITE3_NULL: The value is a NULL value.

As of PHP 7.0.7, if type is omitted, it is automatically detected from the type of the var: bool and int are treated as SQLITE3_INTEGER, float as SQLITE3_FLOAT, null as SQLITE3_NULL and all others as SQLITE3_TEXT. Formerly, if type has been omitted, it has defaulted to SQLITE3_TEXT.

Note:

If var is null, it is always treated as SQLITE3_NULL, regardless of the given type.

### Return Values

Returns true if the parameter is bound to the statement variable, false on failure.

### Changelog

### Examples

Example #1 SQLite3Stmt::bindParam() Usage

This example shows how a single prepared statement with a single parameter binding can be used to insert multiple rows with different values.

```
<?php
$db = new SQLite3(':memory:');
$db->exec("CREATE TABLE foo (bar TEXT)");

$stmt = $db->prepare("INSERT INTO foo VALUES (:bar)");
$stmt->bindParam(':bar', $bar, SQLITE3_TEXT);

$bar = 'baz';
$stmt->execute();

$bar = 42;
$stmt->execute();

$res = $db->query("SELECT * FROM foo");
while (($row = $res->fetchArray(SQLITE3_ASSOC))) {
    var_dump($row);
}
?>
```

The above example will output:

```
array(1) {
  ["bar"]=>
  string(3) "baz"
}
array(1) {
  ["bar"]=>
  string(2) "42"
}
```

### See Also

- SQLite3Stmt::bindValue() - Binds the value of a parameter to a statement variable
- SQLite3::prepare() - Prepares an SQL statement for execution

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/sqlite3stmt.bindparam.php
