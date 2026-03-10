# curl_escape

Source: https://devdocs.io/php/function.curl-escape

(PHP 5 >= 5.5.0, PHP 7, PHP 8)

curl_escape — URL encodes the given string

### Description

```
curl_escape(CurlHandle $handle, string $string): string|false
```

This function URL encodes the given string according to » RFC 3986.

### Parameters

A cURL handle returned by curl_init().

The string to be encoded.

### Return Values

Returns escaped string or false on failure.

### Changelog

### Examples

Example #1 curl_escape() example

```
<?php

// Create a curl handle
$ch = curl_init();

// Escape a string used as a GET parameter
$location = curl_escape($ch, 'Hofbräuhaus / München');
// Result: Hofbr%C3%A4uhaus%20%2F%20M%C3%BCnchen

// Compose an URL with the escaped string
$url = "http://example.com/add_location.php?location={$location}";
// Result: http://example.com/add_location.php?location=Hofbr%C3%A4uhaus%20%2F%20M%C3%BCnchen

// Set options and send HTTP request
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_exec($ch);

?>
```

### See Also

- curl_unescape() - Decodes the given URL encoded string
- urlencode() - URL-encodes string
- rawurlencode() - URL-encode according to RFC 3986
- » RFC 3986

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.curl-escape.php
