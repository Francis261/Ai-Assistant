# EventHttp::setAllowedMethods

Source: https://devdocs.io/php/eventhttp.setallowedmethods

(PECL event >= 1.4.0-beta)

EventHttp::setAllowedMethods — Sets the what HTTP methods are supported in requests accepted by this server, and passed to user callbacks

### Description

```
public EventHttp::setAllowedMethods( int $methods ): void
```

Sets the what HTTP methods are supported in requests accepted by this server, and passed to user callbacks

If not supported they will generate a "405 Method not
 allowed" response.

By default this includes the following methods: GET, POST, HEAD, PUT, DELETE. See EventHttpRequest::CMD_* constants.

### Parameters

A bit mask of EventHttpRequest::CMD_* constants.

### Return Values

No value is returned.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/eventhttp.setallowedmethods.php
