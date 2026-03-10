# SessionIdInterface::create_sid

Source: https://devdocs.io/php/sessionidinterface.create-sid

(PHP 5 >= 5.5.1, PHP 7, PHP 8)

SessionIdInterface::create_sid — Create session ID

### Description

```
public SessionIdInterface::create_sid(): string
```

Creates a new session ID.This function is automatically executed when a new session ID needs to be created.

### Parameters

This function has no parameters.

### Return Values

The new session ID. Note that this value is returned internally to PHP for processing.

### See Also

- SessionHandler::create_sid() - Return a new session ID

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/sessionidinterface.create-sid.php
