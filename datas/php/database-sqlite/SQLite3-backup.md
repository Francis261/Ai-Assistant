# SQLite3::backup

Source: https://devdocs.io/php/sqlite3.backup

(PHP 7 >= 7.4.0, PHP 8)

SQLite3::backup — Backup one database to another database

### Description

```
public SQLite3::backup(SQLite3 $destination, string $sourceDatabase = "main", string $destinationDatabase = "main"): bool
```

SQLite3::backup() copies the contents of one database into another, overwriting the contents of the destination database. It is useful either for creating backups of databases or for copying in-memory databases to or from persistent files.

As of SQLite 3.27.0 (2019-02-07), it is also possible to use the statement VACUUM INTO 'file.db'; to backup the database to a new file.

### Parameters

A database connection opened with SQLite3::open().

The database name is "main" for the main database, "temp" for the temporary database, or the name specified after the AS keyword in an ATTACH statement for an attached database.

Analogous to sourceDatabase but for the destination.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 Backup an existing database

```
<?php
// $conn is a connection to an already opened sqlite3 database

$backup = new SQLite3('backup.sqlite');
$conn->backup($backup);
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/sqlite3.backup.php
