# imap_msgno

Source: https://devdocs.io/php/function.imap-msgno

(PHP 4, PHP 5, PHP 7, PHP 8)

imap_msgno — Gets the message sequence number for the given UID

### Description

```
imap_msgno(IMAP\Connection $imap, int $message_uid): int
```

Returns the message sequence number for the given message_uid.

This function is the inverse of imap_uid().

### Parameters

An IMAP\Connection instance.

The message UID

### Return Values

Returns the message sequence number for the given message_uid.

### Changelog

### See Also

- imap_uid() - This function returns the UID for the given message sequence number

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imap-msgno.php
