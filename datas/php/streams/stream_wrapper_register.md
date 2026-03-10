# stream_wrapper_register

Source: https://devdocs.io/php/function.stream-wrapper-register

(PHP 4 >= 4.3.2, PHP 5, PHP 7, PHP 8)

stream_wrapper_register — Register a URL wrapper implemented as a PHP class

### Description

```
stream_wrapper_register(string $protocol, string $class, int $flags = 0): bool
```

Allows you to implement your own protocol handlers and streams for use with all the other filesystem functions (such as fopen(), fread() etc.).

### Parameters

The wrapper name to be registered. Valid protocol names must contain alphanumerics, dots (.), plusses (+), or hyphens (-) only.

The classname which implements the protocol.

Should be set to STREAM_IS_URL if protocol is a URL protocol. Default is 0, local stream.

### Return Values

Returns true on success or false on failure.

stream_wrapper_register() will return false if the protocol already has a handler.

### Examples

Example #1 How to register a stream wrapper

```
<?php
$existed = in_array("var", stream_get_wrappers());
if ($existed) {
    stream_wrapper_unregister("var");
}
stream_wrapper_register("var", "VariableStream");
$myvar = "";

$fp = fopen("var://myvar", "r+");

fwrite($fp, "line1\n");
fwrite($fp, "line2\n");
fwrite($fp, "line3\n");

rewind($fp);
while (!feof($fp)) {
    echo fgets($fp);
}
fclose($fp);
var_dump($myvar);

if ($existed) {
    stream_wrapper_restore("var");
}

?>
```

The above example will output:

```
line1
line2
line3
string(18) "line1
line2
line3
"
```

### See Also

- The streamWrapper prototype class
- Example class registered as stream wrapper
- stream_wrapper_unregister() - Unregister a URL wrapper
- stream_wrapper_restore() - Restores a previously unregistered built-in wrapper
- stream_get_wrappers() - Retrieve list of registered streams

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.stream-wrapper-register.php
