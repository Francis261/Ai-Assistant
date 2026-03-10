# ldap_get_values_len

Source: https://devdocs.io/php/function.ldap-get-values-len

(PHP 4, PHP 5, PHP 7, PHP 8)

ldap_get_values_len — Get all binary values from a result entry

### Description

```
ldap_get_values_len(LDAP\Connection $ldap, LDAP\ResultEntry $entry, string $attribute): array|false
```

Reads all the values of the attribute in the entry in the result.

This function is used exactly like ldap_get_values() except that it handles binary data and not string data.

### Parameters

An LDAP\Connection instance, returned by ldap_connect().

An LDAP\ResultEntry instance.

### Return Values

Returns an array of values for the attribute on success and false on error. Individual values are accessed by integer index in the array. The first index is 0. The number of values can be found by indexing "count" in the resultant array.

### Changelog

### See Also

- ldap_get_values() - Get all values from a result entry

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ldap-get-values-len.php
