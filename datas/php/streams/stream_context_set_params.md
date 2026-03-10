# stream_context_set_params

Source: https://devdocs.io/php/function.stream-context-set-params

(PHP 4 >= 4.3.0, PHP 5, PHP 7, PHP 8)

stream_context_set_params — Set parameters for a stream/wrapper/context

### Description

```
stream_context_set_params(resource $context, array $params): true
```

Sets parameters on the specified context.

### Parameters

The stream or context to apply the parameters too.

An associative array of parameters to be set in the following format: $params['paramname'] = "paramvalue";.

### Return Values

Returns true on success or false on failure.

### See Also

- stream_notification_callback() - A callback function for the notification context parameter

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.stream-context-set-params.php
