# ldap_mod_replace

Source: https://devdocs.io/php/function.ldap-mod-replace

(PHP 4, PHP 5, PHP 7, PHP 8)

ldap_mod_replace — Replace attribute values with new ones

### Description

```
ldap_mod_replace(
 LDAP\Connection $ldap,
 string $dn,
 array $entry,
 ?array $controls = null
): bool
```

Replaces one or more attributes from the specified dn. It may also add or remove attributes.

### Parameters

An LDAP\Connection instance, returned by ldap_connect().

The distinguished name of an LDAP entity.

An associative array listing the attributes to replace. Sending an empty array as value will remove the attribute, while sending an attribute not existing yet on this entry will add it.

Array of LDAP Controls to send with the request.

### Return Values

Returns true on success or false on failure.

### Changelog

### Notes

Note: This function is binary-safe.

### See Also

- ldap_mod_replace_ext() - Replace attribute values with new ones
- ldap_mod_del() - Delete attribute values from current attributes
- ldap_mod_add() - Add attribute values to current attributes
- ldap_modify_batch() - Batch and execute modifications on an LDAP entry

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ldap-mod-replace.php
