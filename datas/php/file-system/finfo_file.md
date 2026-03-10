# finfo_file

Source: https://devdocs.io/php/function.finfo-file

# finfo::file

(PHP >= 5.3.0, PHP 7, PHP 8, PECL fileinfo >= 0.1.0)

finfo_file -- finfo::file — Return information about a file

### Description

Procedural style

```
finfo_file(
 finfo $finfo,
 string $filename,
 int $flags = FILEINFO_NONE,
 ?resource $context = null
): string|false
```

Object-oriented style

```
public finfo::file(string $filename, int $flags = FILEINFO_NONE, ?resource $context = null): string|false
```

This function is used to get information about a file.

### Parameters

An finfo instance, returned by finfo_open().

Name of a file to be checked.

One or disjunction of more Fileinfo constants.

For a description of contexts, refer to Stream Functions.

### Return Values

Returns a textual description of the contents of the filename argument, or false if an error occurred.

### Changelog

### Examples

Example #1 A finfo_file() example

```
<?php
$finfo = finfo_open(FILEINFO_MIME_TYPE); // return mime type aka mimetype extension
foreach (glob("*") as $filename) {
    echo finfo_file($finfo, $filename) . "\n";
}
finfo_close($finfo);
?>
```

The above example will output something similar to:

```
text/html
image/gif
application/vnd.ms-excel
```

### See Also

- finfo_buffer() - Return information about a string buffer

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.finfo-file.php
