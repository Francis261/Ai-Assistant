# dba_key_split

Source: https://devdocs.io/php/function.dba-key-split

(PHP 5, PHP 7, PHP 8)

dba_key_split — Splits a key in string representation into array representation

### Description

```
dba_key_split(string|false|null $key): array|false
```

dba_key_split() splits a key (string representation) into an array representation.

### Parameters

The key in string representation.

### Return Values

Returns an array of the form array(0 => group, 1 => 
 value_name). This function will return false if key is null or false.

### Changelog

### See Also

- dba_firstkey() - Fetch first key
- dba_nextkey() - Fetch next key
- dba_fetch() - Fetch data specified by key

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.dba-key-split.php
