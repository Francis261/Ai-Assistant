# pg_field_prtlen

Source: https://devdocs.io/php/function.pg-field-prtlen

(PHP 4 >= 4.2.0, PHP 5, PHP 7, PHP 8)

pg_field_prtlen — Returns the printed length

### Description

```
pg_field_prtlen(PgSql\Result $result, string|false|null $row, mixed $field_name_or_number): int
```

```
pg_field_prtlen(PgSql\Result $result, mixed $field_name_or_number): int
```

pg_field_prtlen() returns the actual printed length (number of characters) of a specific value in a PostgreSQL result. Row numbering starts at 0. This function will return false on an error.

field_name_or_number can be passed either as an int or as a string. If it is passed as an int, PHP recognises it as the field number, otherwise as field name.

See the example given at the pg_field_name() page.

Note:

This function used to be called pg_fieldprtlen().

### Parameters

An PgSql\Result instance, returned by pg_query(), pg_query_params() or pg_execute()(among others).

Row number in result. Rows are numbered from 0 upwards. If omitted, current row is fetched.

### Return Values

The field printed length.

### Changelog

### Examples

Example #1 Getting information about fields

```
<?php
  $dbconn = pg_connect("dbname=publisher") or die("Could not connect");

  $res = pg_query($dbconn, "select * from authors where author = 'Orwell'");
  $i = pg_num_fields($res);
  for ($j = 0; $j < $i; $j++) {
      echo "column $j\n";
      $fieldname = pg_field_name($res, $j);
      echo "fieldname: $fieldname\n";
      echo "printed length: " . pg_field_prtlen($res, $fieldname) . " characters\n";
      echo "storage length: " . pg_field_size($res, $j) . " bytes\n";
      echo "field type: " . pg_field_type($res, $j) . " \n\n";
  }
?>
```

The above example will output:

```
column 0
fieldname: author
printed length: 6 characters
storage length: -1 bytes
field type: varchar 

column 1
fieldname: year
printed length: 4 characters
storage length: 2 bytes
field type: int2 

column 2
fieldname: title
printed length: 24 characters
storage length: -1 bytes
field type: varchar
```

### See Also

- pg_field_size() - Returns the internal storage size of the named field

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pg-field-prtlen.php
