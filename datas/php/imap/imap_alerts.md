# imap_alerts

Source: https://devdocs.io/php/function.imap-alerts

(PHP 4, PHP 5, PHP 7, PHP 8)

imap_alerts — Returns all IMAP alert messages that have occurred

### Description

```
imap_alerts(): array|false
```

Returns all of the IMAP alert messages generated since the last imap_alerts() call, or the beginning of the page.

When imap_alerts() is called, the alert stack is subsequently cleared. The IMAP specification requires that these messages be passed to the user.

### Parameters

This function has no parameters.

### Return Values

Returns an array of all of the IMAP alert messages generated or false if no alert messages are available.

### See Also

- imap_errors() - Returns all of the IMAP errors that have occurred

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imap-alerts.php
