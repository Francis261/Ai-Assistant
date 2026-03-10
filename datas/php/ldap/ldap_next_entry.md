# ldap_next_entry

Source: https://devdocs.io/php/function.ldap-next-entry

(PHP 4, PHP 5, PHP 7, PHP 8)

ldap_next_entry — Get next result entry

### Description

```
ldap_next_entry(LDAP\Connection $ldap, LDAP\ResultEntry $entry): LDAP\ResultEntry|false
```

Retrieve the entries stored in the result. Successive calls to the ldap_next_entry() return entries one by one till there are no more entries. The first call to ldap_next_entry() is made after the call to ldap_first_entry() with the entry as returned from the ldap_first_entry().

### Parameters

An LDAP\Connection instance, returned by ldap_connect().

An LDAP\ResultEntry instance.

### Return Values

Returns an LDAP\ResultEntry instance for the next entry in the result whose entries are being read starting with ldap_first_entry(). If there are no more entries in the result then it returns false.

### Changelog

### See Also

- ldap_get_entries() - Get all result entries

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ldap-next-entry.php
