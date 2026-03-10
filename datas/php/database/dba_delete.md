# dba_delete

Source: https://devdocs.io/php/function.dba-delete

(PHP 4, PHP 5, PHP 7, PHP 8)

dba_delete — Delete DBA entry specified by key

### Description

```
dba_delete(string|array $key, Dba\Connection $dba): bool
```

dba_delete() deletes the specified entry from the database.

### Parameters

The key of the entry which is deleted.

A Dba\Connection instance, returned by dba_open() or dba_popen().

### Return Values

Returns true on success or false on failure.

### Changelog

### See Also

- dba_exists() - Check whether key exists
- dba_fetch() - Fetch data specified by key
- dba_insert() - Insert entry
- dba_replace() - Replace or insert entry

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.dba-delete.php
