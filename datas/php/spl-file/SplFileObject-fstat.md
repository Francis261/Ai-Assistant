# SplFileObject::fstat

Source: https://devdocs.io/php/splfileobject.fstat

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

SplFileObject::fstat — Gets information about the file

### Description

```
public SplFileObject::fstat(): array
```

Gathers the statistics of the file. Behaves identically to fstat().

### Parameters

This function has no parameters.

### Return Values

Returns an array with the statistics of the file; the format of the array is described in detail on the stat() manual page.

### Examples

Example #1 SplFileObject::fstat() example

```
<?php
$file = new SplFileObject("/etc/passwd");
$stat = $file->fstat();

// Print only the associative part
print_r(array_slice($stat, 13));

?>
```

The above example will output something similar to:

```
Array
(
    [dev] => 771
    [ino] => 488704
    [mode] => 33188
    [nlink] => 1
    [uid] => 0
    [gid] => 0
    [rdev] => 0
    [size] => 1114
    [atime] => 1061067181
    [mtime] => 1056136526
    [ctime] => 1056136526
    [blksize] => 4096
    [blocks] => 8
)
```

### See Also

- fstat() - Gets information about a file using an open file pointer
- stat() - Gives information about a file

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/splfileobject.fstat.php
