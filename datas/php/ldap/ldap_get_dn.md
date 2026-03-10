# ldap_get_dn

Source: https://devdocs.io/php/function.ldap-get-dn

(PHP 4, PHP 5, PHP 7, PHP 8)

ldap_get_dn — Get the DN of a result entry

### Description

```
ldap_get_dn(LDAP\Connection $ldap, LDAP\ResultEntry $entry): string|false
```

Finds out the DN of an entry in the result.

### Parameters

An LDAP\Connection instance, returned by ldap_connect().

An LDAP\ResultEntry instance.

### Return Values

Returns the DN of the result entry and false on error.

### Changelog

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ldap-get-dn.php
