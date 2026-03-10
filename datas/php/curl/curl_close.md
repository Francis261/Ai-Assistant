# curl_close

Source: https://devdocs.io/php/function.curl-close

(PHP 4 >= 4.0.2, PHP 5, PHP 7, PHP 8)

curl_close — Close a cURL session

This function has been DEPRECATED as of PHP 8.5.0. Relying on this function is highly discouraged.

### Description

```
#[\Deprecated] 
 curl_close(CurlHandle $handle): void
```

Note:

This function has no effect. Prior to PHP 8.0.0, this function was used to close the resource.

Closes a cURL session and frees all resources. The cURL handle, handle, is also deleted.

### Parameters

A cURL handle returned by curl_init().

### Return Values

No value is returned.

### Changelog

### Examples

Example #1 Initializing a new cURL session and fetching a web page

```
<?php
// create a new cURL resource
$ch = curl_init();

// set URL and other appropriate options
curl_setopt($ch, CURLOPT_URL, "http://www.example.com/");
curl_setopt($ch, CURLOPT_HEADER, 0);

// grab URL and pass it to the browser
curl_exec($ch);

// close cURL resource, and free up system resources
curl_close($ch);
?>
```

### See Also

- curl_init() - Initialize a cURL session
- curl_multi_close() - Remove all cURL handles from a multi handle

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.curl-close.php
