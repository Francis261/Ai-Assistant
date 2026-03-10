# gzgetss

Source: https://devdocs.io/php/function.gzgetss

(PHP 4, PHP 5, PHP 7)

gzgetss — Get line from gz-file pointer and strip HTML tags

This function has been DEPRECATED as of PHP 7.3.0, and REMOVED as of PHP 8.0.0. Relying on this function is highly discouraged.

### Description

```
gzgetss(resource $zp, int $length, string $allowable_tags = ?): string
```

Identical to gzgets(), except that gzgetss() attempts to strip any HTML and PHP tags from the text it reads.

### Parameters

The gz-file pointer. It must be valid, and must point to a file successfully opened by gzopen().

The length of data to get.

You can use this optional parameter to specify tags which should not be stripped.

### Return Values

The uncompressed and stripped string, or false on error.

### Examples

Example #1 gzgetss() example

```
<?php
$handle = gzopen('somefile.gz', 'r');
while (!gzeof($handle)) {
   $buffer = gzgetss($handle, 4096);
   echo $buffer;
}
gzclose($handle);
?>
```

### See Also

- gzopen() - Open gz-file
- gzgets() - Get line from file pointer
- strip_tags() - Strip HTML and PHP tags from a string

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.gzgetss.php
