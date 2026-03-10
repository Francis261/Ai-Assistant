# EventBufferEvent::sslRenegotiate

Source: https://devdocs.io/php/eventbufferevent.sslrenegotiate

(PECL event >= 1.2.6-beta)

EventBufferEvent::sslRenegotiate — Tells a bufferevent to begin SSL renegotiation

### Description

```
public EventBufferEvent::sslRenegotiate(): void
```

Tells a bufferevent to begin SSL renegotiation.

Calling this function tells the SSL to renegotiate, and the buffer event to invoke appropriate callbacks. This is an advanced topic; this should be generally avoided unless one really knows what he/she does, especially since many SSL versions have had known security issues related to renegotiation.

### Parameters

This function has no parameters.

### Return Values

No value is returned.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/eventbufferevent.sslrenegotiate.php
