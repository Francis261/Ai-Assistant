# Imagick::setImageTicksPerSecond

Source: https://devdocs.io/php/imagick.setimagetickspersecond

(PECL imagick 2, PECL imagick 3)

Imagick::setImageTicksPerSecond — Sets the image ticks-per-second

### Description

```
public Imagick::setImageTicksPerSecond(int $ticks_per_second): bool
```

Adjust the amount of time that a frame of an animated image is displayed for.

Note:

For animated GIFs, this function does not change the number of 'image ticks' per second, which is always defined as 100. Instead it adjusts the amount of time that the frame is displayed for to simulate the change in 'ticks per second'.

For example, for an animated GIF where each frame is displayed for 20 ticks (1/5 of a second) when this method is called on each frame of that image with an argument of 50 the frames are adjusted to be displayed for 40 ticks (2/5 of a second) and the animation will play at half the original speed.

### Parameters

The duration for which an image should be displayed expressed in ticks per second.

### Return Values

Returns true on success.

### Examples

Example #1 Modify animated Gif with Imagick::setImageTicksPerSecond()

```
<?php

// Modify an animated gif so the first half of the gif is played at half the
// speed it currently is, and the second half to be played at double the speed
// it currently is

$imagick = new Imagick(realpath("Test.gif"));
$imagick = $imagick->coalesceImages();

$totalFrames = $imagick->getNumberImages();

$frameCount = 0;

foreach ($imagick as $frame) {
    $imagick->setImageTicksPerSecond(50);
    
    if ($frameCount < ($totalFrames / 2)) {
        // Modify the frame to be displayed for twice as long as it currently is
        $imagick->setImageTicksPerSecond(50);
    } else {
        // Modify the frame to be displayed for half as long as it currently is
        $imagick->setImageTicksPerSecond(200);
    }

    $frameCount++;
}

$imagick = $imagick->deconstructImages();

$imagick->writeImages("/path/to/save/output.gif", true);

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.setimagetickspersecond.php
