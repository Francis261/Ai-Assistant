# ldap_bind_ext

Source: https://devdocs.io/php/function.ldap-bind-ext

(PHP 7 >= 7.3.0, PHP 8)

ldap_bind_ext — Bind to LDAP directory

### Description

```
ldap_bind_ext(
 LDAP\Connection $ldap,
 ?string $dn = null,
 #[\SensitiveParameter] ?string $password = null,
 ?array $controls = null
): LDAP\Result|false
```

Does the same thing as ldap_bind() but returns an LDAP\Result instance to be parsed with ldap_parse_result().

### Parameters

See ldap_bind()

### Return Values

Returns an LDAP\Result instance, or false on failure.

### Changelog

### See Also

- ldap_bind() - Bind to LDAP directory
- ldap_parse_result() - Extract information from result

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ldap-bind-ext.php
