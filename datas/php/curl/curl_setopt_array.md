# curl_setopt_array

Source: https://devdocs.io/php/function.curl-setopt-array

(PHP 5 >= 5.1.3, PHP 7, PHP 8)

curl_setopt_array — Set multiple options for a cURL transfer

### Description

```
curl_setopt_array(CurlHandle $handle, array $options): bool
```

Sets multiple options for a cURL session. This function is useful for setting a large number of cURL options without repetitively calling curl_setopt().

### Parameters

A cURL handle returned by curl_init().

An array specifying which options to set and their values. The keys should be valid curl_setopt() constants or their integer equivalents.

### Return Values

Returns true if all options were successfully set. If an option could not be successfully set, false is immediately returned, ignoring any future options in the options array.

### Changelog

### Examples

Example #1 Initializing a new cURL session and fetching a web page

```
<?php
// create a new cURL resource
$ch = curl_init();

// set URL and other appropriate options
$options = array(CURLOPT_URL => 'http://www.example.com/',
                 CURLOPT_HEADER => false
                );

curl_setopt_array($ch, $options);

// grab URL and pass it to the browser
curl_exec($ch);
?>
```

### Notes

Note:

As with curl_setopt(), passing an array to CURLOPT_POST will encode the data as multipart/form-data, while passing a URL-encoded string will encode the data as application/x-www-form-urlencoded.

### See Also

- curl_setopt() - Set an option for a cURL transfer

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.curl-setopt-array.php
