# EventBufferEvent::sslGetCipherInfo

Source: https://devdocs.io/php/eventbufferevent.sslgetcipherinfo

(PECL event >= 1.10.0)

EventBufferEvent::sslGetCipherInfo — Returns a textual description of the cipher

### Description

```
public EventBufferEvent::sslGetCipherInfo(): string
```

Retrieves description of the current cipher by means of the SSL_CIPHER_description SSL API function (see SSL_CIPHER_get_name(3) man page).

Note:

This function is available only if Event is compiled with OpenSSL support.

### Parameters

This function has no parameters.

### Return Values

Returns a textual description of the cipher on success, or false on error.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/eventbufferevent.sslgetcipherinfo.php
