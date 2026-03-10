# SQLite3::createAggregate

Source: https://devdocs.io/php/sqlite3.createaggregate

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

SQLite3::createAggregate — Registers a PHP function for use as an SQL aggregate function

### Description

```
public SQLite3::createAggregate(
 string $name,
 callable $stepCallback,
 callable $finalCallback,
 int $argCount = -1
): bool
```

Registers a PHP function or user-defined function for use as an SQL aggregate function for use within SQL statements.

### Parameters

Name of the SQL aggregate to be created or redefined.

Callback function called for each row of the result set. Your PHP function should accumulate the result and store it in the aggregation context.

This function need to be defined as:

```
step(
 mixed $context,
 int $rownumber,
 mixed $value,
 mixed ...$values
): mixed
```

null for the first row; on subsequent rows it will have the value that was previously returned from the step function; you should use this to maintain the aggregate state.

The current row number.

The first argument passed to the aggregate.

Further arguments passed to the aggregate.

Callback function to aggregate the "stepped" data from each row. Once all the rows have been processed, this function will be called and it should then take the data from the aggregation context and return the result. This callback function should return a type understood by SQLite (i.e. scalar type).

This function need to be defined as:

```
fini(mixed $context, int $rownumber): mixed
```

Holds the return value from the very last call to the step function.

Always 0.

The number of arguments that the SQL aggregate takes. If this parameter is negative, then the SQL aggregate may take any number of arguments.

### Return Values

Returns true upon successful creation of the aggregate, or false on failure.

### Examples

Example #1 max_length aggregation function example

```
<?php
$data = array(
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
   );
$db = new SQLite3(':memory:');
$db->exec("CREATE TABLE strings(a)");
$insert = $db->prepare('INSERT INTO strings VALUES (?)');
foreach ($data as $str) {
    $insert->bindValue(1, $str);
    $insert->execute();
}
$insert = null;

function max_len_step($context, $rownumber, $string)
{
    if (strlen($string) > $context) {
        $context = strlen($string);
    }
    return $context;
}

function max_len_finalize($context, $rownumber)
{
    return $context === null ? 0 : $context;
}

$db->createAggregate('max_len', 'max_len_step', 'max_len_finalize');

var_dump($db->querySingle('SELECT max_len(a) from strings'));
?>
```

The above example will output:

```
int(5)
```

In this example, we are creating an aggregating function that will calculate the length of the longest string in one of the columns of the table. For each row, the max_len_step function is called and passed a $context parameter. The context parameter is just like any other PHP variable and be set to hold an array or even an object value. In this example, we are simply using it to hold the maximum length we have seen so far; if the $string has a length longer than the current maximum, we update the context to hold this new maximum length.

After all of the rows have been processed, SQLite calls the max_len_finalize function to determine the aggregate result. Here, we could perform some kind of calculation based on the data found in the $context. In our simple example though, we have been calculating the result as the query progressed, so we simply need to return the context value.

It is NOT recommended for you to store a copy of the values in the context and then process them at the end, as you would cause SQLite to use a lot of memory to process the query - just think of how much memory you would need if a million rows were stored in memory, each containing a string 32 bytes in length.

You can use SQLite3::createAggregate() to override SQLite native SQL functions.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/sqlite3.createaggregate.php
