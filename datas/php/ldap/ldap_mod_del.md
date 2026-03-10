# ldap_mod_del

Source: https://devdocs.io/php/function.ldap-mod-del

(PHP 4, PHP 5, PHP 7, PHP 8)

ldap_mod_del — Delete attribute values from current attributes

### Description

```
ldap_mod_del(
 LDAP\Connection $ldap,
 string $dn,
 array $entry,
 ?array $controls = null
): bool
```

Removes one or more attribute values from the specified dn. Object deletions are done by the ldap_delete() function.

### Parameters

An LDAP\Connection instance, returned by ldap_connect().

The distinguished name of an LDAP entity.

Array of LDAP Controls to send with the request.

### Return Values

Returns true on success or false on failure.

### Changelog

### See Also

- ldap_mod_del_ext() - Delete attribute values from current attributes
- ldap_mod_add() - Add attribute values to current attributes
- ldap_mod_replace() - Replace attribute values with new ones
- ldap_modify_batch() - Batch and execute modifications on an LDAP entry

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ldap-mod-del.php
