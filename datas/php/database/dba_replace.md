# dba_replace

Source: https://devdocs.io/php/function.dba-replace

(PHP 4, PHP 5, PHP 7, PHP 8)

dba_replace — Replace or insert entry

### Description

```
dba_replace(string|array $key, string $value, Dba\Connection $dba): bool
```

dba_replace() replaces or inserts the entry described with key and value into the database specified by dba.

### Parameters

The key of the entry to be replaced.

The value to be replaced.

A Dba\Connection instance, returned by dba_open() or dba_popen().

### Return Values

Returns true on success or false on failure.

### Changelog

### See Also

- dba_exists() - Check whether key exists
- dba_delete() - Delete DBA entry specified by key
- dba_fetch() - Fetch data specified by key
- dba_insert() - Insert entry

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.dba-replace.php
