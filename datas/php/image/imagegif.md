# imagegif

Source: https://devdocs.io/php/function.imagegif

(PHP 4, PHP 5, PHP 7, PHP 8)

imagegif — Output image to browser or file

### Description

```
imagegif(GdImage $image, resource|string|null $file = null): bool
```

imagegif() creates the GIF file in file from the image image. The image argument is the return from the imagecreate() or imagecreatefrom* function.

The image format will be GIF87a unless the image has been made transparent with imagecolortransparent(), in which case the image format will be GIF89a.

### Parameters

A GdImage object, returned by one of the image creation functions, such as imagecreatetruecolor().

The path or an open stream resource (which is automatically closed after this function returns) to save the file to. If not set or null, the raw image stream will be output directly.

### Return Values

Returns true on success or false on failure.

However, if libgd fails to output the image, this function returns true.

### Changelog

### Examples

Example #1 Outputting an image using imagegif()

```
<?php
// Create a new image instance
$im = imagecreatetruecolor(100, 100);

// Make the background white
imagefilledrectangle($im, 0, 0, 99, 99, 0xFFFFFF);

// Draw a text string on the image
imagestring($im, 3, 40, 20, 'GD Library', 0xFFBA00);

// Output the image to browser
header('Content-Type: image/gif');

imagegif($im);
?>
```

Example #2 Converting a PNG image to GIF using imagegif()

```
<?php

// Load the PNG
$png = imagecreatefrompng('./php.png');

// Save the image as a GIF
imagegif($png, './php.gif');

// We're done
echo 'Converted PNG image to GIF with success!';
?>
```

### Notes

Note:

The following code snippet allows you to write more portable PHP applications by auto-detecting the type of GD support which is available. Replace the sequence header ("Content-Type: image/gif");
 imagegif ($im); by the more flexible sequence:

```
<?php
// Create a new image instance
$im = imagecreatetruecolor(100, 100);

// Do some image operations here

// Handle output
if(function_exists('imagegif'))
{
    // For GIF
    header('Content-Type: image/gif');

    imagegif($im);
}
elseif(function_exists('imagejpeg'))
{
    // For JPEG
    header('Content-Type: image/jpeg');

    imagejpeg($im, NULL, 100);
}
elseif(function_exists('imagepng'))
{
    // For PNG
    header('Content-Type: image/png');

    imagepng($im);
}
elseif(function_exists('imagewbmp'))
{
    // For WBMP
    header('Content-Type: image/vnd.wap.wbmp');

    imagewbmp($im);
}
else
{
    die('No image support in this PHP server');
}
?>
```

Note:

You can use the function imagetypes() for checking the presence of the various supported image formats:

```
<?php
if(imagetypes() & IMG_GIF)
{
    header('Content-Type: image/gif');
    imagegif($im);
}
elseif(imagetypes() & IMG_JPG)
{
    /* ... etc. */
}
?>
```

### See Also

- imagepng() - Output a PNG image to either the browser or a file
- imagewbmp() - Output image to browser or file
- imagejpeg() - Output image to browser or file
- imagetypes() - Return the image types supported by this PHP build

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imagegif.php
