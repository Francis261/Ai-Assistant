# curl_multi_close

Source: https://devdocs.io/php/function.curl-multi-close

(PHP 5, PHP 7, PHP 8)

curl_multi_close — Remove all cURL handles from a multi handle

### Description

```
curl_multi_close(CurlMultiHandle $multi_handle): void
```

Removes all CurlHandles attached to the CurlMultiHandle, as if curl_multi_remove_handle() was called for each of them.

Prior to PHP 8.0.0 this function also closed the cURL multi handle resource, making it unusable.

### Parameters

A cURL multi handle returned by curl_multi_init().

### Return Values

No value is returned.

### Changelog

### See Also

- curl_multi_init() - Returns a new cURL multi handle

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.curl-multi-close.php
