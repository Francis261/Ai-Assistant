# pg_field_num

Source: https://devdocs.io/php/function.pg-field-num

(PHP 4 >= 4.2.0, PHP 5, PHP 7, PHP 8)

pg_field_num — Returns the field number of the named field

### Description

```
pg_field_num(PgSql\Result $result, string $field): int
```

pg_field_num() will return the number of the field number that corresponds to the field in the given result instance.

Note:

This function used to be called pg_fieldnum().

### Parameters

An PgSql\Result instance, returned by pg_query(), pg_query_params() or pg_execute()(among others).

The name of the field. The given name is treated like an identifier in an SQL command, that is, it is downcased unless double-quoted.

### Return Values

The field number (numbered from 0), or -1 on error.

### Changelog

### Examples

Example #1 Getting information about fields

```
<?php
  $dbconn = pg_connect("dbname=publisher") or die("Could not connect");

  $res = pg_query($dbconn, "select author, year, title from authors where author = 'Orwell'");
  
  echo "Column 'title' is field number: ", pg_field_num($res, 'title');
?>
```

The above example will output:

```
Column 'title' is field number: 2
```

### See Also

- pg_field_name() - Returns the name of a field

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pg-field-num.php
