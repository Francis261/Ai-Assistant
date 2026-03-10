# SQLite3Stmt::bindValue

Source: https://devdocs.io/php/sqlite3stmt.bindvalue

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

SQLite3Stmt::bindValue — Binds the value of a parameter to a statement variable

### Description

```
public SQLite3Stmt::bindValue(string|int $param, mixed $value, int $type = SQLITE3_TEXT): bool
```

Binds the value of a parameter to a statement variable.

Before PHP 7.2.14 and 7.3.0, respectively, once the statement has been executed, SQLite3Stmt::reset() needs to be called to be able to change the value of bound parameters.

### Parameters

Either a string (for named parameters) or an int (for positional parameters) identifying the statement variable to which the value should be bound. If a named parameter does not start with a colon (:) or an at sign (@), a colon (:) is automatically preprended. Positional parameters start with 1.

The value to bind to a statement variable.

The data type of the value to bind.

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

As of PHP 7.0.7, if type is omitted, it is automatically detected from the type of the value: bool and int are treated as SQLITE3_INTEGER, float as SQLITE3_FLOAT, null as SQLITE3_NULL and all others as SQLITE3_TEXT. Formerly, if type has been omitted, it has defaulted to SQLITE3_TEXT.

Note:

If value is null, it is always treated as SQLITE3_NULL, regardless of the given type.

### Return Values

Returns true if the value is bound to the statement variable, or false on failure.

### Changelog

### Examples

Example #1 SQLite3Stmt::bindValue() example

```
<?php
$db = new SQLite3(':memory:');

$db->exec('CREATE TABLE foo (id INTEGER, bar STRING)');
$db->exec("INSERT INTO foo (id, bar) VALUES (1, 'This is a test')");

$stmt = $db->prepare('SELECT bar FROM foo WHERE id=:id');
$stmt->bindValue(':id', 1, SQLITE3_INTEGER);

$result = $stmt->execute();
var_dump($result->fetchArray(SQLITE3_ASSOC));
?>
```

The above example will output:

```
array(1) {
  ["bar"]=>
  string(14) "This is a test"
}
```

### See Also

- SQLite3Stmt::bindParam() - Binds a parameter to a statement variable
- SQLite3::prepare() - Prepares an SQL statement for execution

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/sqlite3stmt.bindvalue.php
