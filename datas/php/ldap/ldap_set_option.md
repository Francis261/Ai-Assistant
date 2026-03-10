# ldap_set_option

Source: https://devdocs.io/php/function.ldap-set-option

(PHP 4 >= 4.0.4, PHP 5, PHP 7, PHP 8)

ldap_set_option — Set the value of the given option

### Description

```
ldap_set_option(?LDAP\Connection $ldap, int $option, array|string|int|bool $value): bool
```

Sets the value of the specified option to be value.

### Parameters

Either an LDAP\Connection instance, returned by ldap_connect(), to set the option for that connection, or null to set the option globally.

The parameter option can be one of:

LDAP_OPT_SERVER_CONTROLS and LDAP_OPT_CLIENT_CONTROLS require a list of controls, this means that the value must be an array of controls. A control consists of an oid identifying the control, an optional value, and an optional flag for criticality. In PHP a control is given by an array containing an element with the key oid and string value, and two optional elements. The optional elements are key value with string value and key iscritical with boolean value. iscritical defaults to false if not supplied. See » draft-ietf-ldapext-ldap-c-api-xx.txt for details. See also the second example below.

Note:

All TLS options must be set globally before ldap_connect() for ldaps connection or for the connection before ldap_start_tls().

The new value for the specified option.

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 Set protocol version

```
<?php
// $ds is a valid LDAP\Connection instance for a directory server
if (ldap_set_option($ds, LDAP_OPT_PROTOCOL_VERSION, 3)) {
    echo "Using LDAPv3";
} else {
    echo "Failed to set protocol version to 3";
}
?>
```

Example #2 Set server controls

```
<?php
// $ds is a valid LDAP\Connection instance for a directory server
// control with no value
$ctrl1 = array("oid" => "1.2.752.58.10.1", "iscritical" => true);
// iscritical defaults to FALSE
$ctrl2 = array("oid" => "1.2.752.58.1.10", "value" => "magic");
// try to set both controls
if (!ldap_set_option($ds, LDAP_OPT_SERVER_CONTROLS, array($ctrl1, $ctrl2))) {
    echo "Failed to set server controls";
}
?>
```

### Notes

Note:

This function is only available when using OpenLDAP 2.x.x OR Netscape Directory SDK x.x.

### See Also

- ldap_get_option() - Get the current value for given option

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ldap-set-option.php
