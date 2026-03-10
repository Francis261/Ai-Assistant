# curl_error

Source: https://devdocs.io/php/function.curl-error

(PHP 4 >= 4.0.3, PHP 5, PHP 7, PHP 8)

curl_error — Return a string containing the last error for the current session

### Description

```
curl_error(CurlHandle $handle): string
```

Returns a clear text error message for the last cURL operation.

### Parameters

A cURL handle returned by curl_init().

### Return Values

Returns the error message or '' (the empty string) if no error occurred.

### Changelog

### Examples

Example #1 curl_error() example

```
<?php
// Create a curl handle to a non-existing location
$ch = curl_init('http://404.php.net/');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

if(curl_exec($ch) === false)
{
    echo 'Curl error: ' . curl_error($ch);
}
else
{
    echo 'Operation completed without any errors';
}
?>
```

### See Also

- curl_errno() - Return the last error number
- » Curl error codes

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.curl-error.php
