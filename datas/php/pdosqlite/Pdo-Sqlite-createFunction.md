# Pdo\Sqlite::createFunction

Source: https://devdocs.io/php/pdo-sqlite.createfunction

(PHP 8 >= 8.4.0)

Pdo\Sqlite::createFunction — Registers a user-defined function for use in SQL statements

### Description

```
public Pdo\Sqlite::createFunction(
 string $function_name,
 callable $callback,
 int $num_args = -1,
 int $flags = 0
): bool
```

This method allows PHP function to be registered with SQLite as a user-defined function, so that it can be called within SQL queries. The defined function can be used in any SQL query that allows function calls, for example SELECT, UPDATE, or triggers.

By using this method it is possible to override native SQL functions.

### Parameters

Note: Callback functions should return a type understood by SQLite (i.e. scalar type).

This function need to be defined as:

```
callback(mixed $value, mixed ...$values): mixed
```

The first argument passed to the SQL function.

Further arguments passed to the SQL function.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 Pdo\Sqlite::createFunction() example

In this example, we have a function that calculates the SHA256 sum of a string, and then reverses it. When the SQL statement executes, it returns the value of the filename transformed by our function. The data returned in $rows contains the processed result.

The beauty of this technique is that there is no need to process the result using a foreach loop after the query.

```
<?php
function sha256_and_reverse($string)
{
    return strrev(hash('sha256', $string));
}

$db = new Pdo\Sqlite('sqlite::sqlitedb');
$db->sqliteCreateFunction('sha256rev', 'sha256_and_reverse', 1);
$rows = $db->query('SELECT sha256rev(filename) FROM files')->fetchAll();
?>
```

### See Also

- Pdo\Sqlite::createAggregate() - Registers an aggregating user-defined function for use in SQL statements
- Pdo\Sqlite::createCollation() - Registers a user-defined function for use as a collating function in SQL statements
- sqlite_create_function()
- sqlite_create_aggregate()

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/pdo-sqlite.createfunction.php
