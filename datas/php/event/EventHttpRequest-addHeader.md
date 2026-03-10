# EventHttpRequest::addHeader

Source: https://devdocs.io/php/eventhttprequest.addheader

(PECL event >= 1.4.0-beta)

EventHttpRequest::addHeader — Adds an HTTP header to the headers of the request

### Description

```
public EventHttpRequest::addHeader( string $key ,  string $value ,  int $type ): bool
```

Adds an HTTP header to the headers of the request.

### Parameters

Header name.

Header value.

One of EventHttpRequest::*_HEADER constants.

### Return Values

Returns true on success or false on failure.

### See Also

- EventHttpRequest::removeHeader() - Removes an HTTP header from the headers of the request

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/eventhttprequest.addheader.php
