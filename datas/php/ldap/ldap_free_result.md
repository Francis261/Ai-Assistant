# ldap_free_result

Source: https://devdocs.io/php/function.ldap-free-result

(PHP 4, PHP 5, PHP 7, PHP 8)

ldap_free_result — Free result memory

### Description

```
ldap_free_result(LDAP\Result $result): bool
```

Frees up the memory allocated internally to store the result. All result memory will be automatically freed when the script terminates.

Typically all the memory allocated for the LDAP result gets freed at the end of the script. In case the script is making successive searches which return large result sets, ldap_free_result() could be called to keep the runtime memory usage by the script low.

### Parameters

An LDAP\Result instance, returned by ldap_list() or ldap_search().

### Return Values

Returns true on success or false on failure.

### Changelog

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ldap-free-result.php
