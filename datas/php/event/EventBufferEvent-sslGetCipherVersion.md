# EventBufferEvent::sslGetCipherVersion

Source: https://devdocs.io/php/eventbufferevent.sslgetcipherversion

(PECL event >= 1.10.0)

EventBufferEvent::sslGetCipherVersion — Returns version of cipher used by current SSL connection

### Description

```
public EventBufferEvent::sslGetCipherVersion(): string
```

Retrieves version of cipher used by current SSL connection.

Note:

This function is available only if Event is compiled with OpenSSL support.

### Parameters

This function has no parameters.

### Return Values

Returns the current cipher version of the SSL connection, or false on error.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/eventbufferevent.sslgetcipherversion.php
