# imap_mail_move

Source: https://devdocs.io/php/function.imap-mail-move

(PHP 4, PHP 5, PHP 7, PHP 8)

imap_mail_move — Move specified messages to a mailbox

### Description

```
imap_mail_move(
 IMAP\Connection $imap,
 string $message_nums,
 string $mailbox,
 int $flags = 0
): bool
```

Moves mail messages specified by message_nums to the specified mailbox. Note that the mail messages are actually copied to the mailbox, and the original messages are flagged for deletion. That implies that the messages in mailbox are assigned new UIDs.

### Parameters

An IMAP\Connection instance.

message_nums is a range not just message numbers (as described in » RFC2060).

The mailbox name, see imap_open() for more information

Passing untrusted data to this parameter is insecure, unless imap.enable_insecure_rsh is disabled.

flags is a bitmask and may contain the single option:

- CP_UID - the sequence numbers contain UIDS

### Return Values

Returns true on success or false on failure.

### Changelog

### Notes

Note:

imap_mail_move() will flag the original mail with a delete flag, to successfully delete it a call to the imap_expunge() function must be made.

### See Also

- imap_mail_copy() - Copy specified messages to a mailbox

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imap-mail-move.php
