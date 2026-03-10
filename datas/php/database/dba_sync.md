# dba_sync

Source: https://devdocs.io/php/function.dba-sync

(PHP 4, PHP 5, PHP 7, PHP 8)

dba_sync — Synchronize database

### Description

```
dba_sync(Dba\Connection $dba): bool
```

dba_sync() synchronizes the database. This will probably trigger a physical write to the disk, if supported.

### Parameters

A Dba\Connection instance, returned by dba_open() or dba_popen().

### Return Values

Returns true on success or false on failure.

### Changelog

### See Also

- dba_optimize() - Optimize database

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.dba-sync.php
