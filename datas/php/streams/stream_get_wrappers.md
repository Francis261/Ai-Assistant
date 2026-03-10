# stream_get_wrappers

Source: https://devdocs.io/php/function.stream-get-wrappers

(PHP 5, PHP 7, PHP 8)

stream_get_wrappers — Retrieve list of registered streams

### Description

```
stream_get_wrappers(): array
```

Retrieve list of registered streams available on the running system.

### Parameters

This function has no parameters.

### Return Values

Returns an indexed array containing the name of all stream wrappers available on the running system.

### Examples

Example #1 stream_get_wrappers() example

```
<?php
print_r(stream_get_wrappers());
?>
```

The above example will output something similar to:

```
Array
(
    [0] => php
    [1] => file
    [2] => http
    [3] => ftp
    [4] => compress.bzip2
    [5] => compress.zlib
)
```

Example #2 Checking for the existence of a stream wrapper

```
<?php
// check for the existence of the bzip2 stream wrapper
if (in_array('compress.bzip2', stream_get_wrappers())) {
    echo 'compress.bzip2:// support enabled.';
} else {
    echo 'compress.bzip2:// support not enabled.';
}
?>
```

### See Also

- stream_wrapper_register() - Register a URL wrapper implemented as a PHP class

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.stream-get-wrappers.php
