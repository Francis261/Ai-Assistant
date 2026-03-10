# curl_getinfo

Source: https://devdocs.io/php/function.curl-getinfo

(PHP 4 >= 4.0.4, PHP 5, PHP 7, PHP 8)

curl_getinfo — Get information regarding a specific transfer

### Description

```
curl_getinfo(CurlHandle $handle, ?int $option = null): mixed
```

Gets information about the last transfer.

### Parameters

A cURL handle returned by curl_init().

One of the CURLINFO_* constants.

### Return Values

If option is given, returns its value. Otherwise, returns an associative array with the following elements (which correspond to option), or false on failure:

- "url"
- "content_type"
- "http_code"
- "header_size"
- "request_size"
- "filetime"
- "ssl_verify_result"
- "redirect_count"
- "total_time"
- "namelookup_time"
- "connect_time"
- "pretransfer_time"
- "size_upload"
- "size_download"
- "speed_download"
- "speed_upload"
- "download_content_length"
- "upload_content_length"
- "starttransfer_time"
- "redirect_time"
- "certinfo"
- "primary_ip"
- "primary_port"
- "local_ip"
- "local_port"
- "redirect_url"
- "request_header" (This is only set if the CURLINFO_HEADER_OUT is set by a previous call to curl_setopt())
- "posttransfer_time_us" (Available as of PHP 8.4.0 and cURL 8.10.0)

### Changelog

### Examples

Example #1 curl_getinfo() example

```
<?php
// Create a cURL handle
$ch = curl_init('http://www.example.com/');

// Execute
curl_exec($ch);

// Check if any error occurred
if (!curl_errno($ch)) {
  $info = curl_getinfo($ch);
  echo 'Took ', $info['total_time'], ' seconds to send a request to ', $info['url'], "\n";
}
?>
```

Example #2 curl_getinfo() example with option parameter

```
<?php
// Create a cURL handle
$ch = curl_init('http://www.example.com/');

// Execute
curl_exec($ch);

// Check HTTP status code
if (!curl_errno($ch)) {
  switch ($http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE)) {
    case 200:  # OK
      break;
    default:
      echo 'Unexpected HTTP code: ', $http_code, "\n";
  }
}
?>
```

### Notes

Note:

Information gathered by this function is kept if the handle is re-used. This means that unless a statistic is overridden internally by this function, the previous info is returned.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.curl-getinfo.php
