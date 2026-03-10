# ldap_sasl_bind

Source: https://devdocs.io/php/function.ldap-sasl-bind

(PHP 5, PHP 7, PHP 8)

ldap_sasl_bind — Bind to LDAP directory using SASL

### Description

```
ldap_sasl_bind(
 LDAP\Connection $ldap,
 ?string $dn = null,
 #[\SensitiveParameter] ?string $password = null,
 ?string $mech = null,
 ?string $realm = null,
 ?string $authc_id = null,
 ?string $authz_id = null,
 ?string $props = null
): bool
```

This function is currently not documented; only its argument list is available.

### Return Values

Returns true on success or false on failure.

### Changelog

### Notes

Note: Requirement ldap_sasl_bind() requires SASL support (sasl.h). Be sure --with-ldap-sasl is used when configuring PHP otherwise this function will be undefined.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ldap-sasl-bind.php
