# ZipArchive::statIndex

Source: https://devdocs.io/php/ziparchive.statindex

(PHP 5 >= 5.2.0, PHP 7, PHP 8, PECL zip >= 1.1.0)

ZipArchive::statIndex — Get the details of an entry defined by its index

### Description

```
public ZipArchive::statIndex(int $index, int $flags = 0): array|false
```

The function obtains information about the entry defined by its index.

### Parameters

Index of the entry

ZipArchive::FL_UNCHANGED may be ORed to it to request information about the original file in the archive, ignoring any changes made.

### Return Values

Returns an array containing the entry details or false on failure.

### Examples

Example #1 Dump the stat info of an entry

```
<?php
$zip = new ZipArchive;
$res = $zip->open('test.zip');
if ($res === TRUE) {
    print_r($zip->statIndex(3));
    $zip->close();
} else {
    echo 'failed, code:' . $res;
}
?>
```

The above example will output something similar to:

```
Array
(
    [name] => foobar/baz
    [index] => 3
    [crc] => 499465816
    [size] => 27
    [mtime] => 1123164748
    [comp_size] => 24
    [comp_method] => 8
)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ziparchive.statindex.php
