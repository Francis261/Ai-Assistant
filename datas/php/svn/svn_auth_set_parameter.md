# svn_auth_set_parameter

Source: https://devdocs.io/php/function.svn-auth-set-parameter

(PECL svn >= 0.1.0)

svn_auth_set_parameter — Sets an authentication parameter

### Description

```
svn_auth_set_parameter(string $key, string $value): void
```

Sets authentication parameter at key to value. For a list of valid keys and their meanings, consult the authentication constants list.

### Parameters

String key name. Use the authentication constants defined by this extension to specify a key.

String value to set to parameter at key. Format of value varies with the parameter.

### Return Values

No value is returned.

### Examples

Example #1 Default authentication example

This example configures SVN so that the default username to use is 'Bob' and the default password is 'abc123':

```
<?php
svn_auth_set_parameter(SVN_AUTH_PARAM_DEFAULT_USERNAME, 'Bob');
svn_auth_set_parameter(SVN_AUTH_PARAM_DEFAULT_PASSWORD, 'abc123');
?>
```

### Notes

This function is EXPERIMENTAL. The behaviour of this function, its name, and surrounding documentation may change without notice in a future release of PHP. This function should be used at your own risk.

### See Also

- svn_auth_get_parameter() - Retrieves authentication parameter
- Authentication constants

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.svn-auth-set-parameter.php
