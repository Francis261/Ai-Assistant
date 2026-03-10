# stream_context_set_option

Source: https://devdocs.io/php/function.stream-context-set-option

(PHP 4 >= 4.3.0, PHP 5, PHP 7, PHP 8)

stream_context_set_option — Sets an option for a stream/wrapper/context

### Description

```
stream_context_set_option(
 resource $stream_or_context,
 string $wrapper,
 string $option_name,
 mixed $value
): bool
```

The following alternative signature is deprecated as of PHP 8.4.0, use stream_context_set_options() instead.

```
stream_context_set_option(resource $stream_or_context, array $options): bool
```

Sets an option on the specified context. value is set to option for wrapper

### Parameters

The stream or context resource to apply the options to.

The name of the wrapper (which may be different than the protocol). Refer to context options and parameters for a listing of stream options.

The name of the option.

The value of the option.

The options to set for stream_or_context.

Note:

options must be an associative array of associative arrays in the format $arr['wrapper']['option'] = $value.

Refer to context options and parameters for a listing of stream options.

### Return Values

Returns true on success or false on failure.

### Changelog

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.stream-context-set-option.php
