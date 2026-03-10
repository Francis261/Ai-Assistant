# imap_timeout

Source: https://devdocs.io/php/function.imap-timeout

(PHP 4 >= 4.3.3, PHP 5, PHP 7, PHP 8)

imap_timeout — Set or fetch imap timeout

### Description

```
imap_timeout(int $timeout_type, int $timeout = -1): int|bool
```

Sets or fetches the imap timeout.

### Parameters

One of the following: IMAP_OPENTIMEOUT, IMAP_READTIMEOUT, IMAP_WRITETIMEOUT, or IMAP_CLOSETIMEOUT.

The timeout, in seconds.

### Return Values

If the timeout parameter is set, this function returns true on success and false on failure.

If timeout is not provided or evaluates to -1, the current timeout value of timeout_type is returned as an integer.

### Examples

Example #1 imap_timeout() example

```
<?php

echo "The current read timeout is " . imap_timeout(IMAP_READTIMEOUT) . "\n";

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imap-timeout.php
