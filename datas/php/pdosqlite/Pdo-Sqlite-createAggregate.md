# Pdo\Sqlite::createAggregate

Source: https://devdocs.io/php/pdo-sqlite.createaggregate

(PHP 8 >= 8.4.0)

Pdo\Sqlite::createAggregate — Registers an aggregating user-defined function for use in SQL statements

### Description

```
public Pdo\Sqlite::createAggregate(
 string $name,
 callable $step,
 callable $finalize,
 int $numArgs = -1
): bool
```

This method is similar to Pdo\Sqlite::createFunction() except that it registers functions that can be used to calculate a result aggregated across all the rows of a query.

The key difference between this method and Pdo\Sqlite::createFunction() is that two functions are required to manage the aggregate.

By using this method it is possible to override native SQL functions.

### Parameters

This function need to be defined as:

```
step(
 mixed $context,
 int $rownumber,
 mixed $value,
 mixed ...$values
): mixed
```

This function need to be defined as:

```
fini(mixed $context, int $rowcount): mixed
```

Holds the return value from the very last call to the step function.

Holds the number of rows over which the aggregate was performed.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 Pdo\Sqlite::createAggregate() example

In this example we will create a custom aggregate function named max_length that can be used in SQL queries.

In this example, we are creating an aggregating function, named max_length, that will calculate the length of the longest string in one of the columns of the table. For each row, the max_len_step function is called and passed a $context parameter. The context parameter is just like any other PHP variable and be set to hold an array or even an object. In this example, we are using it to hold the maximum length we have seen so far; if the $string has a length longer than the current maximum, we update the context to hold this new maximum length.

After all the rows have been processed, SQLite calls the max_len_finalize function to determine the aggregate result. It is possible to perform some kind of calculation based on the data in $context. In this basic example the result was calculated as the query progressed, thus so the context value can be directly returned.

```
<?php
$data = [
   'one',
   'two',
   'three',
   'four',
   'five',
   'six',
   'seven',
   'eight',
   'nine',
   'ten',
];
$db = new Pdo\Sqlite('sqlite::memory:');
$db->exec("CREATE TABLE strings(a)");
$insert = $db->prepare('INSERT INTO strings VALUES (?)');
foreach ($data as $str) {
    $insert->execute(array($str));
}
$insert = null;

function max_len_step($context, $row_number, $string)
{
    if (strlen($string) > $context) {
        $context = strlen($string);
    }
    return $context;
}

function max_len_finalize($context, $row_count)
{
    return $context === null ? 0 : $context;
}

$db->createAggregate('max_len', 'max_len_step', 'max_len_finalize');

var_dump($db->query('SELECT max_len(a) from strings')->fetchAll());

?>
```

It is NOT recommended for you to store a copy of the values in the context and then process them at the end, as you would cause SQLite to use a lot of memory to process the query - just think of how much memory you would need if a million rows were stored in memory, each containing a string 32 bytes in length.

### See Also

- Pdo\Sqlite::createFunction() - Registers a user-defined function for use in SQL statements
- Pdo\Sqlite::createCollation() - Registers a user-defined function for use as a collating function in SQL statements
- sqlite_create_function()
- sqlite_create_aggregate()

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/pdo-sqlite.createaggregate.php
