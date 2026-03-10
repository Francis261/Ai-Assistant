# imap_set_quota

Source: https://devdocs.io/php/function.imap-set-quota

(PHP 4 >= 4.0.5, PHP 5, PHP 7, PHP 8)

imap_set_quota — Sets a quota for a given mailbox

### Description

```
imap_set_quota(IMAP\Connection $imap, string $quota_root, int $mailbox_size): bool
```

Sets an upper limit quota on a per mailbox basis.

### Parameters

An IMAP\Connection instance.

The mailbox to have a quota set. This should follow the IMAP standard format for a mailbox: user.name.

The maximum size (in KB) for the quota_root

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 imap_set_quota() example

```
<?php
$mbox = imap_open("{imap.example.org:143}", "mailadmin", "password");

if (!imap_set_quota($mbox, "user.kalowsky", 3000)) {
    echo "Error in setting quota\n";
    return;
}

imap_close($mbox);
?>
```

### Notes

This function is currently only available to users of the c-client2000 or greater library.

The given imap must be opened as the mail administrator, other wise this function will fail.

### See Also

- imap_open() - Open an IMAP stream to a mailbox
- imap_get_quota() - Retrieve the quota level settings, and usage statics per mailbox

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imap-set-quota.php
