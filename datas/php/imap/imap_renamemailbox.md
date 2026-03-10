# imap_renamemailbox

Source: https://devdocs.io/php/function.imap-renamemailbox

(PHP 4, PHP 5, PHP 7, PHP 8)

imap_renamemailbox — Rename an old mailbox to new mailbox

### Description

```
imap_renamemailbox(IMAP\Connection $imap, string $from, string $to): bool
```

This function renames on old mailbox to new mailbox (see imap_open() for the format of mbox names).

### Parameters

An IMAP\Connection instance.

The old mailbox name, see imap_open() for more information

Passing untrusted data to this parameter is insecure, unless imap.enable_insecure_rsh is disabled.

The new mailbox name, see imap_open() for more information

Passing untrusted data to this parameter is insecure, unless imap.enable_insecure_rsh is disabled.

### Return Values

Returns true on success or false on failure.

### Changelog

### See Also

- imap_createmailbox() - Create a new mailbox
- imap_deletemailbox() - Delete a mailbox

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imap-renamemailbox.php
