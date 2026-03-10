# curl_multi_setopt

Source: https://devdocs.io/php/function.curl-multi-setopt

(PHP 5 >= 5.5.0, PHP 7, PHP 8)

curl_multi_setopt — Set a cURL multi option

### Description

```
curl_multi_setopt(CurlMultiHandle $multi_handle, int $option, mixed $value): bool
```

Sets an option on the given cURL multi handle.

### Parameters

A cURL multi handle returned by curl_multi_init().

One of the CURLMOPT_* constants.

The value to be set on option. See the description of the CURLMOPT_* constants for details on the type of values each constant expects.

### Return Values

Returns true on success or false on failure.

### Changelog

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.curl-multi-setopt.php
