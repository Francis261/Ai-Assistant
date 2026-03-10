# imap_uid

Source: https://devdocs.io/php/function.imap-uid

(PHP 4, PHP 5, PHP 7, PHP 8)

imap_uid — This function returns the UID for the given message sequence number

### Description

```
imap_uid(IMAP\Connection $imap, int $message_num): int|false
```

This function returns the UID for the given message sequence number. An UID is a unique identifier that will not change over time while a message sequence number may change whenever the content of the mailbox changes.

This function is the inverse of imap_msgno().

### Parameters

An IMAP\Connection instance.

The message number.

### Return Values

The UID of the given message.

### Changelog

### Notes

Note:

This function is not supported by POP3 mailboxes.

### See Also

- imap_msgno() - Gets the message sequence number for the given UID

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imap-uid.php
