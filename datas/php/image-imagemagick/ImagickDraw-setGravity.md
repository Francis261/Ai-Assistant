# ImagickDraw::setGravity

Source: https://devdocs.io/php/imagickdraw.setgravity

(PECL imagick 2, PECL imagick 3)

ImagickDraw::setGravity — Sets the text placement gravity

### Description

```
public ImagickDraw::setGravity(int $gravity): bool
```

This function is currently not documented; only its argument list is available.

Sets the text placement gravity to use when annotating with text.

### Parameters

One of the GRAVITY constant (imagick::GRAVITY_*).

### Return Values

No value is returned.

### Examples

Example #1 ImagickDraw::setGravity() example

```
<?php
function setGravity($fillColor, $strokeColor, $backgroundColor) {

    $draw = new \ImagickDraw();
    $draw->setStrokeColor($strokeColor);
    $draw->setFillColor($fillColor);
    $draw->setStrokeWidth(1);
    $draw->setFontSize(24);

    $gravitySettings = array(
        \Imagick::GRAVITY_NORTHWEST => 'NorthWest',
        \Imagick::GRAVITY_NORTH => 'North',
        \Imagick::GRAVITY_NORTHEAST => 'NorthEast',
        \Imagick::GRAVITY_WEST => 'West',
        \Imagick::GRAVITY_CENTER => 'Centre',
        \Imagick::GRAVITY_SOUTHWEST => 'SouthWest',
        \Imagick::GRAVITY_SOUTH => 'South',
        \Imagick::GRAVITY_SOUTHEAST => 'SouthEast',
        \Imagick::GRAVITY_EAST => 'East'
    );

    $draw->setFont("../fonts/Arial.ttf");

    foreach ($gravitySettings as $type => $description) {
        $draw->setGravity($type);
        $draw->annotation(50, 50, '"' . $description . '"');
    }

    $imagick = new \Imagick();
    $imagick->newImage(500, 500, $backgroundColor);
    $imagick->setImageFormat("png");
    $imagick->drawImage($draw);

    header("Content-Type: image/png");
    echo $imagick->getImageBlob();
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagickdraw.setgravity.php
