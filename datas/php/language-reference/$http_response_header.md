# $http_response_header

Source: https://devdocs.io/php/reserved.variables.httpresponseheader

(PHP 4 >= 4.0.4, PHP 5, PHP 7, PHP 8)

$http_response_header — HTTP response headers

This feature has been DEPRECATED as of PHP 8.5.0. Relying on this feature is highly discouraged.

Use http_get_last_response_headers() instead.

### Description

The $http_response_header array is similar to the get_headers() function. When using the HTTP wrapper, $http_response_header will be populated with the HTTP response headers. $http_response_header will be created in the local scope.

### Examples

Example #1 $http_response_header example

```
<?php
function get_contents() {
  file_get_contents("http://example.com");
  var_dump($http_response_header); // variable is populated in the local scope
}
get_contents();
var_dump($http_response_header); // a call to get_contents() does not populate the variable outside the function scope
?>
```

The above example will output something similar to:

```
array(9) {
  [0]=>
  string(15) "HTTP/1.1 200 OK"
  [1]=>
  string(35) "Date: Sat, 12 Apr 2008 17:30:38 GMT"
  [2]=>
  string(29) "Server: Apache/2.2.3 (CentOS)"
  [3]=>
  string(44) "Last-Modified: Tue, 15 Nov 2005 13:24:10 GMT"
  [4]=>
  string(27) "ETag: "280100-1b6-80bfd280""
  [5]=>
  string(20) "Accept-Ranges: bytes"
  [6]=>
  string(19) "Content-Length: 438"
  [7]=>
  string(17) "Connection: close"
  [8]=>
  string(38) "Content-Type: text/html; charset=UTF-8"
}

Warning: Undefined variable $http_response_header
NULL
```

### See Also

- http_get_last_response_headers() - Retrieve last HTTP response headers
- http_clear_last_response_headers() - Clears the stored HTTP response headers

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reserved.variables.httpresponseheader.php
