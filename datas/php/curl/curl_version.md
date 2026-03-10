# curl_version

Source: https://devdocs.io/php/function.curl-version

(PHP 4 >= 4.0.2, PHP 5, PHP 7, PHP 8)

curl_version — Gets cURL version information

### Description

```
curl_version(): array|false
```

Returns information about the cURL version.

### Parameters

This function has no parameters.

### Return Values

Returns an associative array with the following elements:

### Changelog

### Examples

Example #1 curl_version() example

This example will check which features that's available in cURL build by using the 'features' bitmask returned by curl_version().

```
<?php
// Get curl version array
$version = curl_version();

// These are the bitfields that can be used 
// to check for features in the curl build
$bitfields = Array(
            'CURL_VERSION_IPV6', 
            'CURL_VERSION_KERBEROS4', 
            'CURL_VERSION_SSL', 
            'CURL_VERSION_LIBZ'
            );

foreach($bitfields as $feature)
{
    echo $feature . ($version['features'] & constant($feature) ? ' matches' : ' does not match');
    echo PHP_EOL;
}
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.curl-version.php
