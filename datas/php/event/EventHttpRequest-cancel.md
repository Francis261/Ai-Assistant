# EventHttpRequest::cancel

Source: https://devdocs.io/php/eventhttprequest.cancel

(PECL event >= 1.4.0-beta)

EventHttpRequest::cancel — Cancels a pending HTTP request

### Description

```
public EventHttpRequest::cancel(): void
```

Cancels a pending HTTP request.

Cancels an ongoing HTTP request. The callback associated with this request is not executed and the request object is freed. If the request is currently being processed, e.g. it is ongoing, the corresponding EventHttpConnection object is going to get reset.

A request cannot be canceled if its callback has executed already. A request may be canceled reentrantly from its chunked callback.

### Parameters

This function has no parameters.

### Return Values

No value is returned.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/eventhttprequest.cancel.php
