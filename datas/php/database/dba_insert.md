# dba_insert

Source: https://devdocs.io/php/function.dba-insert

(PHP 4, PHP 5, PHP 7, PHP 8)

dba_insert — Insert entry

### Description

```
dba_insert(string|array $key, string $value, Dba\Connection $dba): bool
```

dba_insert() inserts the entry described with key and value into the database.

### Parameters

The key of the entry to be inserted. If this key already exist in the database, this function will fail. Use dba_replace() if you need to replace an existent key.

The value to be inserted.

A Dba\Connection instance, returned by dba_open() or dba_popen().

### Return Values

Returns true on success or false on failure.

### Changelog

### See Also

- dba_exists() - Check whether key exists
- dba_delete() - Delete DBA entry specified by key
- dba_fetch() - Fetch data specified by key
- dba_replace() - Replace or insert entry

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.dba-insert.php
