# curl_unescape

Source: https://devdocs.io/php/function.curl-unescape

(PHP 5 >= 5.5.0, PHP 7, PHP 8)

curl_unescape — Decodes the given URL encoded string

### Description

```
curl_unescape(CurlHandle $handle, string $string): string|false
```

This function decodes the given URL encoded string.

### Parameters

A cURL handle returned by curl_init().

The URL encoded string to be decoded.

### Return Values

Returns decoded string or false on failure.

### Changelog

### Examples

Example #1 curl_escape() example

```
<?php
// Create a curl handle
$ch = curl_init('http://example.com/redirect.php');

// Send HTTP request and follow redirections
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
curl_exec($ch);

// Get the last effective URL
$effective_url = curl_getinfo($ch, CURLINFO_EFFECTIVE_URL);
// ie. "http://example.com/show_location.php?loc=M%C3%BCnchen"

// Decode the URL
$effective_url_decoded = curl_unescape($ch, $effective_url);
// "http://example.com/show_location.php?loc=München"
?>
```

### Notes

Note:

curl_unescape() does not decode plus symbols (+) into spaces. urldecode() does.

### See Also

- curl_escape() - URL encodes the given string
- urlencode() - URL-encodes string
- urldecode() - Decodes URL-encoded string
- rawurlencode() - URL-encode according to RFC 3986
- rawurldecode() - Decode URL-encoded strings

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.curl-unescape.php
