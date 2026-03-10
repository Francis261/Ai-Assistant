# ldap_delete

Source: https://devdocs.io/php/function.ldap-delete

(PHP 4, PHP 5, PHP 7, PHP 8)

ldap_delete — Delete an entry from a directory

### Description

```
ldap_delete(LDAP\Connection $ldap, string $dn, ?array $controls = null): bool
```

Deletes a particular entry in LDAP directory.

### Parameters

An LDAP\Connection instance, returned by ldap_connect().

The distinguished name of an LDAP entity.

Array of LDAP Controls to send with the request.

### Return Values

Returns true on success or false on failure.

### Changelog

### See Also

- ldap_delete_ext() - Delete an entry from a directory
- ldap_add() - Add entries to LDAP directory

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ldap-delete.php
