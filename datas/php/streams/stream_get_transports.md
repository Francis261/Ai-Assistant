# stream_get_transports

Source: https://devdocs.io/php/function.stream-get-transports

(PHP 5, PHP 7, PHP 8)

stream_get_transports — Retrieve list of registered socket transports

### Description

```
stream_get_transports(): array
```

Returns an indexed array containing the name of all socket transports available on the running system.

### Parameters

This function has no parameters.

### Return Values

Returns an indexed array of socket transports names.

### Examples

Example #1 Using stream_get_transports()

```
<?php
$xportlist = stream_get_transports();
print_r($xportlist);
?>
```

The above example will output something similar to:

```
Array (
  [0] => tcp
  [1] => udp
  [2] => unix
  [3] => udg
)
```

### See Also

- stream_get_filters() - Retrieve list of registered filters
- stream_get_wrappers() - Retrieve list of registered streams

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.stream-get-transports.php
