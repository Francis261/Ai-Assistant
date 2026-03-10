# ldap_rename_ext

Source: https://devdocs.io/php/function.ldap-rename-ext

(PHP 7 >= 7.3.0, PHP 8)

ldap_rename_ext — Modify the name of an entry

### Description

```
ldap_rename_ext(
 LDAP\Connection $ldap,
 string $dn,
 string $new_rdn,
 string $new_parent,
 bool $delete_old_rdn,
 ?array $controls = null
): LDAP\Result|false
```

Does the same thing as ldap_rename() but returns an LDAP\Result instance to be parsed with ldap_parse_result().

### Parameters

See ldap_rename()

### Return Values

Returns an LDAP\Result instance, or false on failure.

### Changelog

### See Also

- ldap_rename() - Modify the name of an entry
- ldap_parse_result() - Extract information from result

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ldap-rename-ext.php
