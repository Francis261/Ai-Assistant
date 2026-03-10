# curl_setopt

Source: https://devdocs.io/php/function.curl-setopt

(PHP 4 >= 4.0.2, PHP 5, PHP 7, PHP 8)

curl_setopt — Set an option for a cURL transfer

### Description

```
curl_setopt(CurlHandle $handle, int $option, mixed $value): bool
```

Sets an option on the given cURL session handle.

### Parameters

A cURL handle returned by curl_init().

The CURLOPT_* option to set.

The value to be set on option. See the description of the CURLOPT_* constants for details on the type of values each constant expects.

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 Initializing a new cURL session and fetching a web page

```
<?php
// create a new cURL resource
$ch = curl_init();

// set URL and other appropriate options
curl_setopt($ch, CURLOPT_URL, "http://www.example.com/");
curl_setopt($ch, CURLOPT_HEADER, false);

// grab URL and pass it to the browser
curl_exec($ch);
?>
```

### Notes

Note:

Passing an array to CURLOPT_POSTFIELDS will encode the data as multipart/form-data, while passing a URL-encoded string will encode the data as application/x-www-form-urlencoded.

### See Also

- curl_setopt_array() - Set multiple options for a cURL transfer
- CURLFile
- CURLStringFile

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.curl-setopt.php
