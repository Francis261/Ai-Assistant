# dba_fetch

Source: https://devdocs.io/php/function.dba-fetch

(PHP 4, PHP 5, PHP 7, PHP 8)

dba_fetch — Fetch data specified by key

### Description

```
dba_fetch(string|array $key, Dba\Connection $dba, int $skip = 0): string|false
```

Overloaded signature deprecated as of 8.3.0:

```
dba_fetch(string|array $key, int $skip, resource $dba): string
```

dba_fetch() fetches the data specified by key from the database specified with dba.

### Parameters

The key the data is specified by.

Note:

When working with inifiles this function accepts arrays as keys where index 0 is the group and index 1 is the value name. See: dba_key_split().

A Dba\Connection instance, returned by dba_open() or dba_popen().

The number of key-value pairs to ignore when using cdb databases. This value is ignored for all other databases which do not support multiple keys with the same name.

### Return Values

Returns the associated string if the key/data pair is found, false otherwise.

### Changelog

### See Also

- dba_exists() - Check whether key exists
- dba_delete() - Delete DBA entry specified by key
- dba_insert() - Insert entry
- dba_replace() - Replace or insert entry
- dba_key_split() - Splits a key in string representation into array representation

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.dba-fetch.php
