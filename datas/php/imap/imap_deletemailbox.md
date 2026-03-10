# imap_deletemailbox

Source: https://devdocs.io/php/function.imap-deletemailbox

(PHP 4, PHP 5, PHP 7, PHP 8)

imap_deletemailbox — Delete a mailbox

### Description

```
imap_deletemailbox(IMAP\Connection $imap, string $mailbox): bool
```

Deletes the specified mailbox.

### Parameters

An IMAP\Connection instance.

The mailbox name, see imap_open() for more information

Passing untrusted data to this parameter is insecure, unless imap.enable_insecure_rsh is disabled.

### Return Values

Returns true on success or false on failure.

### Changelog

### See Also

- imap_createmailbox() - Create a new mailbox
- imap_renamemailbox() - Rename an old mailbox to new mailbox
- imap_open() - Open an IMAP stream to a mailbox for the format of mbox

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imap-deletemailbox.php
