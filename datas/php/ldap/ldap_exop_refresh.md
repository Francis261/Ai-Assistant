# ldap_exop_refresh

Source: https://devdocs.io/php/function.ldap-exop-refresh

(PHP 7 >= 7.3.0, PHP 8)

ldap_exop_refresh — Refresh extended operation helper

### Description

```
ldap_exop_refresh(LDAP\Connection $ldap, string $dn, int $ttl): int|false
```

Performs a Refresh extended operation and returns the data.

### Parameters

An LDAP\Connection instance, returned by ldap_connect().

dn of the entry to refresh.

Time in seconds (between 1 and 31557600) that the client requests that the entry exists in the directory before being automatically removed.

### Return Values

From RFC: The responseTtl field is the time in seconds which the server chooses to have as the time-to-live field for that entry. It must not be any smaller than that which the client requested, and it may be larger. However, to allow servers to maintain a relatively accurate directory, and to prevent clients from abusing the dynamic extensions, servers are permitted to shorten a client-requested time-to-live value, down to a minimum of 86400 seconds (one day). false will be returned on error.

### Changelog

### See Also

- ldap_exop() - Performs an extended operation

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ldap-exop-refresh.php
