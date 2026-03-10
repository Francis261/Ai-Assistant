# Pdo\Pgsql::lobUnlink

Source: https://devdocs.io/php/pdo-pgsql.lobunlink

(PHP 8 >= 8.4.0)

Pdo\Pgsql::lobUnlink — Deletes the large object

### Description

```
public Pdo\Pgsql::lobUnlink(string $oid): bool
```

Deletes a large object from the database identified by OID.

Note: This function, and all manipulations of the large object, must be called and carried out within a transaction.

### Parameters

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 Pdo\Pgsql::lobUnlink() example

This example unlinks a large object from the database prior to deleting the row that references it from the blobs table are used in the examples of Pdo\Pgsql::lobCreate() and Pdo\Pgsql::lobOpen().

```
<?php
$db = new PDO('pgsql:dbname=test host=localhost', $user, $pass);
$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$db->beginTransaction();
$db->pgsqlLOBUnlink($oid);
$stmt = $db->prepare("DELETE FROM BLOBS where ident = ?");
$stmt->execute(array($some_id));
$db->commit();
?>
```

### See Also

- Pdo\Pgsql::lobCreate() - Creates a new large object
- Pdo\Pgsql::lobOpen() - Opens an existing large object stream
- pg_lo_create() - Create a large object
- pg_lo_open() - Open a large object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/pdo-pgsql.lobunlink.php
