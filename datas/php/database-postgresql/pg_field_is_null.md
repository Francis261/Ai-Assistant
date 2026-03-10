# pg_field_is_null

Source: https://devdocs.io/php/function.pg-field-is-null

(PHP 4 >= 4.2.0, PHP 5, PHP 7, PHP 8)

pg_field_is_null — Test if a field is SQL NULL

### Description

```
pg_field_is_null(PgSql\Result $result, string|false|null $row, mixed $field): int
```

```
pg_field_is_null(PgSql\Result $result, mixed $field): int
```

pg_field_is_null() tests if a field in an PgSql\Result instance is SQL NULL or not.

Note:

This function used to be called pg_fieldisnull().

### Parameters

An PgSql\Result instance, returned by pg_query(), pg_query_params() or pg_execute()(among others).

Row number in result to fetch. Rows are numbered from 0 upwards. If omitted, current row is fetched.

Field number (starting from 0) as an int or the field name as a string.

### Return Values

Returns 1 if the field in the given row is SQL NULL, 0 if not. false is returned if the row is out of range, or upon any other error.

### Changelog

### Examples

Example #1 pg_field_is_null() example

```
<?php
  $dbconn = pg_connect("dbname=publisher") or die ("Could not connect");
  $res = pg_query($dbconn, "select * from authors where author = 'Orwell'");
  if ($res) {
      if (pg_field_is_null($res, 0, "year") == 1) {
          echo "The value of the field year is null.\n";
      }
      if (pg_field_is_null($res, 0, "year") == 0) {
          echo "The value of the field year is not null.\n";
    }
 }
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pg-field-is-null.php
