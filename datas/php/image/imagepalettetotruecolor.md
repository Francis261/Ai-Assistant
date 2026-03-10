# imagepalettetotruecolor

Source: https://devdocs.io/php/function.imagepalettetotruecolor

(PHP 5 >= 5.5.0, PHP 7, PHP 8)

imagepalettetotruecolor — Converts a palette based image to true color

### Description

```
imagepalettetotruecolor(GdImage $image): bool
```

Converts a palette based image, created by functions like imagecreate() to a true color image, like imagecreatetruecolor().

### Parameters

A GdImage object, returned by one of the image creation functions, such as imagecreatetruecolor().

### Return Values

Returns true if the convertion was complete, or if the source image already is a true color image, otherwise false is returned.

### Changelog

### Examples

Example #1 Converts any image object to true color

```
<?php
// Backwards compatiblity
if(!function_exists('imagepalettetotruecolor'))
{
    function imagepalettetotruecolor(&$src)
    {
        if(imageistruecolor($src))
        {
            return(true);
        }

        $dst = imagecreatetruecolor(imagesx($src), imagesy($src));

        imagecopy($dst, $src, 0, 0, 0, 0, imagesx($src), imagesy($src));

        $src = $dst;

        return(true);
    }
}

// Helper closure
$typeof = function() use($im)
{
    echo 'typeof($im) = ' . (imageistruecolor($im) ? 'true color' : 'palette'), PHP_EOL;
};

// Create a palette based image
$im = imagecreate(100, 100);
$typeof();

// Convert it to true color
imagepalettetotruecolor($im);
$typeof();
?>
```

The above example will output:

```
typeof($im) = palette
typeof($im) = true color
```

### See Also

- imagecreatetruecolor() - Create a new true color image
- imageistruecolor() - Finds whether an image is a truecolor image

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imagepalettetotruecolor.php
