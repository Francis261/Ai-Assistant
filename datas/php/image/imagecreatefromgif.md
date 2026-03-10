# imagecreatefromgif

Source: https://devdocs.io/php/function.imagecreatefromgif

(PHP 4, PHP 5, PHP 7, PHP 8)

imagecreatefromgif — Create a new image from file or URL

### Description

```
imagecreatefromgif(string $filename): GdImage|false
```

imagecreatefromgif() returns an image identifier representing the image obtained from the given filename.

When reading GIF files into memory, only the first frame is returned in the image object. The size of the image is not necessarily what is reported by getimagesize().

A URL can be used as a filename with this function if the fopen wrappers have been enabled. See fopen() for more details on how to specify the filename. See the Supported Protocols and Wrappers for links to information about what abilities the various wrappers have, notes on their usage, and information on any predefined variables they may provide.

### Parameters

Path to the GIF image.

### Return Values

Returns an image object on success, false on errors.

### Changelog

### Examples

Example #1 Example to handle an error during loading of a GIF

```
<?php
function LoadGif($imgname)
{
    /* Attempt to open */
    $im = @imagecreatefromgif($imgname);

    /* See if it failed */
    if(!$im)
    {
        /* Create a blank image */
        $im = imagecreatetruecolor (150, 30);
        $bgc = imagecolorallocate ($im, 255, 255, 255);
        $tc = imagecolorallocate ($im, 0, 0, 0);

        imagefilledrectangle ($im, 0, 0, 150, 30, $bgc);

        /* Output an error message */
        imagestring ($im, 1, 5, 5, 'Error loading ' . $imgname, $tc);
    }

    return $im;
}

header('Content-Type: image/gif');

$img = LoadGif('bogus.image');

imagegif($img);
?>
```

The above example will output something similar to:

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imagecreatefromgif.php
