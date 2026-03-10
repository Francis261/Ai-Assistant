# imap_setacl

Source: https://devdocs.io/php/function.imap-setacl

(PHP 4 >= 4.0.7, PHP 5, PHP 7, PHP 8)

imap_setacl — Sets the ACL for a given mailbox

### Description

```
imap_setacl(
 IMAP\Connection $imap,
 string $mailbox,
 string $user_id,
 string $rights
): bool
```

Sets the ACL for a giving mailbox.

### Parameters

An IMAP\Connection instance.

The mailbox name, see imap_open() for more information

Passing untrusted data to this parameter is insecure, unless imap.enable_insecure_rsh is disabled.

The user to give the rights to.

The rights to give to the user. Passing an empty string will delete acl.

### Return Values

Returns true on success or false on failure.

### Changelog

### Notes

This function is currently only available to users of the c-client2000 or greater library.

### See Also

- imap_getacl() - Gets the ACL for a given mailbox

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imap-setacl.php
