# imap_undelete

Source: https://devdocs.io/php/function.imap-undelete

(PHP 4, PHP 5, PHP 7, PHP 8)

imap_undelete — Unmark the message which is marked deleted

### Description

```
imap_undelete(IMAP\Connection $imap, string $message_nums, int $flags = 0): true
```

Removes the deletion flag for a specified message, which is set by imap_delete() or imap_mail_move().

### Parameters

An IMAP\Connection instance.

A string representing one or more messages in IMAP4-style sequence format ("n", "n:m", or combination of these delimited by commas).

### Return Values

Always returns true.

### Changelog

### See Also

- imap_delete() - Mark a message for deletion from current mailbox
- imap_mail_move() - Move specified messages to a mailbox

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imap-undelete.php
