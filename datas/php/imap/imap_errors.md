# imap_errors

Source: https://devdocs.io/php/function.imap-errors

(PHP 4, PHP 5, PHP 7, PHP 8)

imap_errors — Returns all of the IMAP errors that have occurred

### Description

```
imap_errors(): array|false
```

Gets all of the IMAP errors (if any) that have occurred during this page request or since the error stack was reset.

When imap_errors() is called, the error stack is subsequently cleared.

### Parameters

This function has no parameters.

### Return Values

This function returns an array of all of the IMAP error messages generated since the last imap_errors() call, or the beginning of the page. Returns false if no error messages are available.

### See Also

- imap_last_error() - Gets the last IMAP error that occurred during this page request
- imap_alerts() - Returns all IMAP alert messages that have occurred

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imap-errors.php
