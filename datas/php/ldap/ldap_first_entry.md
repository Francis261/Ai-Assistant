# ldap_first_entry

Source: https://devdocs.io/php/function.ldap-first-entry

(PHP 4, PHP 5, PHP 7, PHP 8)

ldap_first_entry — Return first result id

### Description

```
ldap_first_entry(LDAP\Connection $ldap, LDAP\Result $result): LDAP\ResultEntry|false
```

Returns the entry identifier for first entry in the result. This entry identifier is then supplied to ldap_next_entry() routine to get successive entries from the result.

Entries in the LDAP result are read sequentially using the ldap_first_entry() and ldap_next_entry() functions.

### Parameters

An LDAP\Connection instance, returned by ldap_connect().

An LDAP\Result instance, returned by ldap_list() or ldap_search().

### Return Values

Returns an LDAP\ResultEntry instance, or false on failure.

### Changelog

### See Also

- ldap_get_entries() - Get all result entries

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ldap-first-entry.php
