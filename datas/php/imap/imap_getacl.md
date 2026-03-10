# imap_getacl

Source: https://devdocs.io/php/function.imap-getacl

(PHP 5, PHP 7, PHP 8)

imap_getacl — Gets the ACL for a given mailbox

### Description

```
imap_getacl(IMAP\Connection $imap, string $mailbox): array|false
```

Gets the ACL for a given mailbox.

### Parameters

An IMAP\Connection instance.

The mailbox name, see imap_open() for more information

Passing untrusted data to this parameter is insecure, unless imap.enable_insecure_rsh is disabled.

### Return Values

Returns an associative array of "folder" => "acl" pairs, or false on failure.

### Changelog

### Examples

Example #1 imap_getacl() example

```
<?php

print_r(imap_getacl($imap, 'user.joecool'));

?>
```

The above example will output something similar to:

```
Array
(
    [asubfolder] => lrswipcda
    [anothersubfolder] => lrswipcda
)
```

### Notes

This function is currently only available to users of the c-client2000 or greater library.

### See Also

- imap_setacl() - Sets the ACL for a given mailbox

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imap-getacl.php
