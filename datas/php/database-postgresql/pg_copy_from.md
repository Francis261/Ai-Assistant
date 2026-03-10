# pg_copy_from

Source: https://devdocs.io/php/function.pg-copy-from

(PHP 4 >= 4.2.0, PHP 5, PHP 7, PHP 8)

pg_copy_from — Insert records into a table from an array

### Description

```
pg_copy_from(
 PgSql\Connection $connection,
 string $table_name,
 array $rows,
 string $separator = "\t",
 string $null_as = "\\\\N"
): bool
```

pg_copy_from() inserts records into a table from rows. It issues a COPY FROM SQL command internally to insert records.

### Parameters

An PgSql\Connection instance.

Name of the table into which to copy the rows.

An array of data to be copied into table_name. Each value in rows becomes a row in table_name. Each value in rows should be a delimited string of the values to insert into each field. Values should be linefeed terminated.

The token that separates values for each field in each element of rows. Default is \t.

How SQL NULL values are represented in the rows. Default is \\N ("\\\\N").

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 pg_copy_from() example

```
<?php
   $db = pg_connect("dbname=publisher") or die("Could not connect");
   
   $rows = pg_copy_to($db, $table_name);
   
   pg_query($db, "DELETE FROM $table_name");
   
   pg_copy_from($db, $table_name, $rows);
?>
```

### See Also

- pg_copy_to() - Copy a table to an array

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pg-copy-from.php
