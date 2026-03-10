# curl_pause

Source: https://devdocs.io/php/function.curl-pause

(PHP 5 >= 5.5.0, PHP 7, PHP 8)

curl_pause — Pause and unpause a connection

### Description

```
curl_pause(CurlHandle $handle, int $flags): int
```

Pause or unpause a cURL session. A session can be paused while a transfer is in progress, in either the read, write or both directions, by calling this function from a callback registered with curl_setopt().

### Parameters

A cURL handle returned by curl_init().

One of CURLPAUSE_* constants.

### Return Values

Returns an error code (CURLE_OK for no error).

### Changelog

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.curl-pause.php
