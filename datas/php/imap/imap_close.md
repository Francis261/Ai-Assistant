# imap_close

Source: https://devdocs.io/php/function.imap-close

(PHP 4, PHP 5, PHP 7, PHP 8)

imap_close — Close an IMAP stream

### Description

```
imap_close(IMAP\Connection $imap, int $flags = 0): true
```

Closes the imap stream.

### Parameters

An IMAP\Connection instance.

If set to CL_EXPUNGE, the function will silently expunge the mailbox before closing, removing all messages marked for deletion. You can achieve the same thing by using imap_expunge()

### Return Values

Always returns true.

### Errors/Exceptions

Throws a ValueError if flags is invalid.

### Changelog

### See Also

- imap_open() - Open an IMAP stream to a mailbox

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imap-close.php
