# ldap_count_references

Source: https://devdocs.io/php/function.ldap-count-references

(PHP 8)

ldap_count_references — Counts the number of references in a search result

### Description

```
ldap_count_references(LDAP\Connection $ldap, LDAP\Result $result): int
```

Counts the number of references in a search result.

### Parameters

An LDAP\Connection instance, returned by ldap_connect().

An LDAP\Result instance, returned by ldap_list() or ldap_search().

### Return Values

Returns the number of references in a search result.

### Changelog

### See Also

- ldap_connect() - Connect to an LDAP server

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ldap-count-references.php
