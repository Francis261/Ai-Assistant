# pg_field_name

Source: https://devdocs.io/php/function.pg-field-name

(PHP 4 >= 4.2.0, PHP 5, PHP 7, PHP 8)

pg_field_name — Returns the name of a field

### Description

```
pg_field_name(PgSql\Result $result, int $field): string
```

pg_field_name() returns the name of the field occupying the given field in the given result instance. Field numbering starts from 0.

Note:

This function used to be called pg_fieldname().

### Parameters

An PgSql\Result instance, returned by pg_query(), pg_query_params() or pg_execute()(among others).

Field number, starting from 0.

### Return Values

The field name.

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

- pg_field_num() - Returns the field number of the named field

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pg-field-name.php
