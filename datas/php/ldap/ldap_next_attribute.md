# ldap_next_attribute

Source: https://devdocs.io/php/function.ldap-next-attribute

(PHP 4, PHP 5, PHP 7, PHP 8)

ldap_next_attribute — Get the next attribute in result

### Description

```
ldap_next_attribute(LDAP\Connection $ldap, LDAP\ResultEntry $entry): string|false
```

Retrieves the attributes in an entry. The first call to ldap_next_attribute() is made with the entry returned from ldap_first_attribute().

### Parameters

An LDAP\Connection instance, returned by ldap_connect().

An LDAP\ResultEntry instance.

### Return Values

Returns the next attribute in an entry on success and false on error.

### Changelog

### See Also

- ldap_get_attributes() - Get attributes from a search result entry

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ldap-next-attribute.php
