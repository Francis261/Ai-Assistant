# ldap_first_attribute

Source: https://devdocs.io/php/function.ldap-first-attribute

(PHP 4, PHP 5, PHP 7, PHP 8)

ldap_first_attribute — Return first attribute

### Description

```
ldap_first_attribute(LDAP\Connection $ldap, LDAP\ResultEntry $entry): string|false
```

Gets the first attribute in the given entry. Remaining attributes are retrieved by calling ldap_next_attribute() successively.

Similar to reading entries, attributes are also read one by one from a particular entry.

### Parameters

An LDAP\Connection instance, returned by ldap_connect().

An LDAP\ResultEntry instance.

### Return Values

Returns the first attribute in the entry on success and false on error.

### Changelog

### See Also

- ldap_next_attribute() - Get the next attribute in result
- ldap_get_attributes() - Get attributes from a search result entry

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ldap-first-attribute.php
