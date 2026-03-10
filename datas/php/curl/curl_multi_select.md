# curl_multi_select

Source: https://devdocs.io/php/function.curl-multi-select

(PHP 5, PHP 7, PHP 8)

curl_multi_select — Wait until reading or writing is possible for any cURL multi handle connection

### Description

```
curl_multi_select(CurlMultiHandle $multi_handle, float $timeout = 1.0): int
```

Blocks the execution of the script until a cURL handle attached to the cURL multi handle would be able to make progress on the next call to curl_multi_exec() or until the timeout strikes (whichever comes first).

### Parameters

A cURL multi handle returned by curl_multi_init().

Time, in seconds, to wait for a response from the active cURL multi handle connections.

### Return Values

On success, returns the number of active descriptors contained in the descriptor sets. This may be 0 if there was no activity on any of the descriptors. On failure, this function will return -1 on a select failure (from the underlying select() system call).

### Errors/Exceptions

Throws a ValueError if timeout is less than 0 or greater than PHP_INT_MAX.

### Changelog

### See Also

- curl_multi_init() - Returns a new cURL multi handle

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.curl-multi-select.php
