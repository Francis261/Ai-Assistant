# stream_is_local

Source: https://devdocs.io/php/function.stream-is-local

(PHP 5 >= 5.2.4, PHP 7, PHP 8)

stream_is_local — Checks if a stream is a local stream

### Description

```
stream_is_local(resource|string $stream): bool
```

Checks if a stream, or a URL, is a local one or not.

### Parameters

The stream resource or URL to check.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 stream_is_local() example

Basic usage example.

```
<?php
var_dump(stream_is_local("http://example.com"));
var_dump(stream_is_local("/etc"));
?>
```

The above example will output something similar to:

```
bool(false)
bool(true)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.stream-is-local.php
