# stream_context_get_options

Source: https://devdocs.io/php/function.stream-context-get-options

(PHP 4 >= 4.3.0, PHP 5, PHP 7, PHP 8)

stream_context_get_options — Retrieve options for a stream/wrapper/context

### Description

```
stream_context_get_options(resource $stream_or_context): array
```

Returns an array of options on the specified stream or context.

### Parameters

The stream or context to get options from

### Return Values

Returns an associative array with the options.

### Examples

Example #1 stream_context_get_options() example

```
<?php
$params = array("method" => "POST");

stream_context_set_default(array("http" => $params));

var_dump(stream_context_get_options(stream_context_get_default()));

?>
```

The above example will output something similar to:

```
array(1) {
  ["http"]=>
  array(1) {
    ["method"]=>
    string(4) "POST"
  }
}
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.stream-context-get-options.php
