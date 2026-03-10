# dba_exists

Source: https://devdocs.io/php/function.dba-exists

(PHP 4, PHP 5, PHP 7, PHP 8)

dba_exists — Check whether key exists

### Description

```
dba_exists(string|array $key, Dba\Connection $dba): bool
```

dba_exists() checks whether the specified key exists in the database.

### Parameters

The key the check is performed for.

A Dba\Connection instance, returned by dba_open() or dba_popen().

### Return Values

Returns true if the key exists, false otherwise.

### Changelog

### See Also

- dba_delete() - Delete DBA entry specified by key
- dba_fetch() - Fetch data specified by key
- dba_insert() - Insert entry
- dba_replace() - Replace or insert entry

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.dba-exists.php
