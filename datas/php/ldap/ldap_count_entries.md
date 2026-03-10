# ldap_count_entries

Source: https://devdocs.io/php/function.ldap-count-entries

(PHP 4, PHP 5, PHP 7, PHP 8)

ldap_count_entries — Count the number of entries in a search

### Description

```
ldap_count_entries(LDAP\Connection $ldap, LDAP\Result $result): int
```

Returns the number of entries stored in the result of previous search operations.

### Parameters

An LDAP\Connection instance, returned by ldap_connect().

An LDAP\Result instance, returned by ldap_list() or ldap_search().

### Return Values

Returns number of entries in the result, or false on failure.

### Changelog

### Examples

Example #1 ldap_count_entries() example

Retrieve number of entries in the result.

```
// $ds is a valid LDAP\Connection instance for a directory server

     $dn        = 'ou=example,dc=org';
     $filter    = '(|(sn=Doe*)(givenname=John*))';
     $justthese = array('ou', 'sn', 'givenname', 'mail');

     $sr = ldap_search($ds, $dn, $filter, $justthese);

     var_dump(ldap_count_entries($ds, $sr));
```

The above example will output something similar to:

```
int(1)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ldap-count-entries.php
