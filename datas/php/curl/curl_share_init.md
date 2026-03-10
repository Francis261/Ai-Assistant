# curl_share_init

Source: https://devdocs.io/php/function.curl-share-init

(PHP 5 >= 5.5.0, PHP 7, PHP 8)

curl_share_init — Initialize a cURL share handle

### Description

```
curl_share_init(): CurlShareHandle
```

Allows to share data between cURL handles.

### Parameters

This function has no parameters.

### Return Values

Returns a cURL share handle.

### Changelog

### Examples

Example #1 curl_share_init() example

This example will create a cURL share handle, add two cURL handles to it, and then run them with cookie data sharing.

```
<?php
// Create cURL share handle and set it to share cookie data
$sh = curl_share_init();
curl_share_setopt($sh, CURLSHOPT_SHARE, CURL_LOCK_DATA_COOKIE);

// Initialize the first cURL handle and assign the share handle to it
$ch1 = curl_init("http://example.com/");
curl_setopt($ch1, CURLOPT_SHARE, $sh);

// Execute the first cURL handle
curl_exec($ch1);

// Initialize the second cURL handle and assign the share handle to it
$ch2 = curl_init("http://php.net/");
curl_setopt($ch2, CURLOPT_SHARE, $sh);

// Execute the second cURL handle
//  all cookies from $ch1 handle are shared with $ch2 handle
curl_exec($ch2);
?>
```

### See Also

- curl_share_setopt() - Set an option for a cURL share handle
- curl_share_init_persistent() - Initialize a persistent cURL share handle

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.curl-share-init.php
