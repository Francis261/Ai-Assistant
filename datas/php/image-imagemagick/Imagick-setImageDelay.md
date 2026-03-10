# Imagick::setImageDelay

Source: https://devdocs.io/php/imagick.setimagedelay

(PECL imagick 2, PECL imagick 3)

Imagick::setImageDelay — Sets the image delay

### Description

```
public Imagick::setImageDelay(int $delay): bool
```

Sets the image delay. For an animated image this is the amount of time that this frame of the image should be displayed for, before displaying the next frame.

The delay can be set individually for each frame in an image.

### Parameters

The amount of time expressed in 'ticks' that the image should be displayed for. For animated GIFs there are 100 ticks per second, so a value of 20 would be 20/100 of a second aka 1/5th of a second.

### Return Values

Returns true on success.

### Errors/Exceptions

Throws ImagickException on error.

### Examples

Example #1 Modify animated Gif with Imagick::setImageDelay()

```
<?php

// Modify an animated Gif so that it's frames are played at a variable speed,
// varying between being shown for 50ms down to 0ms, which will cause the frame
// to be skipped in most browsers.
$imagick = new Imagick(realpath("Test.gif"));
$imagick = $imagick->coalesceImages();

$frameCount = 0;

foreach ($imagick as $frame) {
    $imagick->setImageDelay((($frameCount % 11) * 5));
    $frameCount++;
}

$imagick = $imagick->deconstructImages();

$imagick->writeImages("/path/to/save/output.gif", true);

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.setimagedelay.php
