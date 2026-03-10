# Pdo\Pgsql::lobOpen

Source: https://devdocs.io/php/pdo-pgsql.lobopen

(PHP 8 >= 8.4.0)

Pdo\Pgsql::lobOpen — Opens an existing large object stream

### Description

```
public Pdo\Pgsql::lobOpen(string $oid, string $mode = "rb"): resource|false
```

Pdo\Pgsql::lobOpen() opens a stream to access the data referenced by oid. All usual filesystem functions, such as fread(), fwrite() or fgets() can be used to manipulate the contents of the stream.

Note: This function, and all manipulations of the large object, must be called and carried out within a transaction.

### Parameters

### Return Values

Returns a stream resource on success, or false on failure.

### Examples

Example #1 Pdo\Pgsql::lobOpen() example

Following on from the Pdo\Pgsql::lobCreate() example, this code snippet retrieves the large object from the database and outputs it to the browser.

```
<?php
$db = new Pdo\Pgsql('pgsql:dbname=test host=localhost', $user, $pass);
$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$db->beginTransaction();
$stmt = $db->prepare("SELECT oid FROM BLOBS WHERE ident = ?");
$stmt->execute(array($some_id));
$stmt->bindColumn('oid', $oid, PDO::PARAM_STR);
$stmt->fetch(PDO::FETCH_BOUND);
$stream = $db->pgsqlLOBOpen($oid, 'r');
header("Content-type: application/octet-stream");
fpassthru($stream);
?>
```

### See Also

- Pdo\Pgsql::lobCreate() - Creates a new large object
- Pdo\Pgsql::lobUnlink() - Deletes the large object
- pg_lo_create() - Create a large object
- pg_lo_open() - Open a large object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/pdo-pgsql.lobopen.php
