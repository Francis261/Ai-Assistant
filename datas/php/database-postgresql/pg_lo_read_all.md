# pg_lo_read_all

Source: https://devdocs.io/php/function.pg-lo-read-all

(PHP 4 >= 4.2.0, PHP 5, PHP 7, PHP 8)

pg_lo_read_all — Reads an entire large object and send straight to browser

### Description

```
pg_lo_read_all(PgSql\Lob $lob): int
```

pg_lo_read_all() reads a large object and passes it straight through to the browser after sending all pending headers. Mainly intended for sending binary data like images or sound.

To use the large object interface, it is necessary to enclose it within a transaction block.

Note:

This function used to be called pg_loreadall().

### Parameters

An PgSql\Lob instance, returned by pg_lo_open().

### Return Values

Number of bytes read.

### Changelog

### Examples

Example #1 pg_lo_read_all() example

```
<?php
   header('Content-type: image/jpeg');
   $image_oid = 189762345;
   $database = pg_connect("dbname=jacarta");
   pg_query($database, "begin");
   $handle = pg_lo_open($database, $image_oid, "r");
   pg_lo_read_all($handle);
   pg_query($database, "commit");
?>
```

### See Also

- pg_lo_read() - Read a large object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pg-lo-read-all.php
