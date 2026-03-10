# curl_multi_remove_handle

Source: https://devdocs.io/php/function.curl-multi-remove-handle

(PHP 5, PHP 7, PHP 8)

curl_multi_remove_handle — Remove a handle from a set of cURL handles

### Description

```
curl_multi_remove_handle(CurlMultiHandle $multi_handle, CurlHandle $handle): int
```

Removes a given handle from the given multi_handle. When the handle has been removed, it is again perfectly legal to run curl_exec() on this handle. Removing the handle while being used, will effectively halt the transfer in progress involving that handle.

### Parameters

A cURL multi handle returned by curl_multi_init().

A cURL handle returned by curl_init().

### Return Values

Returns 0 on success, or one of the CURLM_* error codes.

### Changelog

### See Also

- curl_init() - Initialize a cURL session
- curl_multi_init() - Returns a new cURL multi handle
- curl_multi_add_handle() - Add a normal cURL handle to a cURL multi handle

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.curl-multi-remove-handle.php
