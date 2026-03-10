# SessionUpdateTimestampHandlerInterface::updateTimestamp

Source: https://devdocs.io/php/sessionupdatetimestamphandlerinterface.updatetimestamp

(PHP 7, PHP 8)

SessionUpdateTimestampHandlerInterface::updateTimestamp — Update timestamp

### Description

```
public SessionUpdateTimestampHandlerInterface::updateTimestamp(string $id, string $data): bool
```

Updates the last modification timestamp of the session. This function is automatically executed when a session is updated.

### Parameters

The session ID.

The session data.

### Return Values

Returns true if the timestamp was updated, false otherwise. Note that this value is returned internally to PHP for processing.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/sessionupdatetimestamphandlerinterface.updatetimestamp.php
