# curl_init

Source: https://devdocs.io/php/function.curl-init

(PHP 4 >= 4.0.2, PHP 5, PHP 7, PHP 8)

curl_init — Initialize a cURL session

### Description

```
curl_init(?string $url = null): CurlHandle|false
```

Initializes a new session and returns a cURL handle.

### Parameters

If provided, the CURLOPT_URL option will be set to its value. This can be set manually using the curl_setopt() function.

Note:

The file protocol is disabled by cURL if open_basedir is set.

### Return Values

Returns a cURL handle on success, false on errors.

### Changelog

### Examples

Example #1 Initializing a new cURL session and fetching a web page

```
<?php

// Initializes a new cURL session
$ch = curl_init();

// Set URL and other appropriate options
curl_setopt($ch, CURLOPT_URL, "http://www.example.com/");
curl_setopt($ch, CURLOPT_HEADER, 0);

// Grab URL and pass it to the browser
curl_exec($ch);

?>
```

### See Also

- curl_multi_init() - Returns a new cURL multi handle

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.curl-init.php
