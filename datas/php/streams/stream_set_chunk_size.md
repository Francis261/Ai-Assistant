# stream_set_chunk_size

Source: https://devdocs.io/php/function.stream-set-chunk-size

(PHP 5 >= 5.4.0, PHP 7, PHP 8)

stream_set_chunk_size — Set the stream chunk size

### Description

```
stream_set_chunk_size(resource $stream, int $size): int
```

Set the stream chunk size.

### Parameters

The target stream.

The desired new chunk size.

### Return Values

Returns the previous chunk size on success.

### Errors/Exceptions

A ValueError is thrown if size is less than 1 or greater than PHP_INT_MAX.

### Changelog

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.stream-set-chunk-size.php
