# pg_copy_to

Source: https://devdocs.io/php/function.pg-copy-to

(PHP 4 >= 4.2.0, PHP 5, PHP 7, PHP 8)

pg_copy_to — Copy a table to an array

### Description

```
pg_copy_to(
 PgSql\Connection $connection,
 string $table_name,
 string $separator = "\t",
 string $null_as = "\\\\N"
): array|false
```

pg_copy_to() copies a table to an array. It issues COPY TO SQL command internally to retrieve records.

### Parameters

An PgSql\Connection instance.

Name of the table from which to copy the data into rows.

The token that separates values for each field in each element of rows. Default is \t.

How SQL NULL values are represented in the rows. Default is \\N ("\\\\N").

### Return Values

An array with one element for each line of COPY data, or false on failure.

### Changelog

### Examples

Example #1 pg_copy_to() example

```
<?php
   $db = pg_connect("dbname=publisher") or die("Could not connect");
   
   $rows = pg_copy_to($db, $table_name);
   
   pg_query($db, "DELETE FROM $table_name");
   
   pg_copy_from($db, $table_name, $rows);
?>
```

### See Also

- pg_copy_from() - Insert records into a table from an array

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pg-copy-to.php
