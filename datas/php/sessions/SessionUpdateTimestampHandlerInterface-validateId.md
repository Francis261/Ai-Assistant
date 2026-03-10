# SessionUpdateTimestampHandlerInterface::validateId

Source: https://devdocs.io/php/sessionupdatetimestamphandlerinterface.validateid

(PHP 7, PHP 8)

SessionUpdateTimestampHandlerInterface::validateId — Validate ID

### Description

```
public SessionUpdateTimestampHandlerInterface::validateId(string $id): bool
```

Validates a given session ID. A session ID is valid, if a session with that ID already exists. This function is automatically executed when a session is to be started, a session ID is supplied and session.use_strict_mode is enabled.

### Parameters

The session ID.

### Return Values

Returns true for valid ID, false otherwise. Note that this value is returned internally to PHP for processing.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/sessionupdatetimestamphandlerinterface.validateid.php
