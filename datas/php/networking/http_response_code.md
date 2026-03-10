# http_response_code

Source: https://devdocs.io/php/function.http-response-code

(PHP 5 >= 5.4.0, PHP 7, PHP 8)

http_response_code — Get or Set the HTTP response code

### Description

```
http_response_code(int $response_code = 0): int|bool
```

Gets or sets the HTTP response status code.

### Parameters

The optional response_code will set the response code.

### Return Values

If response_code is provided, then the previous status code will be returned. If response_code is not provided, then the current status code will be returned. Both of these values will default to a 200 status code if used in a web server environment.

false will be returned if response_code is not provided and it is not invoked in a web server environment (such as from a CLI application). true will be returned if response_code is provided and it is not invoked in a web server environment (but only when no previous response status has been set).

### Examples

Example #1 Using http_response_code() in a web server environment

```
<?php

// Get the current response code and set a new one
var_dump(http_response_code(404));

// Get the new response code
var_dump(http_response_code());
?>
```

The above example will output:

```
int(200)
int(404)
```

Example #2 Using http_response_code() in a CLI environment

```
<?php

// Get the current default response code
var_dump(http_response_code());

// Set a response code
var_dump(http_response_code(201));

// Get the new response code
var_dump(http_response_code());
?>
```

The above example will output:

```
bool(false)
bool(true)
int(201)
```

### See Also

- header() - Send a raw HTTP header
- headers_list() - Returns a list of response headers sent (or ready to send)

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.http-response-code.php
