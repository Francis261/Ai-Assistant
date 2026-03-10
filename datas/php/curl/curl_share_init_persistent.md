# curl_share_init_persistent

Source: https://devdocs.io/php/function.curl-share-init-persistent

(PHP 8 >= 8.5.0)

curl_share_init_persistent — Initialize a persistent cURL share handle

### Description

```
curl_share_init_persistent(array $share_options): CurlSharePersistentHandle
```

Initialize a persistent cURL share handle with the given share options. Unlike curl_share_init(), handles created by this function will not be destroyed at the end of the PHP request. If a persistent share handle with the same set of share_options is found, it will be reused.

### Parameters

Note: CURL_LOCK_DATA_COOKIE is not allowed and, if specified, this function will throw a ValueError. Sharing cookies between PHP requests may lead to inadvertently mixing up sensitive cookies between users.

### Return Values

Returns a CurlSharePersistentHandle.

### Errors/Exceptions

- If share_options is empty, this function throws a ValueError.
- If share_options contains a value not matching a CURL_LOCK_DATA_*, this function throws a ValueError.
- If share_options contains CURL_LOCK_DATA_COOKIE, this function throws a ValueError.
- If share_options contains a non-integer value, this function throws a TypeError.

### Examples

Example #1 curl_share_init_persistent() example

This example will create a persistent cURL share handle and demonstrate sharing connections between them. If this is executed in a long-lived PHP SAPI, $sh will survive between SAPI requests.

```
<?php

// Create or retrieve a persistent cURL share handle set to share DNS lookups and connections
$sh = curl_share_init_persistent([CURL_LOCK_DATA_DNS, CURL_LOCK_DATA_CONNECT]);

// Initialize the first cURL handle and assign the share handle to it
$ch1 = curl_init("http://example.com/");
curl_setopt($ch1, CURLOPT_SHARE, $sh);

// Execute the first cURL handle. This may reuse the connection from an earlier SAPI request
curl_exec($ch1);

// Initialize the second cURL handle and assign the share handle to it
$ch2 = curl_init("http://example.com/");
curl_setopt($ch2, CURLOPT_SHARE, $sh);

// Execute the second cURL handle. This will reuse the connection from $ch1
curl_exec($ch2);

?>
```

### See Also

- curl_setopt() - Set an option for a cURL transfer
- curl_share_init() - Initialize a cURL share handle

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.curl-share-init-persistent.php
