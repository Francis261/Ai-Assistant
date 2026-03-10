# stream_get_contents

Source: https://devdocs.io/php/function.stream-get-contents

(PHP 5, PHP 7, PHP 8)

stream_get_contents — Reads remainder of a stream into a string

### Description

```
stream_get_contents(resource $stream, ?int $length = null, int $offset = -1): string|false
```

Identical to file_get_contents(), except that stream_get_contents() operates on an already open stream resource and returns the remaining contents in a string, up to length bytes and starting at the specified offset.

### Parameters

A stream resource (e.g. returned from fopen())

The maximum bytes to read. Defaults to null (read all the remaining buffer).

Seek to the specified offset before reading. If this number is negative, no seeking will occur and reading will start from the current position.

### Return Values

Returns a string or false on failure.

### Changelog

### Examples

Example #1 stream_get_contents() example

```
<?php

if ($stream = fopen('http://www.example.com', 'r')) {
    // print all the page starting at the offset 10
    echo stream_get_contents($stream, -1, 10);

    fclose($stream);
}

if ($stream = fopen('http://www.example.net', 'r')) {
    // print the first 5 bytes
    echo stream_get_contents($stream, 5);

    fclose($stream);
}

?>
```

### Notes

Note: This function is binary-safe.

Note:

When specifying a length value other than null, this function will immediately allocate an internal buffer of that size even if the actual contents are significantly shorter.

### See Also

- fgets() - Gets line from file pointer
- fread() - Binary-safe file read
- fpassthru() - Output all remaining data on a file pointer

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.stream-get-contents.php
