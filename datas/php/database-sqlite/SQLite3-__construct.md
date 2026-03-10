# SQLite3::__construct

Source: https://devdocs.io/php/sqlite3.construct

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

SQLite3::__construct — Instantiates an SQLite3 object and opens an SQLite 3 database

### Description

Instantiates an SQLite3 object and opens a connection to an SQLite 3 database. If the build includes encryption, then it will attempt to use the key.

### Parameters

Path to the SQLite database, or :memory: to use in-memory database. If filename is an empty string, then a private, temporary on-disk database will be created. This private database will be automatically deleted as soon as the database connection is closed.

Optional flags used to determine how to open the SQLite database. By default, open uses SQLITE3_OPEN_READWRITE | SQLITE3_OPEN_CREATE.

- SQLITE3_OPEN_READONLY: Open the database for reading only.
- SQLITE3_OPEN_READWRITE: Open the database for reading and writing.
- SQLITE3_OPEN_CREATE: Create the database if it does not exist.

SQLITE3_OPEN_READONLY: Open the database for reading only.

SQLITE3_OPEN_READWRITE: Open the database for reading and writing.

SQLITE3_OPEN_CREATE: Create the database if it does not exist.

An optional encryption key used when encrypting and decrypting an SQLite database. If the SQLite encryption module is not installed, this parameter will have no effect.

### Errors/Exceptions

Throws an Exception on failure.

### Changelog

### Examples

Example #1 SQLite3::__construct() example

```
<?php
$db = new SQLite3('mysqlitedb.db');

$db->exec('CREATE TABLE foo (bar TEXT)');
$db->exec("INSERT INTO foo (bar) VALUES ('This is a test')");

$result = $db->query('SELECT bar FROM foo');
var_dump($result->fetchArray());
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/sqlite3.construct.php
