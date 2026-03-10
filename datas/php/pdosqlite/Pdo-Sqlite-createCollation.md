# Pdo\Sqlite::createCollation

Source: https://devdocs.io/php/pdo-sqlite.createcollation

(PHP 8 >= 8.4.0)

Pdo\Sqlite::createCollation — Registers a user-defined function for use as a collating function in SQL statements

### Description

```
public Pdo\Sqlite::createCollation(string $name, callable $callback): bool
```

This method is similar to Pdo\Sqlite::createFunction() except that it registers functions that are used to collate strings.

### Parameters

This function need to be defined as:

```
collation(string $string1, string $string2): int
```

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 Pdo\Sqlite::createCollation() example

```
<?php
$db = new Pdo\Sqlite('sqlite::memory:');
$db->exec("CREATE TABLE test (col1 string)");
$db->exec("INSERT INTO test VALUES ('a1')");
$db->exec("INSERT INTO test VALUES ('a10')");
$db->exec("INSERT INTO test VALUES ('a2')");

$db->sqliteCreateCollation('NATURAL_CMP', 'strnatcmp');
foreach ($db->query("SELECT col1 FROM test ORDER BY col1") as $row) {
  echo $row['col1'] . "\n";
}
echo "\n";
foreach ($db->query("SELECT col1 FROM test ORDER BY col1 COLLATE NATURAL_CMP") as $row) {
  echo $row['col1'] . "\n";
}
?>
```

The above example will output:

```
a1
a10
a2

a1
a2
a10
```

### See Also

- Pdo\Sqlite::createFunction() - Registers a user-defined function for use in SQL statements
- Pdo\Sqlite::createAggregate() - Registers an aggregating user-defined function for use in SQL statements
- sqlite_create_function()
- sqlite_create_aggregate()

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/pdo-sqlite.createcollation.php
