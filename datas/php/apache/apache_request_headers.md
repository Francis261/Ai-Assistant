# apache_request_headers

Source: https://devdocs.io/php/function.apache-request-headers

(PHP 4 >= 4.3.0, PHP 5, PHP 7, PHP 8)

apache_request_headers — Fetch all HTTP request headers

### Description

```
apache_request_headers(): array
```

Fetches all HTTP request headers from the current request. Works in the Apache, FastCGI, CLI, and FPM webservers.

### Parameters

This function has no parameters.

### Return Values

An associative array of all the HTTP headers in the current request.

### Changelog

### Examples

Example #1 apache_request_headers() example

```
<?php
$headers = apache_request_headers();

foreach ($headers as $header => $value) {
    echo "$header: $value <br />\n";
}
?>
```

The above example will output something similar to:

```
Accept: */*
Accept-Language: en-us
Accept-Encoding: gzip, deflate
User-Agent: Mozilla/4.0
Host: www.example.com
Connection: Keep-Alive
```

### Notes

Note:

You can also get at the value of the common CGI variables by reading them from the environment, which works whether or not you are using PHP as an Apache module. Use phpinfo() to see a list of all of the available environment variables.

### See Also

- apache_response_headers() - Fetch all HTTP response headers

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.apache-request-headers.php
