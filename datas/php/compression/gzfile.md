# gzfile

Source: https://devdocs.io/php/function.gzfile

(PHP 4, PHP 5, PHP 7, PHP 8)

gzfile — Read entire gz-file into an array

### Description

```
gzfile(string $filename, int $use_include_path = 0): array|false
```

This function is identical to readgzfile(), except that it returns the file in an array.

### Parameters

The file name.

You can set this optional parameter to 1, if you want to search for the file in the include_path too.

### Return Values

An array containing the file, one line per cell, empty lines included, and with newlines still attached, or false on failure.

### Examples

Example #1 gzfile() example

```
<?php
$lines = gzfile('somefile.gz');
foreach ($lines as $line) {
    echo $line;
}
?>
```

### See Also

- readgzfile() - Output a gz-file
- gzopen() - Open gz-file

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.gzfile.php
