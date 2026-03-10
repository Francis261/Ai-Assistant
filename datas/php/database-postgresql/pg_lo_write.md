# pg_lo_write

Source: https://devdocs.io/php/function.pg-lo-write

(PHP 4 >= 4.2.0, PHP 5, PHP 7, PHP 8)

pg_lo_write — Write to a large object

### Description

```
pg_lo_write(PgSql\Lob $lob, string $data, ?int $length = null): int|false
```

pg_lo_write() writes data into a large object at the current seek position.

To use the large object interface, it is necessary to enclose it within a transaction block.

Note:

This function used to be called pg_lowrite().

### Parameters

An PgSql\Lob instance, returned by pg_lo_open().

The data to be written to the large object. If length is an int and is less than the length of data, only length bytes will be written.

An optional maximum number of bytes to write. Must be greater than zero and no greater than the length of data. Defaults to the length of data.

### Return Values

The number of bytes written to the large object, or false on error.

### Changelog

### Examples

Example #1 pg_lo_write() example

```
<?php
   $doc_oid = 189762345;
   $data = "This will overwrite the start of the large object.";
   $database = pg_connect("dbname=jacarta");
   pg_query($database, "begin");
   $handle = pg_lo_open($database, $doc_oid, "w");
   $data = pg_lo_write($handle, $data);
   pg_query($database, "commit");
?>
```

### See Also

- pg_lo_create() - Create a large object
- pg_lo_open() - Open a large object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pg-lo-write.php
