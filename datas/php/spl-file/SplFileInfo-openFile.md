# SplFileInfo::openFile

Source: https://devdocs.io/php/splfileinfo.openfile

(PHP 5 >= 5.1.2, PHP 7, PHP 8)

SplFileInfo::openFile — Gets an SplFileObject object for the file

### Description

```
public SplFileInfo::openFile(string $mode = "r", bool $useIncludePath = false, ?resource $context = null): SplFileObject
```

Creates an SplFileObject object of the file. This is useful because SplFileObject contains additional methods for manipulating the file whereas SplFileInfo is only useful for gaining information, like whether the file is writable.

### Parameters

The mode for opening the file. See the fopen() documentation for descriptions of possible modes. The default is read only.

When set to true, the filename is also searched for within the include_path

Refer to the context section of the manual for a description of contexts.

### Return Values

The opened file as an SplFileObject object.

### Errors/Exceptions

A RuntimeException if the file cannot be opened (e.g. insufficient access rights).

### Changelog

### Examples

Example #1 SplFileInfo::openFile() example

```
<?php
$fileinfo = new SplFileInfo('/tmp/foo.txt');

if ($fileinfo->isWritable()) {

    $fileobj = $fileinfo->openFile('a');

    $fileobj->fwrite("appended this sample text");
}
?>
```

### See Also

- SplFileObject
- stream_context_create() - Creates a stream context
- fopen() - Opens file or URL

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/splfileinfo.openfile.php
