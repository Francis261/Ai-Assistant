# gzclose

Source: https://devdocs.io/php/function.gzclose

(PHP 4, PHP 5, PHP 7, PHP 8)

gzclose — Close an open gz-file pointer

### Description

```
gzclose(resource $stream): bool
```

Closes the given gz-file pointer.

### Parameters

The gz-file pointer. It must be valid, and must point to a file successfully opened by gzopen().

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 gzclose() example

```
<?php
$gz = gzopen('somefile.gz','w9');
gzputs ($gz, 'I was added to somefile.gz');
gzclose($gz);
?>
```

### See Also

- gzopen() - Open gz-file

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.gzclose.php
