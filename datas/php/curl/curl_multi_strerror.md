# curl_multi_strerror

Source: https://devdocs.io/php/function.curl-multi-strerror

(PHP 5 >= 5.5.0, PHP 7, PHP 8)

curl_multi_strerror — Return string describing error code

### Description

```
curl_multi_strerror(int $error_code): ?string
```

Returns a text error message describing the given CURLM_* error code.

### Parameters

One of the CURLM_* constants.

### Return Values

Returns error string for valid error code, null otherwise.

### See Also

- curl_strerror() - Return string describing the given error code
- » cURL error codes

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.curl-multi-strerror.php
