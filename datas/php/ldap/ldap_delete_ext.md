# ldap_delete_ext

Source: https://devdocs.io/php/function.ldap-delete-ext

(PHP 7 >= 7.3.0, PHP 8)

ldap_delete_ext — Delete an entry from a directory

### Description

```
ldap_delete_ext(LDAP\Connection $ldap, string $dn, ?array $controls = null): LDAP\Result|false
```

Does the same thing as ldap_delete() but returns an LDAP\Result instance to be parsed with ldap_parse_result().

### Parameters

See ldap_delete()

### Return Values

Returns an LDAP\Result instance, or false on failure.

### Changelog

### See Also

- ldap_delete() - Delete an entry from a directory
- ldap_parse_result() - Extract information from result

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ldap-delete-ext.php
