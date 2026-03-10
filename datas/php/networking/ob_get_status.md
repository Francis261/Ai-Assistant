# ob_get_status

Source: https://devdocs.io/php/function.ob-get-status

(PHP 4 >= 4.2.0, PHP 5, PHP 7, PHP 8)

ob_get_status — Get status of output buffers

### Description

```
ob_get_status(bool $full_status = false): array
```

ob_get_status() returns status information on either the top level output buffer or all active output buffer levels if full_status is set to true.

### Parameters

true to return all active output buffer levels. If false or not set, only the top level output buffer is returned.

### Return Values

If full_status is omitted or false a simple array holding status information on the active output level is returned.

If full_status is true an array with one element for each active output buffer level is returned. The output level is used as key of the top level array and each array element itself is another array holding status information on one active output level.

An empty array is returned if output buffering is not turned on.

### Examples

Example #1 Array returned when full_status is false

```
Array
(
    [name] => URL-Rewriter
    [type] => 0
    [flags] => 112
    [level] => 2
    [chunk_size] => 0
    [buffer_size] => 16384
    [buffer_used] => 1024
)
```

Example #2 Array returned when full_status is true

```
Array
(
    [0] => Array
        (
            [name] => default output handler
            [type] => 0
            [flags] => 112
            [level] => 1
            [chunk_size] => 0
            [buffer_size] => 16384
            [buffer_used] => 2048
        )

    [1] => Array
        (
            [name] => URL-Rewriter
            [type] => 0
            [flags] => 112
            [level] => 2
            [chunk_size] => 0
            [buffer_size] => 16384
            [buffer_used] => 1024
        )

)
```

### See Also

- ob_get_level() - Return the nesting level of the output buffering mechanism
- ob_list_handlers() - List all output handlers in use
- ob_get_length() - Return the length of the output buffer
- ob_start() - Turn on output buffering

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ob-get-status.php
