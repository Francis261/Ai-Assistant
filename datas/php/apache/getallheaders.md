# getallheaders

Source: https://devdocs.io/php/function.getallheaders

(PHP 4, PHP 5, PHP 7, PHP 8)

getallheaders — Fetch all HTTP request headers

### Description

```
getallheaders(): array
```

Fetches all HTTP headers from the current request.

This function is an alias for apache_request_headers(). Please read the apache_request_headers() documentation for more information on how this function works.

### Parameters

This function has no parameters.

### Return Values

An associative array of all the HTTP headers in the current request.

### Changelog

### Examples

Example #1 getallheaders() example

```
<?php

foreach (getallheaders() as $name => $value) {
    echo "$name: $value\n";
}

?>
```

### See Also

- apache_response_headers() - Fetch all HTTP response headers

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.getallheaders.php
