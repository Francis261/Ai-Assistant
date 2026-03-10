# chunk_split

Source: https://devdocs.io/php/function.chunk-split

(PHP 4, PHP 5, PHP 7, PHP 8)

chunk_split — Split a string into smaller chunks

### Description

```
chunk_split(string $string, int $length = 76, string $separator = "\r\n"): string
```

Can be used to split a string into smaller chunks which is useful for e.g. converting base64_encode() output to match RFC 2045 semantics. It inserts separator every length characters.

### Parameters

The string to be chunked.

The chunk length.

The line ending sequence.

### Return Values

Returns the chunked string.

### Examples

Example #1 chunk_split() example

```
<?php
$data = 'This is quite a long string, which will get broken up because the line is going to be too long after base64 encoding it.';

// format $data using RFC 2045 semantics
$new_string = chunk_split(base64_encode($data));
echo $new_string, PHP_EOL;
?>
```

### See Also

- str_split() - Convert a string to an array
- explode() - Split a string by a string
- wordwrap() - Wraps a string to a given number of characters
- » RFC 2045

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.chunk-split.php
