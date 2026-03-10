# finfo_buffer

Source: https://devdocs.io/php/function.finfo-buffer

# finfo::buffer

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL fileinfo >= 0.1.0)

finfo_buffer -- finfo::buffer — Return information about a string buffer

### Description

Procedural style

```
finfo_buffer(
 finfo $finfo,
 string $string,
 int $flags = FILEINFO_NONE,
 ?resource $context = null
): string|false
```

Object-oriented style

```
public finfo::buffer(string $string, int $flags = FILEINFO_NONE, ?resource $context = null): string|false
```

This function is used to get information about binary data in a string.

### Parameters

An finfo instance, returned by finfo_open().

Content of a file to be checked.

One or disjunction of more Fileinfo constants.

### Return Values

Returns a textual description of the string argument, or false if an error occurred.

### Changelog

### Examples

Example #1 A finfo_buffer() example

```
<?php
$finfo = new finfo(FILEINFO_MIME);
echo $finfo->buffer($_POST["script"]) . "\n";
?>
```

The above example will output something similar to:

```
application/x-sh; charset=us-ascii
```

### See Also

- finfo_file() - Return information about a file

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.finfo-buffer.php
