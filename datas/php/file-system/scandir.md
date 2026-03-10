# scandir

Source: https://devdocs.io/php/function.scandir

(PHP 5, PHP 7, PHP 8)

scandir — List files and directories inside the specified path

### Description

```
scandir(string $directory, int $sorting_order = SCANDIR_SORT_ASCENDING, ?resource $context = null): array|false
```

Returns an array of files and directories from the directory.

### Parameters

The directory that will be scanned.

By default, the sorted order is alphabetical in ascending order. If the optional sorting_order is set to SCANDIR_SORT_DESCENDING, then the sort order is alphabetical in descending order. If it is set to SCANDIR_SORT_NONE then the result is unsorted.

For a description of the context parameter, refer to the streams section of the manual.

### Return Values

Returns an array of filenames on success, or false on failure. If directory is not a directory, then boolean false is returned, and an error of level E_WARNING is generated.

### Changelog

### Examples

Example #1 A simple scandir() example

```
<?php
$dir    = '/tmp';
$files1 = scandir($dir);
$files2 = scandir($dir, SCANDIR_SORT_DESCENDING);

print_r($files1);
print_r($files2);
?>
```

The above example will output something similar to:

```
Array
(
    [0] => .
    [1] => ..
    [2] => bar.php
    [3] => foo.txt
    [4] => somedir
)
Array
(
    [0] => somedir
    [1] => foo.txt
    [2] => bar.php
    [3] => ..
    [4] => .
)
```

### Notes

A URL can be used as a filename with this function if the fopen wrappers have been enabled. See fopen() for more details on how to specify the filename. See the Supported Protocols and Wrappers for links to information about what abilities the various wrappers have, notes on their usage, and information on any predefined variables they may provide.

### See Also

- opendir() - Open directory handle
- readdir() - Read entry from directory handle
- glob() - Find pathnames matching a pattern
- is_dir() - Tells whether the filename is a directory
- sort() - Sort an array in ascending order

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.scandir.php
