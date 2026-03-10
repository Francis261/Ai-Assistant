# ldap_get_option

Source: https://devdocs.io/php/function.ldap-get-option

(PHP 4 >= 4.0.4, PHP 5, PHP 7, PHP 8)

ldap_get_option — Get the current value for given option

### Description

```
ldap_get_option(LDAP\Connection $ldap, int $option, array|string|int &$value = null): bool
```

Sets value to the value of the specified option.

### Parameters

An LDAP\Connection instance, returned by ldap_connect().

The parameter option can be one of:

This will be set to the option value.

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 Check protocol version

```
<?php
// $ds is a valid LDAP\Connection instance for a directory server
if (ldap_get_option($ds, LDAP_OPT_PROTOCOL_VERSION, $version)) {
    echo "Using protocol version $version\n";
} else {
    echo "Unable to determine protocol version\n";
}
?>
```

### Notes

Note:

This function is only available when using OpenLDAP 2.x.x OR Netscape Directory SDK x.x.

### See Also

- ldap_set_option() - Set the value of the given option

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ldap-get-option.php
