# imap_last_error

Source: https://devdocs.io/php/function.imap-last-error

(PHP 4, PHP 5, PHP 7, PHP 8)

imap_last_error — Gets the last IMAP error that occurred during this page request

### Description

```
imap_last_error(): string|false
```

Gets the full text of the last IMAP error message that occurred on the current page. The error stack is untouched; calling imap_last_error() subsequently, with no intervening errors, will return the same error.

### Parameters

This function has no parameters.

### Return Values

Returns the full text of the last IMAP error message that occurred on the current page. Returns false if no error messages are available.

### See Also

- imap_errors() - Returns all of the IMAP errors that have occurred

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imap-last-error.php
