# fastcgi_finish_request

Source: https://devdocs.io/php/function.fastcgi-finish-request

(PHP 5 >= 5.3.3, PHP 7, PHP 8)

fastcgi_finish_request — Flushes all response data to the client

### Description

```
fastcgi_finish_request(): bool
```

This function flushes all response data to the client and finishes the request. This allows for time consuming tasks to be performed without leaving the connection to the client open.

### Parameters

This function has no parameters.

### Return Values

Returns true on success or false on failure.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.fastcgi-finish-request.php
