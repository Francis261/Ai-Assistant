# readfile

Source: https://devdocs.io/php/function.readfile

(PHP 4, PHP 5, PHP 7, PHP 8)

readfile — Outputs a file

### Description

```
readfile(string $filename, bool $use_include_path = false, ?resource $context = null): int|false
```

Reads a file and writes it to the output buffer.

### Parameters

The filename being read.

You can use the optional second parameter and set it to true, if you want to search for the file in the include_path, too.

A context stream resource.

### Return Values

Returns the number of bytes read from the file on success, or false on failure

### Errors/Exceptions

Upon failure, an E_WARNING is emitted.

### Examples

Example #1 Forcing a download using readfile()

```
<?php
$file = 'monkey.gif';

if (file_exists($file)) {
    header('Content-Description: File Transfer');
    header('Content-Type: application/octet-stream');
    header('Content-Disposition: attachment; filename="'.basename($file).'"');
    header('Expires: 0');
    header('Cache-Control: must-revalidate');
    header('Pragma: public');
    header('Content-Length: ' . filesize($file));
    readfile($file);
    exit;
}
?>
```

The above example will output something similar to:

### Notes

Note:

readfile() will not present any memory issues, even when sending large files, on its own. If you encounter an out of memory error ensure that output buffering is off with ob_get_level().

A URL can be used as a filename with this function if the fopen wrappers have been enabled. See fopen() for more details on how to specify the filename. See the Supported Protocols and Wrappers for links to information about what abilities the various wrappers have, notes on their usage, and information on any predefined variables they may provide.

### See Also

- fpassthru() - Output all remaining data on a file pointer
- file() - Reads entire file into an array
- fopen() - Opens file or URL
- include - include
- require - require
- virtual() - Perform an Apache sub-request
- file_get_contents() - Reads entire file into a string
- Supported Protocols and Wrappers

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.readfile.php
