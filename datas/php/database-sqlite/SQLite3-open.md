# SQLite3::open

Source: https://devdocs.io/php/sqlite3.open

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

SQLite3::open — Opens an SQLite database

### Description

```
public SQLite3::open(string $filename, int $flags = SQLITE3_OPEN_READWRITE | SQLITE3_OPEN_CREATE, string $encryptionKey = ""): void
```

Opens an SQLite 3 Database. If the build includes encryption, then it will attempt to use the key.

### Parameters

Path to the SQLite database, or :memory: to use in-memory database.

Optional flags used to determine how to open the SQLite database. By default, open uses SQLITE3_OPEN_READWRITE | SQLITE3_OPEN_CREATE.

- SQLITE3_OPEN_READONLY: Open the database for reading only.
- SQLITE3_OPEN_READWRITE: Open the database for reading and writing.
- SQLITE3_OPEN_CREATE: Create the database if it does not exist.

SQLITE3_OPEN_READONLY: Open the database for reading only.

SQLITE3_OPEN_READWRITE: Open the database for reading and writing.

SQLITE3_OPEN_CREATE: Create the database if it does not exist.

An optional encryption key used when encrypting and decrypting an SQLite database. If the SQLite encryption module is not installed, this parameter will have no effect.

### Return Values

No value is returned.

### Examples

Example #1 SQLite3::open() example

```
<?php
/**
 * Simple example of extending the SQLite3 class and changing the __construct
 * parameters, then using the open method to initialize the DB.
 */
class MyDB extends SQLite3
{
    function __construct()
    {
        $this->open('mysqlitedb.db');
    }
}

$db = new MyDB();

$db->exec('CREATE TABLE foo (bar STRING)');
$db->exec("INSERT INTO foo (bar) VALUES ('This is a test')");

$result = $db->query('SELECT bar FROM foo');
var_dump($result->fetchArray());
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/sqlite3.open.php
