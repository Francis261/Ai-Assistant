# ldap_compare

Source: https://devdocs.io/php/function.ldap-compare

(PHP 4 >= 4.0.2, PHP 5, PHP 7, PHP 8)

ldap_compare — Compare value of attribute found in entry specified with DN

### Description

```
ldap_compare(
 LDAP\Connection $ldap,
 string $dn,
 string $attribute,
 string $value,
 ?array $controls = null
): bool|int
```

Compare value of attribute with value of same attribute in an LDAP directory entry.

### Parameters

An LDAP\Connection instance, returned by ldap_connect().

The distinguished name of an LDAP entity.

The attribute name.

The compared value.

Array of LDAP Controls to send with the request.

### Return Values

Returns true if value matches otherwise returns false. Returns -1 on error.

### Changelog

### Examples

The following example demonstrates how to check whether or not given password matches the one defined in DN specified entry.

Example #1 Complete example of password check

```
<?php

$ds=ldap_connect("localhost");  // assuming the LDAP server is on this host

if ($ds) {

    // bind
    if (ldap_bind($ds)) {

        // prepare data
        $dn = "cn=Matti Meikku, ou=My Unit, o=My Company, c=FI";
        $value = "secretpassword";
        $attr = "password";

        // compare value
        $r=ldap_compare($ds, $dn, $attr, $value);

        if ($r === -1) {
            echo "Error: " . ldap_error($ds);
        } elseif ($r === true) {
            echo "Password correct.";
        } elseif ($r === false) {
            echo "Wrong guess! Password incorrect.";
        }

    } else {
        echo "Unable to bind to LDAP server.";
    }

    ldap_close($ds);

} else {
    echo "Unable to connect to LDAP server.";
}
?>
```

### Notes

ldap_compare() can NOT be used to compare BINARY values!

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ldap-compare.php
