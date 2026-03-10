# SessionHandlerInterface::destroy

Source: https://devdocs.io/php/sessionhandlerinterface.destroy

(PHP 5 >= 5.4.0, PHP 7, PHP 8)

SessionHandlerInterface::destroy — Destroy a session

### Description

```
public SessionHandlerInterface::destroy(string $id): bool
```

Destroys a session. Called by session_regenerate_id() (with $destroy = true), session_destroy() and when session_decode() fails.

### Parameters

The session ID being destroyed.

### Return Values

The return value (usually true on success, false on failure). Note this value is returned internally to PHP for processing.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/sessionhandlerinterface.destroy.php
