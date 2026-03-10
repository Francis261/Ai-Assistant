# ldap_rename

Source: https://devdocs.io/php/function.ldap-rename

(PHP 4 >= 4.0.5, PHP 5, PHP 7, PHP 8)

ldap_rename — Modify the name of an entry

### Description

```
ldap_rename(
 LDAP\Connection $ldap,
 string $dn,
 string $new_rdn,
 string $new_parent,
 bool $delete_old_rdn,
 ?array $controls = null
): bool
```

The entry specified by dn is renamed/moved.

### Parameters

An LDAP\Connection instance, returned by ldap_connect().

The distinguished name of an LDAP entity.

The new RDN.

The new parent/superior entry.

If true the old RDN value(s) is removed, else the old RDN value(s) is retained as non-distinguished values of the entry.

Array of LDAP Controls to send with the request.

### Return Values

Returns true on success or false on failure.

### Changelog

### Notes

Note:

This function currently only works with LDAPv3. You may have to use ldap_set_option() prior to binding to use LDAPv3. This function is only available when using OpenLDAP 2.x.x OR Netscape Directory SDK x.x.

### See Also

- ldap_rename_ext() - Modify the name of an entry
- ldap_modify() - Alias of ldap_mod_replace

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ldap-rename.php
