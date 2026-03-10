# ldap_add_ext

Source: https://devdocs.io/php/function.ldap-add-ext

(PHP 7 >= 7.3.0, PHP 8)

ldap_add_ext — Add entries to LDAP directory

### Description

```
ldap_add_ext(
 LDAP\Connection $ldap,
 string $dn,
 array $entry,
 ?array $controls = null
): LDAP\Result|false
```

Does the same thing as ldap_add() but returns an LDAP\Result instance to be parsed with ldap_parse_result().

### Parameters

See ldap_add()

### Return Values

Returns an LDAP\Result instance, or false on failure.

### Changelog

### Notes

Note: This function is binary-safe.

### See Also

- ldap_add() - Add entries to LDAP directory
- ldap_parse_result() - Extract information from result

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ldap-add-ext.php
