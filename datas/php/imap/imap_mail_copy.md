# imap_mail_copy

Source: https://devdocs.io/php/function.imap-mail-copy

(PHP 4, PHP 5, PHP 7, PHP 8)

imap_mail_copy — Copy specified messages to a mailbox

### Description

```
imap_mail_copy(
 IMAP\Connection $imap,
 string $message_nums,
 string $mailbox,
 int $flags = 0
): bool
```

Copies mail messages specified by message_nums to specified mailbox.

### Parameters

An IMAP\Connection instance.

message_nums is a range not just message numbers (as described in » RFC2060).

The mailbox name, see imap_open() for more information

Passing untrusted data to this parameter is insecure, unless imap.enable_insecure_rsh is disabled.

flags is a bitmask of one or more of

- CP_UID - the sequence numbers contain UIDS
- CP_MOVE - Delete the messages from the current mailbox after copying. If this flag is set, the function behaves identically to imap_mail_move().

### Return Values

Returns true on success or false on failure.

### Changelog

### See Also

- imap_mail_move() - Move specified messages to a mailbox

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imap-mail-copy.php
