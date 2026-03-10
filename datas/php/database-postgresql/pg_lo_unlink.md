# pg_lo_unlink

Source: https://devdocs.io/php/function.pg-lo-unlink

(PHP 4 >= 4.2.0, PHP 5, PHP 7, PHP 8)

pg_lo_unlink — Delete a large object

### Description

```
pg_lo_unlink(PgSql\Connection $connection, int $oid): bool
```

pg_lo_unlink() deletes a large object with the oid. Returns true on success or false on failure.

To use the large object interface, it is necessary to enclose it within a transaction block.

Note:

This function used to be called pg_lounlink().

### Parameters

An PgSql\Connection instance. When connection is unspecified, the default connection is used. The default connection is the last connection made by pg_connect() or pg_pconnect().

As of PHP 8.1.0, using the default connection is deprecated.

The OID of the large object in the database.

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 pg_lo_unlink() example

```
<?php
   // OID of the large object to delete
   $doc_oid = 189762345;
   $database = pg_connect("dbname=jacarta");
   pg_query($database, "begin");
   pg_lo_unlink($database, $doc_oid);
   pg_query($database, "commit");
?>
```

### See Also

- pg_lo_create() - Create a large object
- pg_lo_import() - Import a large object from file

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pg-lo-unlink.php
