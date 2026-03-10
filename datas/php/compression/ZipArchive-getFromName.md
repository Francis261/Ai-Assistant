# ZipArchive::getFromName

Source: https://devdocs.io/php/ziparchive.getfromname

(PHP 5 >= 5.2.0, PHP 7, PHP 8, PECL zip >= 1.1.0)

ZipArchive::getFromName — Returns the entry contents using its name

### Description

```
public ZipArchive::getFromName(string $name, int $len = 0, int $flags = 0): string|false
```

Returns the entry contents using its name.

### Parameters

Name of the entry

The length to be read from the entry. If 0, then the entire entry is read.

The flags to use to find the entry. The following values may be ORed.

- ZipArchive::FL_UNCHANGED
- ZipArchive::FL_COMPRESSED
- ZipArchive::FL_NOCASE

ZipArchive::FL_UNCHANGED

ZipArchive::FL_COMPRESSED

ZipArchive::FL_NOCASE

### Return Values

Returns the contents of the entry on success or false on failure.

### Examples

Example #1 Get the file contents

```
<?php
$zip = new ZipArchive;
if ($zip->open('test1.zip') === TRUE) {
    echo $zip->getFromName('testfromfile.php');
    $zip->close();
} else {
    echo 'failed';
}
?>
```

Example #2 Convert an image from a zip entry

```
<?php
$z = new ZipArchive();
if ($z->open(dirname(__FILE__) . '/test_im.zip')) {
    $im_string = $z->getFromName("pear_item.gif");
    $im = imagecreatefromstring($im_string);
    imagepng($im, 'b.png');
}
?>
```

### See Also

- ZipArchive::getFromIndex() - Returns the entry contents using its index

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ziparchive.getfromname.php
