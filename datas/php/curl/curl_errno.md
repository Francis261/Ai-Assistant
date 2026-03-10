# curl_errno

Source: https://devdocs.io/php/function.curl-errno

(PHP 4 >= 4.0.3, PHP 5, PHP 7, PHP 8)

curl_errno — Return the last error number

### Description

```
curl_errno(CurlHandle $handle): int
```

Returns the error number for the last cURL operation.

### Parameters

A cURL handle returned by curl_init().

### Return Values

Returns the error number or 0 (zero) if no error occurred.

### Changelog

### Examples

Example #1 curl_errno() example

```
<?php
// Create a curl handle to a non-existing location
$ch = curl_init('http://404.php.net/');

// Execute
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_exec($ch);

// Check if any error occurred
if(curl_errno($ch))
{
    echo 'Curl error: ' . curl_error($ch);
}
?>
```

### See Also

- curl_error() - Return a string containing the last error for the current session
- » Curl error codes

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.curl-errno.php
