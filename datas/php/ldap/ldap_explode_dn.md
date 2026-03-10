# ldap_explode_dn

Source: https://devdocs.io/php/function.ldap-explode-dn

(PHP 4, PHP 5, PHP 7, PHP 8)

ldap_explode_dn — Splits DN into its component parts

### Description

```
ldap_explode_dn(string $dn, int $with_attrib): array|false
```

Splits the DN returned by ldap_get_dn() and breaks it up into its component parts. Each part is known as Relative Distinguished Name, or RDN.

### Parameters

The distinguished name of an LDAP entity.

Used to request if the RDNs are returned with only values or their attributes as well. To get RDNs with the attributes (i.e. in attribute=value format) set with_attrib to 0 and to get only values set it to 1.

### Return Values

Returns an array of all DN components, or false on failure. The first element in the array has count key and represents the number of returned values, next elements are numerically indexed DN components.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ldap-explode-dn.php
