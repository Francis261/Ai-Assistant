# SQLite3::openBlob

Source: https://devdocs.io/php/sqlite3.openblob

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

SQLite3::openBlob — Opens a stream resource to read a BLOB

### Description

```
public SQLite3::openBlob(
 string $table,
 string $column,
 int $rowid,
 string $database = "main",
 int $flags = SQLITE3_OPEN_READONLY
): resource|false
```

Opens a stream resource to read or write a BLOB, which would be selected by:

SELECT column FROM database.table WHERE rowid = rowid

Note: It is not possible to change the size of a BLOB by writing to the stream. Instead, an UPDATE statement has to be executed, possibly using SQLite's zeroblob() function to set the desired BLOB size.

### Parameters

The table name.

The column name.

The row ID.

The symbolic name of the DB

Either SQLITE3_OPEN_READONLY or SQLITE3_OPEN_READWRITE to open the stream for reading only, or for reading and writing, respectively.

### Return Values

Returns a stream resource, or false on failure.

### Changelog

### Examples

Example #1 SQLite3::openBlob() example

```
<?php
$conn = new SQLite3(':memory:');
$conn->exec('CREATE TABLE test (text text)');
$conn->exec("INSERT INTO test VALUES ('Lorem ipsum')");
$stream = $conn->openBlob('test', 'text', 1);
echo stream_get_contents($stream);
fclose($stream); // mandatory, otherwise the next line would fail
$conn->close();
?>
```

The above example will output:

```
Lorem ipsum
```

Example #2 Incrementally writing a BLOB

```
<?php
$conn = new SQLite3(':memory:');
$conn->exec('CREATE TABLE test (text text)');
$conn->exec("INSERT INTO test VALUES (zeroblob(36))");
$stream = $conn->openBlob('test', 'text', 1, 'main', SQLITE3_OPEN_READWRITE);
for ($i = 0; $i < 3; $i++) {
    fwrite($stream,  "Lorem ipsum\n");
}
fclose($stream);
echo $conn->querySingle("SELECT text FROM test");
$conn->close();
?>
```

The above example will output:

```
Lorem ipsum
Lorem ipsum
Lorem ipsum
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/sqlite3.openblob.php
