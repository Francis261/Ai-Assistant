# stream_context_get_params

Source: https://devdocs.io/php/function.stream-context-get-params

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

stream_context_get_params — Retrieves parameters from a context

### Description

```
stream_context_get_params(resource $context): array
```

Retrieves parameter and options information from the stream or context.

### Parameters

A stream resource or a context resource

### Return Values

Returns an associate array containing all context options and parameters.

### Examples

Example #1 stream_context_get_params() example

Basic usage example

```
<?php
$ctx = stream_context_create();
$params = array("notification" => "stream_notification_callback");
stream_context_set_params($ctx, $params);

var_dump(stream_context_get_params($ctx));
?>
```

The above example will output something similar to:

```
array(2) {
  ["notification"]=>
  string(28) "stream_notification_callback"
  ["options"]=>
  array(0) {
  }
}
```

### See Also

- stream_context_set_option() - Sets an option for a stream/wrapper/context
- stream_context_set_params() - Set parameters for a stream/wrapper/context

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.stream-context-get-params.php
