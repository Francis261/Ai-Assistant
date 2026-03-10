# ldap_mod_add

Source: https://devdocs.io/php/function.ldap-mod-add

(PHP 4, PHP 5, PHP 7, PHP 8)

ldap_mod_add — Add attribute values to current attributes

### Description

```
ldap_mod_add(
 LDAP\Connection $ldap,
 string $dn,
 array $entry,
 ?array $controls = null
): bool
```

Adds one or more attribute values to the specified dn. To add a whole new object see ldap_add() function.

### Parameters

An LDAP\Connection instance, returned by ldap_connect().

The distinguished name of an LDAP entity.

An associative array listing the attirbute values to add. If an attribute was not existing yet it will be added. If an attribute is existing you can only add values to it if it supports multiple values.

Array of LDAP Controls to send with the request.

### Return Values

Returns true on success or false on failure.

### Changelog

### Notes

Note: This function is binary-safe.

### See Also

- ldap_mod_add_ext() - Add attribute values to current attributes
- ldap_mod_del() - Delete attribute values from current attributes
- ldap_mod_replace() - Replace attribute values with new ones
- ldap_modify_batch() - Batch and execute modifications on an LDAP entry

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ldap-mod-add.php
