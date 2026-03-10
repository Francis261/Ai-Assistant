# ldap_exop_whoami

Source: https://devdocs.io/php/function.ldap-exop-whoami

(PHP 7 >= 7.2.0, PHP 8)

ldap_exop_whoami — WHOAMI extended operation helper

### Description

```
ldap_exop_whoami(LDAP\Connection $ldap): string|false
```

Performs a WHOAMI extended operation and returns the data.

### Parameters

An LDAP\Connection instance, returned by ldap_connect().

### Return Values

The data returned by the server, or false on error.

### Changelog

### See Also

- ldap_exop() - Performs an extended operation

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ldap-exop-whoami.php
