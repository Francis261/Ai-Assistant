# svn_auth_get_parameter

Source: https://devdocs.io/php/function.svn-auth-get-parameter

(PECL svn >= 0.1.0)

svn_auth_get_parameter — Retrieves authentication parameter

### Description

```
svn_auth_get_parameter(string $key): string
```

Retrieves authentication parameter at key. For a list of valid keys and their meanings, consult the authentication constants list.

### Parameters

String key name. Use the authentication constants defined by this extension to specify a key.

### Return Values

Returns the string value of the parameter at key; returns null if parameter does not exist.

### Notes

This function is EXPERIMENTAL. The behaviour of this function, its name, and surrounding documentation may change without notice in a future release of PHP. This function should be used at your own risk.

### See Also

- svn_auth_set_parameter() - Sets an authentication parameter
- Authentication constants

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.svn-auth-get-parameter.php
