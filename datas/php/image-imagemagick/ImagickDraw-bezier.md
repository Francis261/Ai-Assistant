# ImagickDraw::bezier

Source: https://devdocs.io/php/imagickdraw.bezier

(PECL imagick 2, PECL imagick 3)

ImagickDraw::bezier — Draws a bezier curve

### Description

```
public ImagickDraw::bezier(array $coordinates): bool
```

This function is currently not documented; only its argument list is available.

Draws a bezier curve through a set of points on the image.

### Parameters

Multidimensional array like array( array( 'x' => 1, 'y' => 2 ), array( 'x' => 3, 'y' => 4 ) )

### Return Values

No value is returned.

### Examples

Example #1 ImagickDraw::bezier() example

```
<?php
function bezier($strokeColor, $fillColor, $backgroundColor) {

    $draw = new \ImagickDraw();

    $strokeColor = new \ImagickPixel($strokeColor);
    $fillColor = new \ImagickPixel($fillColor);

    $draw->setStrokeOpacity(1);
    $draw->setStrokeColor($strokeColor);
    $draw->setFillColor($fillColor);

    $draw->setStrokeWidth(2);

    $smoothPointsSet = [
        [
            ['x' => 10.0 * 5, 'y' => 10.0 * 5],
            ['x' => 30.0 * 5, 'y' => 90.0 * 5],
            ['x' => 25.0 * 5, 'y' => 10.0 * 5],
            ['x' => 50.0 * 5, 'y' => 50.0 * 5],
        ], 
        [
            ['x' => 50.0 * 5, 'y' => 50.0 * 5],
            ['x' => 75.0 * 5, 'y' => 90.0 * 5],
            ['x' => 70.0 * 5, 'y' => 10.0 * 5],
            ['x' => 90.0 * 5, 'y' => 40.0 * 5],
        ],
    ];

    foreach ($smoothPointsSet as $points) {
        $draw->bezier($points);
    }

    $disjointPoints = [
        [
            ['x' => 10 * 5, 'y' => 10 * 5], 
            ['x' => 30 * 5, 'y' => 90 * 5], 
            ['x' => 25 * 5, 'y' => 10 * 5],
            ['x' => 50 * 5, 'y' => 50 * 5],
        ],
        [
            ['x' => 50 * 5, 'y' => 50 * 5], 
            ['x' => 80 * 5, 'y' => 50 * 5],
            ['x' => 70 * 5, 'y' => 10 * 5],
            ['x' => 90 * 5, 'y' => 40 * 5],
         ]
    ];
    $draw->translate(0, 200);

    foreach ($disjointPoints as $points) {
        $draw->bezier($points);
    }

    //Create an image object which the draw commands can be rendered into
    $imagick = new \Imagick();
    $imagick->newImage(500, 500, $backgroundColor);
    $imagick->setImageFormat("png");

    //Render the draw commands in the ImagickDraw object 
    //into the image.
    $imagick->drawImage($draw);

    //Send the image to the browser
    header("Content-Type: image/png");
    echo $imagick->getImageBlob();
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagickdraw.bezier.php
