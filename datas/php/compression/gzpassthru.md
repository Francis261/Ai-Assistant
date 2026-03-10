# gzpassthru

Source: https://devdocs.io/php/function.gzpassthru

(PHP 4, PHP 5, PHP 7, PHP 8)

gzpassthru — Output all remaining data on a gz-file pointer

### Description

```
gzpassthru(resource $stream): int
```

Reads to EOF on the given gz-file pointer from the current position and writes the (uncompressed) results to standard output.

Note:

You may need to call gzrewind() to reset the file pointer to the beginning of the file if you have already written data to it.

If you just want to dump the contents of a file to the output buffer, without first modifying it or seeking to a particular offset, you may want to use the readgzfile() function, which saves you the gzopen() call.

### Parameters

The gz-file pointer. It must be valid, and must point to a file successfully opened by gzopen().

### Return Values

The number of uncompressed characters read from gz and passed through to the input.

### Examples

Example #1 gzpassthru() example

```
<?php
$fp = gzopen('file.gz', 'r');
gzpassthru($fp);
gzclose($fp);
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.gzpassthru.php
