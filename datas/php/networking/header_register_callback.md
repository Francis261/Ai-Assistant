# header_register_callback

Source: https://devdocs.io/php/function.header-register-callback

(PHP 5 >= 5.4.0, PHP 7, PHP 8)

header_register_callback — Call a header function

### Description

```
header_register_callback(callable $callback): bool
```

Registers a function that will be called when PHP starts sending output.

The callback is executed just after PHP prepares all headers to be sent, and before any other output is sent, creating a window to manipulate the outgoing headers before being sent.

### Parameters

Function called just before the headers are sent. It gets no parameters and the return value is ignored.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 header_register_callback() example

```
<?php

header('Content-Type: text/plain');
header('X-Test: foo');

function foo() {
 foreach (headers_list() as $header) {
   if (strpos($header, 'X-Powered-By:') !== false) {
     header_remove('X-Powered-By');
   }
   header_remove('X-Test');
 }
}

$result = header_register_callback('foo');
echo "a";
?>
```

The above example will output something similar to:

```
Content-Type: text/plain

a
```

### Notes

header_register_callback() is executed just as the headers are about to be sent out, so any output from this function can break output.

Note:

Headers will only be accessible and output when a SAPI that supports them is in use.

### See Also

- headers_list() - Returns a list of response headers sent (or ready to send)
- header_remove() - Remove previously set headers
- header() - Send a raw HTTP header

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.header-register-callback.php
