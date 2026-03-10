# imagecreatefromwbmp

Source: https://devdocs.io/php/function.imagecreatefromwbmp

(PHP 4 >= 4.0.1, PHP 5, PHP 7, PHP 8)

imagecreatefromwbmp — Create a new image from file or URL

### Description

```
imagecreatefromwbmp(string $filename): GdImage|false
```

imagecreatefromwbmp() returns an image identifier representing the image obtained from the given filename.

Note: WBMP images are Wireless Bitmaps, not Windows Bitmaps. The latter can be loaded with imagecreatefrombmp().

A URL can be used as a filename with this function if the fopen wrappers have been enabled. See fopen() for more details on how to specify the filename. See the Supported Protocols and Wrappers for links to information about what abilities the various wrappers have, notes on their usage, and information on any predefined variables they may provide.

### Parameters

Path to the WBMP image.

### Return Values

Returns an image object on success, false on errors.

### Changelog

### Examples

Example #1 Example to handle an error during loading of a WBMP

```
<?php
function LoadWBMP($imgname)
{
    /* Attempt to open */
    $im = @imagecreatefromwbmp($imgname);

    /* See if it failed */
    if(!$im)
    {
        /* Create a blank image */
        $im  = imagecreatetruecolor(150, 30);
        $bgc = imagecolorallocate($im, 255, 255, 255);
        $tc  = imagecolorallocate($im, 0, 0, 0);

        imagefilledrectangle($im, 0, 0, 150, 30, $bgc);

        /* Output an error message */
        imagestring($im, 1, 5, 5, 'Error loading ' . $imgname, $tc);
    }

    return $im;
}

header('Content-Type: image/vnd.wap.wbmp');

$img = LoadWBMP('bogus.image');

imagewbmp($img);
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imagecreatefromwbmp.php
