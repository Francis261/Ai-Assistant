# ibase_restore

Source: https://devdocs.io/php/function.ibase-restore

(PHP 5, PHP 7 < 7.4.0)

ibase_restore — Initiates a restore task in the service manager and returns immediately

### Description

```
ibase_restore(
 resource $service_handle,
 string $source_file,
 string $dest_db,
 int $options = 0,
 bool $verbose = false
): mixed
```

This function passes the arguments to the (remote) database server. There it starts a new restore process. Therefore you won't get any responses.

### Parameters

A previously opened connection to the database server.

The absolute path on the server where the backup file is located.

The path to create the new database on the server. You can also use database alias.

Additional options to pass to the database server for restore. The options parameter can be a combination of the following constants: IBASE_RES_DEACTIVATE_IDX, IBASE_RES_NO_SHADOW, IBASE_RES_NO_VALIDITY, IBASE_RES_ONE_AT_A_TIME, IBASE_RES_REPLACE, IBASE_RES_CREATE, IBASE_RES_USE_ALL_SPACE, IBASE_PRP_PAGE_BUFFERS, IBASE_PRP_SWEEP_INTERVAL, IBASE_RES_CREATE. Read the section about Predefined Constants for further information.

Since the restore process is done on the database server, you don't have any chance to get its output. This argument is useless.

### Return Values

Returns true on success or false on failure.

Since the restore process is done on the (remote) server, this function just passes the arguments to it. While the arguments are legal, you won't get false.

### Examples

Example #1 ibase_restore() example

```
<?php

// Attach to database server by ip address and port
$service = ibase_service_attach ('10.1.11.200/3050', 'sysdba', 'masterkey');

// Start the restore process on database server
// Restore employee backup to the new emps.fdb database
// Don't use any special arguments
ibase_restore($service, '/srv/backup/employees.fbk', '/srv/firebird/emps.fdb');

// Free the attached connection
ibase_service_detach ($service);
?>
```

Example #2 ibase_restore() example with arguments

```
<?php

// Attach to database server by name and default port
$service = ibase_service_attach ('fb-server.contoso.local', 'sysdba', 'masterkey');

// Start the restore process on database server
// Restore to employee database using alias.
// Restore without indixes. Replace existing database.
ibase_restore($service, '/srv/backup/employees.fbk', 'employees.fdb', IBASE_RES_DEACTIVATE_IDX | IBASE_RES_REPLACE);

// Free the attached connection
ibase_service_detach ($service);
?>
```

### See Also

- ibase_backup() - Initiates a backup task in the service manager and returns immediately

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ibase-restore.php
