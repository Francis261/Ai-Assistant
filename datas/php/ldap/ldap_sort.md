# ldap_sort

Source: https://devdocs.io/php/function.ldap-sort

(PHP 4 >= 4.2.0, PHP 5, PHP 7)

ldap_sort — Sort LDAP result entries on the client side

This function has been DEPRECATED as of PHP 7.0.0 and REMOVED as of PHP 8.0.0. Relying on this function is highly discouraged.

### Description

```
ldap_sort(resource $link, resource $result, string $sortfilter): bool
```

Sort the result of a LDAP search, returned by ldap_search().

As this function sorts the returned values on the client side it is possible that you might not get the expected results in case you reach the sizelimit either of the server or defined within ldap_search().

### Parameters

An LDAP resource, returned by ldap_connect().

An search result identifier, returned by ldap_search().

The attribute to use as a key in the sort.

### Return Values

No value is returned.

### Changelog

### Examples

Sorting the result of a search.

Example #1 LDAP sort

```
<?php
     // $ds is a valid link identifier (see ldap_connect)

     $dn        = 'ou=example,dc=org';
     $filter    = '(|(sn=Doe*)(givenname=John*))';
     $justthese = array('ou', 'sn', 'givenname', 'mail');

     $sr = ldap_search($ds, $dn, $filter, $justthese);

     // Sort
     ldap_sort($ds, $sr, 'sn');

     // Retrieving the data
     $info = ldap_get_entries($ds, $sr);
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ldap-sort.php
