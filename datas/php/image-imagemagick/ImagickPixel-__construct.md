# ImagickPixel::__construct

Source: https://devdocs.io/php/imagickpixel.construct

(PECL imagick 2, PECL imagick 3)

ImagickPixel::__construct — The ImagickPixel constructor

### Description

```
public ImagickPixel::__construct(string $color = ?)
```

This function is currently not documented; only its argument list is available.

Constructs an ImagickPixel object. If a color is specified, the object is constructed and then initialised with that color before being returned.

### Parameters

The optional color string to use as the initial value of this object.

### Return Values

Returns an ImagickPixel object on success, throwing ImagickPixelException on failure.

### Examples

Example #1 ImagickPixel::construct()

```
<?php
function construct() {

    $columns = 4;
    
    $exampleColors = array(
        "rgba(100%, 0%, 0%, 0.5)",
        "hsb(33.3333%, 100%,  75%)", // medium green
        "hsl(120, 255,   191.25)", //medium green
        "graya(50%, 0.5)", //  semi-transparent mid gray
        "LightCoral", "none", //"cmyk(0.9, 0.48, 0.83, 0.50)",
        "#f00", //  #rgb
        "#ff0000", //  #rrggbb
        "#ff0000ff", //  #rrggbbaa
        "#ffff00000000", //  #rrrrggggbbbb
        "#ffff00000000ffff", //  #rrrrggggbbbbaaaa
        "rgb(255, 0, 0)", //  an integer in the range 0—255 for each component
        "rgb(100.0%, 0.0%, 0.0%)", //  a float in the range 0—100% for each component
        "rgb(255, 0, 0)", //  range 0 - 255
        "rgba(255, 0, 0, 1.0)", //  the same, with an explicit alpha value
        "rgb(100%, 0%, 0%)", //  range 0.0% - 100.0%
        "rgba(100%, 0%, 0%, 1.0)", //  the same, with an explicit alpha value
    );

    $draw = new \ImagickDraw();
    $count = 0;
    $black = new \ImagickPixel('rgb(0, 0, 0)');

    foreach ($exampleColors as $exampleColor) {
        $color = new \ImagickPixel($exampleColor);

        $draw->setstrokewidth(1.0);
        $draw->setStrokeColor($black);
        $draw->setFillColor($color);
        $offsetX = ($count % $columns) * 50 + 5;
        $offsetY = intval($count / $columns) * 50 + 5;
        $draw->rectangle(0 + $offsetX, 0 + $offsetY, 40 + $offsetX, 40 + $offsetY);
        $count++;
    }

    $image = new \Imagick();
    $image->newImage(350, 350, "blue");
    $image->setImageFormat("png");
    $image->drawImage($draw);
    header("Content-Type: image/png");
    echo $image->getImageBlob();
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagickpixel.construct.php
