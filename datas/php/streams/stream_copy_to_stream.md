# stream_copy_to_stream

Source: https://devdocs.io/php/function.stream-copy-to-stream

(PHP 5, PHP 7, PHP 8)

stream_copy_to_stream — Copies data from one stream to another

### Description

```
stream_copy_to_stream(
 resource $from,
 resource $to,
 ?int $length = null,
 int $offset = 0
): int|false
```

Makes a copy of up to length bytes of data from the current position (or from the offset position, if specified) in from to to. If length is null, all remaining content in from will be copied.

### Parameters

The source stream

The destination stream

Maximum bytes to copy. By default all bytes left are copied.

The offset where to start to copy data

### Return Values

Returns the total count of bytes copied, or false on failure.

### Changelog

### Examples

Example #1 A stream_copy_to_stream() example

```
<?php
$src = fopen('http://www.example.com', 'r');
$dest1 = fopen('first1k.txt', 'w');
$dest2 = fopen('remainder.txt', 'w');

echo stream_copy_to_stream($src, $dest1, 1024) . " bytes copied to first1k.txt\n";
echo stream_copy_to_stream($src, $dest2) . " bytes copied to remainder.txt\n";

?>
```

### See Also

- copy() - Copies file

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.stream-copy-to-stream.php
