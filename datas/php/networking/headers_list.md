# headers_list

Source: https://devdocs.io/php/function.headers-list

(PHP 5, PHP 7, PHP 8)

headers_list — Returns a list of response headers sent (or ready to send)

### Description

```
headers_list(): array
```

headers_list() will return a list of headers to be sent to the browser / client. To determine whether or not these headers have been sent yet, use headers_sent().

### Parameters

This function has no parameters.

### Return Values

Returns a numerically indexed array of headers.

### Examples

Example #1 Example using headers_list()

```
<?php

/* setcookie() will add a response header on its own */
setcookie('foo', 'bar');

/* Define a custom response header
   This will be ignored by most clients */
header("Example-Test: foo");

/* Specify plain text content in our response */
header('Content-Type: text/plain; charset=UTF-8');

/* What headers are going to be sent? */
var_dump(headers_list());

?>
```

The above example will output something similar to:

```
array(3) {
  [0]=>
  string(19) "Set-Cookie: foo=bar"
  [1]=>
  string(17) "Example-Test: foo"
  [2]=>
  string(39) "Content-Type: text/plain; charset=UTF-8"
}
```

### Notes

Note:

Headers will only be accessible and output when a SAPI that supports them is in use.

### See Also

- headers_sent() - Checks if or where headers have been sent
- header() - Send a raw HTTP header
- setcookie() - Send a cookie
- apache_response_headers() - Fetch all HTTP response headers
- http_response_code() - Get or Set the HTTP response code

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.headers-list.php
