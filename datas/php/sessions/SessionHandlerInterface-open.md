# SessionHandlerInterface::open

Source: https://devdocs.io/php/sessionhandlerinterface.open

(PHP 5 >= 5.4.0, PHP 7, PHP 8)

SessionHandlerInterface::open — Initialize session

### Description

```
public SessionHandlerInterface::open(string $path, string $name): bool
```

Re-initialize existing session, or creates a new one. Called when a session starts or when session_start() is invoked.

### Parameters

The path where to store/retrieve the session.

The session name.

### Return Values

The return value (usually true on success, false on failure). Note this value is returned internally to PHP for processing.

### See Also

- session_name() - Get and/or set the current session name
- The session.auto-start configuration directive.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/sessionhandlerinterface.open.php
