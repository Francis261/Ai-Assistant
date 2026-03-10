# stream_wrapper_unregister

Source: https://devdocs.io/php/function.stream-wrapper-unregister

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

stream_wrapper_unregister — Unregister a URL wrapper

### Description

```
stream_wrapper_unregister(string $protocol): bool
```

Allows you to disable an already defined stream wrapper. Once the wrapper has been disabled you may override it with a user-defined wrapper using stream_wrapper_register() or reenable it later on with stream_wrapper_restore().

### Parameters

### Return Values

Returns true on success or false on failure.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.stream-wrapper-unregister.php
