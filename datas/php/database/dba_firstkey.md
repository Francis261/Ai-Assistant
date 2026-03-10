# dba_firstkey

Source: https://devdocs.io/php/function.dba-firstkey

(PHP 4, PHP 5, PHP 7, PHP 8)

dba_firstkey — Fetch first key

### Description

```
dba_firstkey(Dba\Connection $dba): string|false
```

dba_firstkey() returns the first key of the database and resets the internal key pointer. This permits a linear search through the whole database.

### Parameters

A Dba\Connection instance, returned by dba_open() or dba_popen().

### Return Values

Returns the key on success or false on failure.

### Changelog

### See Also

- dba_nextkey() - Fetch next key
- dba_key_split() - Splits a key in string representation into array representation
- Example 2 in the DBA examples

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.dba-firstkey.php
