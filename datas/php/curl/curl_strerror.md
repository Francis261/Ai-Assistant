# curl_strerror

Source: https://devdocs.io/php/function.curl-strerror

(PHP 5 >= 5.5.0, PHP 7, PHP 8)

curl_strerror — Return string describing the given error code

### Description

```
curl_strerror(int $error_code): ?string
```

Returns a text error message describing the given error code.

### Parameters

One of the » cURL error codes constants.

### Return Values

Returns error description or null for invalid error code.

### Examples

Example #1 curl_errno() example

```
<?php
// Create a curl handle with a misspelled protocol in URL
$ch = curl_init("htp://example.com/");

// Send request
curl_exec($ch);

// Check for errors and display the error message
if($errno = curl_errno($ch)) {
    $error_message = curl_strerror($errno);
    echo "cURL error ({$errno}):\n {$error_message}";
}
?>
```

The above example will output:

```
cURL error (1):
 Unsupported protocol
```

### See Also

- curl_errno() - Return the last error number
- curl_error() - Return a string containing the last error for the current session
- » Curl error codes

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.curl-strerror.php
