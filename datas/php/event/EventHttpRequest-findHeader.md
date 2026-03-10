# EventHttpRequest::findHeader

Source: https://devdocs.io/php/eventhttprequest.findheader

(PECL event >= 1.4.0-beta)

EventHttpRequest::findHeader — Finds the value belonging a header

### Description

```
public EventHttpRequest::findHeader( string $key ,  string $type ): void
```

Finds the value belonging a header.

### Parameters

The header name.

One of EventHttpRequest::*_HEADER constants.

### Return Values

Returns null if header not found.

### See Also

- EventHttpRequest::addHeader() - Adds an HTTP header to the headers of the request

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/eventhttprequest.findheader.php
