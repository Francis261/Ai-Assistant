# pg_meta_data

Source: https://devdocs.io/php/function.pg-meta-data

(PHP 4 >= 4.3.0, PHP 5, PHP 7, PHP 8)

pg_meta_data — Get meta data for table

### Description

```
pg_meta_data(PgSql\Connection $connection, string $table_name, bool $extended = false): array|false
```

pg_meta_data() returns table definition for table_name as an array.

### Parameters

An PgSql\Connection instance.

The name of the table.

Flag for returning extended meta data. Default to false.

### Return Values

An array of the table definition, or false on failure.

### Changelog

### Examples

Example #1 Getting table metadata

```
<?php
  $dbconn = pg_connect("dbname=publisher") or die("Could not connect");

  $meta = pg_meta_data($dbconn, 'authors');
  if (is_array($meta)) {
      echo '<pre>';
      var_dump($meta);
      echo '</pre>';
  }
?>
```

The above example will output:

```
array(3) {
["author"]=>
array(5) {
  ["num"]=>
  int(1)
  ["type"]=>
  string(7) "varchar"
  ["len"]=>
  int(-1)
  ["not null"]=>
  bool(false)
  ["has default"]=>
  bool(false)
}
["year"]=>
array(5) {
  ["num"]=>
  int(2)
  ["type"]=>
  string(4) "int2"
  ["len"]=>
  int(2)
  ["not null"]=>
  bool(false)
  ["has default"]=>
  bool(false)
}
["title"]=>
array(5) {
  ["num"]=>
  int(3)
  ["type"]=>
  string(7) "varchar"
  ["len"]=>
  int(-1)
  ["not null"]=>
  bool(false)
  ["has default"]=>
  bool(false)
}
}
```

### See Also

- pg_convert() - Convert associative array values into forms suitable for SQL statements

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pg-meta-data.php
