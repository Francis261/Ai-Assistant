# imap_expunge

Source: https://devdocs.io/php/function.imap-expunge

(PHP 4, PHP 5, PHP 7, PHP 8)

imap_expunge — Delete all messages marked for deletion

### Description

```
imap_expunge(IMAP\Connection $imap): true
```

Deletes all the messages marked for deletion by imap_delete(), imap_mail_move(), or imap_setflag_full().

### Parameters

An IMAP\Connection instance.

### Return Values

Always returns true.

### Changelog

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imap-expunge.php
