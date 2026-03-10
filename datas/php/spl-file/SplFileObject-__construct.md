# SplFileObject::__construct

Source: https://devdocs.io/php/splfileobject.construct

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

SplFileObject::__construct — Construct a new file object

### Description

Construct a new file object.

### Parameters

The file to read.

A URL can be used as a filename with this function if the fopen wrappers have been enabled. See fopen() for more details on how to specify the filename. See the Supported Protocols and Wrappers for links to information about what abilities the various wrappers have, notes on their usage, and information on any predefined variables they may provide.

The mode in which to open the file. See fopen() for a list of allowed modes.

Whether to search in the include_path for filename.

A valid context resource created with stream_context_create().

### Errors/Exceptions

Throws a RuntimeException if the filename cannot be opened.

Throws a LogicException if the filename is a directory.

### Examples

Example #1 SplFileObject::__construct() example

This example opens the current file and iterates over its contents line by line.

```
<?php
$file = new SplFileObject(__FILE__);
foreach ($file as $line_num => $line) {
    echo "Line $line_num is $line";
}
?>
```

The above example will output something similar to:

```
Line 0 is <?php
Line 1 is $file = new SplFileObject(__FILE__);
Line 2 is foreach ($file as $line_num => $line) {
Line 3 is     echo "Line $line_num is $line";
Line 4 is }
Line 5 is ?>
```

### See Also

- SplFileInfo::openFile() - Gets an SplFileObject object for the file
- fopen() - Opens file or URL

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/splfileobject.construct.php
