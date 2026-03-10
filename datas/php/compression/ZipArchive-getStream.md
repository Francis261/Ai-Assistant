# ZipArchive::getStream

Source: https://devdocs.io/php/ziparchive.getstream

(PHP 5 >= 5.2.0, PHP 7, PHP 8, PECL zip >= 1.1.0)

ZipArchive::getStream — Get a file handler to the entry defined by its name (read only)

### Description

```
public ZipArchive::getStream(string $name): resource|false
```

Get a file handler to the entry defined by its name. For now, it only supports read operations.

### Parameters

The name of the entry to use.

### Return Values

Returns a file pointer (resource) on success or false on failure.

### Examples

Example #1 Get the entry contents with fread() and store it

```
<?php
$contents = '';
$z = new ZipArchive();
if ($z->open('test.zip')) {
    $fp = $z->getStream('test');
    if(!$fp) exit("failed\n");

    while (!feof($fp)) {
        $contents .= fread($fp, 2);
    }

    fclose($fp);
    file_put_contents('t',$contents);
    echo "done.\n";
}
?>
```

Example #2 Same as the previous example but with fopen() and the zip stream wrapper

```
<?php
$contents = '';
$fp = fopen('zip://' . dirname(__FILE__) . '/test.zip#test', 'r');
if (!$fp) {
    exit("cannot open\n");
}
while (!feof($fp)) {
    $contents .= fread($fp, 2);
}
echo "$contents\n";
fclose($fp);
echo "done.\n";
?>
```

Example #3 Stream wrapper and image, can be used with the xml function as well

```
<?php
$im = imagecreatefromgif('zip://' . dirname(__FILE__) . '/test_im.zip#pear_item.gif');
imagepng($im, 'a.png');
?>
```

### See Also

- ZipArchive::getStreamIndex() - Get a file handler to the entry defined by its index (read only)
- ZipArchive::getStreamName() - Get a file handler to the entry defined by its name (read only)
- Compression Streams

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ziparchive.getstream.php
