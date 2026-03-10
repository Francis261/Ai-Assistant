# ldap_add

Source: https://devdocs.io/php/function.ldap-add

(PHP 4, PHP 5, PHP 7, PHP 8)

ldap_add — Add entries to LDAP directory

### Description

```
ldap_add(
 LDAP\Connection $ldap,
 string $dn,
 array $entry,
 ?array $controls = null
): bool
```

Add entries in the LDAP directory.

### Parameters

An LDAP\Connection instance, returned by ldap_connect().

The distinguished name of an LDAP entity.

An array that specifies the information about the entry. The values in the entries are indexed by individual attributes. In case of multiple values for an attribute, they are indexed using integers starting with 0.

```
<?php
$entry["attribute1"] = "value";
$entry["attribute2"][0] = "value1";
$entry["attribute2"][1] = "value2";
?>
```

Array of LDAP Controls to send with the request.

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 Complete example with authenticated bind

```
<?php
$ds = ldap_connect("localhost");  // assuming the LDAP server is on this host

if ($ds) {
    // bind with appropriate dn to give update access
    $r = ldap_bind($ds, "cn=root, o=My Company, c=US", "secret");

    // prepare data
    $info["cn"] = "John Jones";
    $info["sn"] = "Jones";
    $info["objectclass"] = "person";

    // add data to directory
    $r = ldap_add($ds, "cn=John Jones, o=My Company, c=US", $info);

    ldap_close($ds);
} else {
    echo "Unable to connect to LDAP server";
}
?>
```

### Notes

Note: This function is binary-safe.

### See Also

- ldap_add_ext() - Add entries to LDAP directory
- ldap_delete() - Delete an entry from a directory

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ldap-add.php
