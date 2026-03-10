# ldap_parse_exop

Source: https://devdocs.io/php/function.ldap-parse-exop

(PHP 7 >= 7.2.0, PHP 8)

ldap_parse_exop — Parse result object from an LDAP extended operation

### Description

```
ldap_parse_exop(
 LDAP\Connection $ldap,
 LDAP\Result $result,
 string &$response_data = null,
 string &$response_oid = null
): bool
```

Parse LDAP extended operation data from result object result

### Parameters

An LDAP\Connection instance, returned by ldap_connect().

An LDAP\Result instance, returned by ldap_list() or ldap_search().

Will be filled by the response data.

Will be filled by the response OID.

### Return Values

Returns true on success or false on failure.

### Changelog

### See Also

- ldap_exop() - Performs an extended operation

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ldap-parse-exop.php
