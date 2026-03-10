# curl_reset

Source: https://devdocs.io/php/function.curl-reset

(PHP 5 >= 5.5.0, PHP 7, PHP 8)

curl_reset — Reset all options of a libcurl session handle

### Description

```
curl_reset(CurlHandle $handle): void
```

This function re-initializes all options set on the given cURL handle to the default values.

### Parameters

A cURL handle returned by curl_init().

### Return Values

No value is returned.

### Changelog

### Examples

Example #1 curl_reset() example

```
<?php
// Create a curl handle
$ch = curl_init();

// Set CURLOPT_USERAGENT option
curl_setopt($ch, CURLOPT_USERAGENT, "My test user-agent");

// Reset all previously set options
curl_reset($ch);

// Send HTTP request
curl_setopt($ch, CURLOPT_URL, 'http://example.com/');
curl_exec($ch); // the previously set user-agent will be not sent, it has been reset by curl_reset
?>
```

### Notes

Note:

curl_reset() also resets the URL given as the curl_init() parameter.

### See Also

- curl_setopt() - Set an option for a cURL transfer

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.curl-reset.php
