# curl_share_strerror

Source: https://devdocs.io/php/function.curl-share-strerror

(PHP 7 >= 7.1.0, PHP 8)

curl_share_strerror — Return string describing the given error code

### Description

```
curl_share_strerror(int $error_code): ?string
```

Returns a text error message describing the given error code.

### Parameters

One of the » cURL error codes constants.

### Return Values

Returns error description or null for invalid error code.

### See Also

- curl_share_errno() - Return the last share curl error number
- curl_strerror() - Return string describing the given error code

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.curl-share-strerror.php
