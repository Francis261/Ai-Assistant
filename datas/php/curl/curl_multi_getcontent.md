# curl_multi_getcontent

Source: https://devdocs.io/php/function.curl-multi-getcontent

(PHP 5, PHP 7, PHP 8)

curl_multi_getcontent — Return the content of a cURL handle if CURLOPT_RETURNTRANSFER is set

### Description

```
curl_multi_getcontent(CurlHandle $handle): ?string
```

If CURLOPT_RETURNTRANSFER is an option that is set for a specific handle, then this function will return the content of that cURL handle in the form of a string.

### Parameters

A cURL handle returned by curl_init().

### Return Values

Return the content of a cURL handle if CURLOPT_RETURNTRANSFER is set or null if not set.

### Changelog

### See Also

- curl_multi_init() - Returns a new cURL multi handle

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.curl-multi-getcontent.php
