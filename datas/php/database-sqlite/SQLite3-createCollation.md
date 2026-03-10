# SQLite3::createCollation

Source: https://devdocs.io/php/sqlite3.createcollation

(PHP 5 >= 5.3.11, PHP 7, PHP 8)

SQLite3::createCollation — Registers a PHP function for use as an SQL collating function

### Description

```
public SQLite3::createCollation(string $name, callable $callback): bool
```

Registers a PHP function or user-defined function for use as a collating function within SQL statements.

### Parameters

Name of the SQL collating function to be created or redefined

The name of a PHP function or user-defined function to apply as a callback, defining the behavior of the collation. It should accept two values and return as strcmp() does, i.e. it should return -1, 1, or 0 if the first string sorts before, sorts after, or is equal to the second.

This function need to be defined as:

```
collation(mixed $value1, mixed $value2): int
```

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 SQLite3::createCollation() example

Register the PHP function strnatcmp() as a collating sequence in the SQLite3 database.

```
<?php

$db = new SQLite3(":memory:");
$db->exec("CREATE TABLE test (col1 string)");
$db->exec("INSERT INTO test VALUES ('a1')");
$db->exec("INSERT INTO test VALUES ('a10')");
$db->exec("INSERT INTO test VALUES ('a2')");

$db->createCollation('NATURAL_CMP', 'strnatcmp');

$defaultSort = $db->query("SELECT col1 FROM test ORDER BY col1");
$naturalSort = $db->query("SELECT col1 FROM test ORDER BY col1 COLLATE NATURAL_CMP");

echo "default:\n";
while ($row = $defaultSort->fetchArray()){
    echo $row['col1'], "\n";
}

echo "\nnatural:\n";
while ($row = $naturalSort->fetchArray()){
    echo $row['col1'], "\n";
}

$db->close();

?>
```

The above example will output:

```
default:
a1
a10
a2

natural:
a1
a2
a10
```

### See Also

- The SQLite collation documentation: » http://sqlite.org/datatype3.html#collation

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/sqlite3.createcollation.php
