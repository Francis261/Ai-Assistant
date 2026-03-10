# Imagick::sparseColorImage

Source: https://devdocs.io/php/imagick.sparsecolorimage

(PECL imagick 2 >= 2.3.0, PECL imagick 3)

Imagick::sparseColorImage — Interpolates colors

### Description

```
public Imagick::sparseColorImage(int $SPARSE_METHOD, array $arguments, int $channel = Imagick::CHANNEL_DEFAULT): bool
```

Given the arguments array containing numeric values this method interpolates the colors found at those coordinates across the whole image using sparse_method. This method is available if Imagick has been compiled against ImageMagick version 6.4.5 or newer.

### Parameters

Refer to this list of sparse method constants

An array containing the coordinates. The array is in format array(1,1, 2,45)

Provide any channel constant that is valid for your channel mode. To apply to more than one channel, combine channel constants using bitwise operators. Defaults to Imagick::CHANNEL_DEFAULT. Refer to this list of channel constants

### Return Values

Returns true on success.

### Errors/Exceptions

Throws ImagickException on error.

### Examples

Example #1 SPARSECOLORMETHOD_BARYCENTRIC Imagick::sparseColorImage()

```
<?php
    function renderImageBarycentric2() {
        $points = [
            [0.30, 0.10, 'red'],
            [0.10, 0.80, 'blue'],
            [0.70, 0.60, 'lime'],
            [0.80, 0.20, 'yellow'],
        ];
        $imagick = createGradientImage(
            400, 400,
            $points,
            \Imagick::SPARSECOLORMETHOD_BARYCENTRIC
        );
        header("Content-Type: image/png");
        echo $imagick->getImageBlob();
    }

?>
```

Example #2 SPARSECOLORMETHOD_BILINEAR Imagick::sparseColorImage()

```
<?php
    function renderImageBilinear() {
        $points = [[0.30, 0.10, 'red'], [0.10, 0.80, 'blue'], [0.70, 0.60, 'lime'], [0.80, 0.20, 'yellow'],];
        $imagick = createGradientImage(500, 500, $points, \Imagick::SPARSECOLORMETHOD_BILINEAR);
        header("Content-Type: image/png");
        echo $imagick->getImageBlob();
    }

?>
```

Example #3 SPARSECOLORMETHOD_SPEPARDS Imagick::sparseColorImage()

```
<?php
    function renderImageShepards() {
        $points = [
            [0.30, 0.10, 'red'],
            [0.10, 0.80, 'blue'],
            [0.70, 0.60, 'lime'],
            [0.80, 0.20, 'yellow'],
        ];
        $imagick = createGradientImage(600, 600, $points, \Imagick::SPARSECOLORMETHOD_SPEPARDS);
        header("Content-Type: image/png");
        echo $imagick->getImageBlob();
    }

?>
```

Example #4 SPARSECOLORMETHOD_VORONOI Imagick::sparseColorImage()

```
<?php
    function renderImageVoronoi() {
        $points = [
            [0.30, 0.10, 'red'],
            [0.10, 0.80, 'blue'],
            [0.70, 0.60, 'lime'],
            [0.80, 0.20, 'yellow'],
        ];
        $imagick = createGradientImage(500, 500, $points, \Imagick::SPARSECOLORMETHOD_VORONOI);
        header("Content-Type: image/png");
        echo $imagick->getImageBlob();
    }

?>
```

Example #5 SPARSECOLORMETHOD_BARYCENTRIC Imagick::sparseColorImage()

```
<?php
    function renderImageBarycentric() {
        $points = [
            [0, 0, 'skyblue'],
            [-1, 1, 'skyblue'],
            [1, 1, 'black'],
        ];
        $imagick = createGradientImage(600, 200, $points, \Imagick::SPARSECOLORMETHOD_BARYCENTRIC);
        header("Content-Type: image/png");
        echo $imagick->getImageBlob();
    }

?>
```

Example #6 createGradientImage is used by other examples. Imagick::sparseColorImage()

```
<?php
function createGradientImage($width, $height, $colorPoints, $sparseMethod, $absolute = false) {

    $imagick = new \Imagick();
    $imagick->newImage($width, $height, "white");
    $imagick->setImageFormat("png");

    $barycentricPoints = array();

    foreach ($colorPoints as $colorPoint) {

        if ($absolute == true) {
            $barycentricPoints[] = $colorPoint[0];
            $barycentricPoints[] = $colorPoint[1];
        }
        else {
            $barycentricPoints[] = $colorPoint[0] * $width;
            $barycentricPoints[] = $colorPoint[1] * $height;
        }

        if (is_string($colorPoint[2])) {
            $imagickPixel = new \ImagickPixel($colorPoint[2]);
        }
        else if ($colorPoint[2] instanceof \ImagickPixel) {
            $imagickPixel = $colorPoint[2];
        }
        else{
            $errorMessage = sprintf(
                "Value %s is neither a string nor an ImagickPixel class. Cannot use as a color.",
                $colorPoint[2]
            );

            throw new \InvalidArgumentException(
                $errorMessage
            );
        }

        $red = $imagickPixel->getColorValue(\Imagick::COLOR_RED);
        $green = $imagickPixel->getColorValue(\Imagick::COLOR_GREEN);
        $blue = $imagickPixel->getColorValue(\Imagick::COLOR_BLUE);
        $alpha = $imagickPixel->getColorValue(\Imagick::COLOR_ALPHA);

        $barycentricPoints[] = $red;
        $barycentricPoints[] = $green;
        $barycentricPoints[] = $blue;
        $barycentricPoints[] = $alpha;
    }

    $imagick->sparseColorImage($sparseMethod, $barycentricPoints);

    return $imagick;
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/imagick.sparsecolorimage.php
