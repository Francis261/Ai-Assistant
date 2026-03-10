# SessionHandlerInterface::gc

Source: https://devdocs.io/php/sessionhandlerinterface.gc

(PHP 5 >= 5.4.0, PHP 7, PHP 8)

SessionHandlerInterface::gc — Cleanup old sessions

### Description

```
public SessionHandlerInterface::gc(int $max_lifetime): int|false
```

Cleans up expired sessions. Called by session_start(), based on session.gc_divisor, session.gc_probability and session.gc_maxlifetime settings.

### Parameters

Sessions that have not updated for the last max_lifetime seconds will be removed.

### Return Values

Returns the number of deleted sessions on success, or false on failure. Note this value is returned internally to PHP for processing.

### Changelog

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/sessionhandlerinterface.gc.php
