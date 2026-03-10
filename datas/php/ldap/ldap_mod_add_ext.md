# ldap_mod_add_ext

Source: https://devdocs.io/php/function.ldap-mod_add-ext

(PHP 7 >= 7.3.0, PHP 8)

ldap_mod_add_ext — Add attribute values to current attributes

### Description

```
ldap_mod_add_ext(
 LDAP\Connection $ldap,
 string $dn,
 array $entry,
 ?array $controls = null
): LDAP\Result|false
```

Does the same thing as ldap_mod_add() but returns an LDAP\Result instance to be parsed with ldap_parse_result().

### Parameters

See ldap_mod_add()

### Return Values

Returns an LDAP\Result instance, or false on failure.

### Changelog

### See Also

- ldap_mod_add() - Add attribute values to current attributes
- ldap_parse_result() - Extract information from result

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ldap-mod_add-ext.php
