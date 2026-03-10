# pg_convert

Source: https://devdocs.io/php/function.pg-convert

(PHP 4 >= 4.3.0, PHP 5, PHP 7, PHP 8)

pg_convert — Convert associative array values into forms suitable for SQL statements

### Description

```
pg_convert(
 PgSql\Connection $connection,
 string $table_name,
 array $values,
 int $flags = 0
): array|false
```

pg_convert() checks and converts the values in values into suitable values for use in an SQL statement. Precondition for pg_convert() is the existence of a table table_name which has at least as many columns as values has elements. The fieldnames in table_name must match the indices in values and the corresponding datatypes must be compatible. Returns an array with the converted values on success, false otherwise.

Note:

Boolean values are accepted and converted to PostgreSQL booleans. String representations of boolean values are also supported. null is converted to PostgreSQL NULL.

### Parameters

An PgSql\Connection instance.

Name of the table against which to convert types.

Data to be converted.

Any number of PGSQL_CONV_IGNORE_DEFAULT, PGSQL_CONV_FORCE_NULL or PGSQL_CONV_IGNORE_NOT_NULL, combined.

### Return Values

An array of converted values, or false on failure.

### Errors/Exceptions

A ValueError or TypeError is thrown when the value or type of field does not match properly with a PostgreSQL's type.

### Changelog

### Examples

Example #1 pg_convert() example

```
<?php 
  $dbconn = pg_connect('dbname=foo');
  
  $tmp = array(
      'author' => 'Joe Thackery',
      'year' => 2005,
      'title' => 'My Life, by Joe Thackery'
  );
  
  $vals = pg_convert($dbconn, 'authors', $tmp);
?>
```

### See Also

- pg_meta_data() - Get meta data for table
- pg_insert() - Insert array into table
- pg_select() - Select records
- pg_update() - Update table
- pg_delete() - Deletes records

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pg-convert.php
