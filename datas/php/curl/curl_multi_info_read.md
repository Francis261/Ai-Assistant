# curl_multi_info_read

Source: https://devdocs.io/php/function.curl-multi-info-read

(PHP 5, PHP 7, PHP 8)

curl_multi_info_read — Get information about the current transfers

### Description

```
curl_multi_info_read(CurlMultiHandle $multi_handle, int &$queued_messages = null): array|false
```

Ask the multi handle if there are any messages or information from the individual transfers. Messages may include information such as an error code from the transfer or just the fact that a transfer is completed.

Repeated calls to this function will return a new result each time, until a false is returned as a signal that there is no more to get at this point. The integer pointed to with queued_messages will contain the number of remaining messages after this function was called.

The data the returned resource points to will not survive calling curl_multi_remove_handle().

### Parameters

A cURL multi handle returned by curl_multi_init().

Number of messages that are still in the queue

### Return Values

On success, returns an associative array for the message, false on failure.

### Changelog

### See Also

- curl_multi_init() - Returns a new cURL multi handle

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.curl-multi-info-read.php
