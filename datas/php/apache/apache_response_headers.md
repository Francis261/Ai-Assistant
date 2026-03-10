# apache_response_headers

Source: https://devdocs.io/php/function.apache-response-headers

(PHP 4 >= 4.3.0, PHP 5, PHP 7, PHP 8)

apache_response_headers — Fetch all HTTP response headers

### Description

```
apache_response_headers(): array
```

Fetch all HTTP response headers. Works in the Apache, FastCGI, CLI, and FPM webservers.

### Parameters

This function has no parameters.

### Return Values

An array of all Apache response headers on success.

### Examples

Example #1 apache_response_headers() example

```
<?php
print_r(apache_response_headers());
?>
```

The above example will output something similar to:

```
Array
(
    [Accept-Ranges] => bytes
    [X-Powered-By] => PHP/4.3.8
)
```

### See Also

- apache_request_headers() - Fetch all HTTP request headers
- headers_sent() - Checks if or where headers have been sent
- headers_list() - Returns a list of response headers sent (or ready to send)

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.apache-response-headers.php
