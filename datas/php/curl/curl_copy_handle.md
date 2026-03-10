# curl_copy_handle

Source: https://devdocs.io/php/function.curl-copy-handle

(PHP 5, PHP 7, PHP 8)

curl_copy_handle — Copy a cURL handle along with all of its preferences

### Description

```
curl_copy_handle(CurlHandle $handle): CurlHandle|false
```

Copies a cURL handle keeping the same preferences.

### Parameters

A cURL handle returned by curl_init().

### Return Values

Returns a new cURL handle, or false on failure.

### Changelog

### Examples

Example #1 Copying a cURL handle

```
<?php
// create a new cURL resource
$ch = curl_init();

// set URL and other appropriate options
curl_setopt($ch, CURLOPT_URL, 'http://www.example.com/');
curl_setopt($ch, CURLOPT_HEADER, 0);

// copy the handle
$ch2 = curl_copy_handle($ch);

// grab URL (http://www.example.com/) and pass it to the browser
curl_exec($ch2);
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.curl-copy-handle.php
