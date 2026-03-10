# recode_file

Source: https://devdocs.io/php/function.recode-file

(PHP 4, PHP 5, PHP 7 < 7.4.0)

recode_file — Recode from file to file according to recode request

### Description

```
recode_file(string $request, resource $input, resource $output): bool
```

Recode the file referenced by file handle input into the file referenced by file handle output according to the recode request.

### Parameters

The desired recode request type

A local file handle resource for the input

A local file handle resource for the output

### Return Values

Returns false, if unable to comply, true otherwise.

### Examples

Example #1 Basic recode_file() example

```
<?php
$input = fopen('input.txt', 'r');
$output = fopen('output.txt', 'w');
recode_file("us..flat", $input, $output);
?>
```

### Notes

This function does not currently process file handles referencing remote files (URLs). Both file handles must refer to local files.

### See Also

- fopen() - Opens file or URL

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.recode-file.php
